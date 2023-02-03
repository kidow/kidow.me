import { useEffect, useRef, useCallback, useLayoutEffect, useMemo } from 'react'
import type { RefObject, FC } from 'react'
import { priceFormat } from 'services'

interface CountUpProps extends CountUpInstanceProps {}

interface CountUpInstanceProps {
  duration?: number
  end: number
  start?: number
}

interface CountUpApi {
  start: () => void
  pauseResume: () => void
  reset: () => void
  update: (newEnd: string | number) => void
  getCountUp: (recreate?: boolean) => CountUp
}

interface CountUpOptions {
  startVal?: number
  duration?: number
}

class CountUp {
  private defaults: CountUpOptions = {
    startVal: 0,
    duration: 2
  }
  private el: HTMLElement | HTMLInputElement | null = null
  private rAF: any
  private startTime: number = 0
  private remaining: number = 0
  private finalEndVal: number | null = null
  private countDown = false
  error = ''
  startVal = 0
  duration: number = 2
  paused = true
  frameVal: number

  constructor(
    private target: string | HTMLElement | HTMLInputElement,
    private endVal: number,
    public options?: CountUpOptions
  ) {
    this.options = {
      ...this.defaults,
      ...options
    }

    this.startVal = this.validateValue(this.options?.startVal || 0)
    this.frameVal = this.startVal
    this.endVal = this.validateValue(endVal)
    this.resetDuration()

    this.el =
      typeof target === 'string' ? document.getElementById(target) : target
    if (this.el) {
      this.printValue(this.startVal)
    } else {
      this.error = '[CountUp] target is null or undefined'
    }
  }

  private determineDirectionAndSmartEasing(): void {
    const end = this.finalEndVal ? this.finalEndVal : this.endVal
    this.countDown = this.startVal > end
    const animateAmount = end - this.startVal
    if (Math.abs(animateAmount) > 999) {
      this.finalEndVal = end
      const up = this.countDown ? 1 : -1
      this.endVal = end + up * 333
      this.duration = this.duration / 2
    } else {
      this.endVal = end
      this.finalEndVal = null
    }
  }

  start(): void {
    if (this.error) return
    if (this.duration > 0) {
      this.determineDirectionAndSmartEasing()
      this.paused = false
      this.rAF = requestAnimationFrame(this.count)
    } else {
      this.printValue(this.endVal)
    }
  }

  pauseResume(): void {
    if (!this.paused) {
      cancelAnimationFrame(this.rAF)
    } else {
      this.startTime = 0
      this.duration = this.remaining
      this.startVal = this.frameVal
      this.determineDirectionAndSmartEasing()
      this.rAF = requestAnimationFrame(this.count)
    }
    this.paused = !this.paused
  }

  reset(): void {
    cancelAnimationFrame(this.rAF)
    this.paused = true
    this.resetDuration()
    this.startVal = this.validateValue(this.options?.startVal || 0)
    this.frameVal = this.startVal
    this.printValue(this.startVal)
  }

  // pass a new endVal and start animation
  update(newEndVal: string | number): void {
    cancelAnimationFrame(this.rAF)
    this.startTime = 0
    this.endVal = this.validateValue(newEndVal)
    if (this.endVal === this.frameVal) return

    this.startVal = this.frameVal
    if (!this.finalEndVal) this.resetDuration()

    this.finalEndVal = 0
    this.determineDirectionAndSmartEasing()
    this.rAF = requestAnimationFrame(this.count)
  }

  count = (timestamp: number): void => {
    if (!this.startTime) this.startTime = timestamp

    const progress = timestamp - this.startTime
    this.remaining = this.duration - progress

    // to ease or not to ease
    if (this.countDown) {
      this.frameVal =
        this.startVal -
        this.easeOutExpo(
          progress,
          0,
          this.startVal - this.endVal,
          this.duration
        )
    } else {
      this.frameVal = this.easeOutExpo(
        progress,
        this.startVal,
        this.endVal - this.startVal,
        this.duration
      )
    }

    // don't go past endVal since progress can exceed duration in the last frame
    if (this.countDown) {
      this.frameVal = this.frameVal < this.endVal ? this.endVal : this.frameVal
    } else {
      this.frameVal = this.frameVal > this.endVal ? this.endVal : this.frameVal
    }

    this.frameVal = Number(this.frameVal.toFixed(0))

    // format and print value
    this.printValue(this.frameVal)

    // whether to continue
    if (progress < this.duration) {
      this.rAF = requestAnimationFrame(this.count)
    } else if (this.finalEndVal !== null) {
      // smart easing
      this.update(this.finalEndVal)
    }
  }

  printValue(val: number): void {
    const result = this.formatNumber(val)

    if (!this.el) return
    else if (this.el.tagName === 'INPUT') {
      const input = this.el as HTMLInputElement
      input.value = result
    } else if (this.el.tagName === 'text' || this.el.tagName === 'tspan') {
      this.el.textContent = result
    } else {
      this.el.innerHTML = result
    }
  }

  ensureNumber(n: any): boolean {
    return typeof n === 'number' && !isNaN(n)
  }

  validateValue(value: string | number): number {
    const newValue = Number(value)
    if (!this.ensureNumber(newValue)) {
      this.error = `[CountUp] invalid start or end value: ${value}`
      return 0
    } else {
      return newValue
    }
  }

  private resetDuration(): void {
    this.startTime = 0
    this.duration = Number(this.options?.duration || 2) * 1000
    this.remaining = this.duration
  }

  formatNumber = (num: number): string => {
    return priceFormat(num)
  }

  easeOutExpo = (t: number, b: number, c: number, d: number): number =>
    (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? useLayoutEffect
    : useEffect

function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref: any = useRef(fn)

  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  })

  return useCallback(
    (...args: any[]) => ref.current.apply(void 0, args),
    []
  ) as T
}

export interface useCountUpProps extends CountUpInstanceProps {
  startOnMount?: boolean
  ref: string | RefObject<HTMLElement>
  enableReinitialize?: boolean
}

const DEFAULTS = {
  duration: 2,
  start: 0,
  startOnMount: true,
  enableReinitialize: true
}

const useCountUp = (props: useCountUpProps): CountUpApi => {
  const { ref, startOnMount, enableReinitialize, ...instanceProps } = useMemo(
    () => ({ ...DEFAULTS, ...props }),
    [props]
  )

  const countUpRef = useRef<CountUp>()
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const isInitializedRef = useRef(false)

  const createInstance = useEventCallback(() => {
    const createCountUpInstance = (
      el: string | HTMLElement,
      props: CountUpInstanceProps
    ): CountUp => {
      const { duration, end, start } = props

      return new CountUp(el, end, {
        startVal: start,
        duration
      })
    }
    return createCountUpInstance(
      typeof ref === 'string' ? ref : ref.current!,
      instanceProps
    )
  })

  const getCountUp = useEventCallback((recreate?: boolean) => {
    const countUp = countUpRef.current
    if (countUp && !recreate) {
      return countUp
    }
    const newCountUp = createInstance()
    countUpRef.current = newCountUp
    return newCountUp
  })

  const start = useEventCallback(() => {
    const run = () => getCountUp(true).start()

    run()
  })

  const pauseResume = useEventCallback(() => {
    getCountUp().pauseResume()
  })

  const reset = useEventCallback(() => {
    timerRef.current && clearTimeout(timerRef.current)
    getCountUp().reset()
  })

  const update: (newEnd: string | number) => void = useEventCallback(
    (newEnd) => {
      getCountUp().update(newEnd)
    }
  )

  const restart = useEventCallback(() => {
    reset()
    start()
  })

  const maybeInitialize = useEventCallback((shouldReset?: boolean) => {
    if (startOnMount) {
      if (shouldReset) reset()
      start()
    }
  })

  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true
      maybeInitialize()
    } else if (enableReinitialize) {
      maybeInitialize(true)
    }
  }, [
    enableReinitialize,
    isInitializedRef,
    maybeInitialize,
    props.start,
    props.duration
  ])

  useEffect(() => {
    return () => reset()
  }, [reset])

  return { start: restart, pauseResume, reset, update, getCountUp }
}

const CountTo: FC<CountUpProps> = (props) => {
  const { ...useCountUpProps } = props
  const containerRef = useRef<HTMLElement>(null)
  const isInitializedRef = useRef(false)

  const {
    start,
    reset,
    update: updateCountUp,
    getCountUp
  } = useCountUp({
    ...useCountUpProps,
    ref: containerRef,
    startOnMount: true,
    enableReinitialize: false
  })

  const restart = useEventCallback(start)

  const update = useEventCallback((end: string | number) => {
    reset()
    updateCountUp(end)
  })

  const initializeOnMount = useEventCallback(() => {
    getCountUp()
  })

  useEffect(() => {
    initializeOnMount()
  }, [initializeOnMount])

  useEffect(() => {
    if (isInitializedRef.current) update(props.end)
  }, [props.end, update])

  useEffect(() => {
    if (isInitializedRef.current) restart()
  }, [restart, props])

  useEffect(() => {
    isInitializedRef.current = true
  }, [])
  return (
    <span ref={containerRef}>
      {props.start ? getCountUp().formatNumber(props.start) : ''}
    </span>
  )
}

export default CountTo
