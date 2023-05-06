import { memo, useEffect, useRef } from 'react'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {
  from?: number
  to: number
  duration?: number
  className?: string
}
interface State {
  count: number
}

const CountTo: FC<Props> = ({ from = 0, to, duration = 2000, className }) => {
  const [{ count }, setState] = useObjectState<State>({ count: from })
  const startTimestamp = useRef<number>(null)

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp
      const progress = Math.floor(timestamp - startTimestamp.current)
      const increment = ((to - from) * progress) / duration
      if (progress < duration) window.requestAnimationFrame(step)
      if (to < Math.floor(from + increment)) setState({ count: to })
      else setState({ count: Math.floor(from + increment) })
    }
    window.requestAnimationFrame(step)
  }, [from, to, duration])

  return <span className={className}>{count.toLocaleString()}</span>
}

export default memo(CountTo)
