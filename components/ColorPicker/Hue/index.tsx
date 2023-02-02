import { forwardRef, useEffect, useRef } from 'react'
import { useCombinedRefs, useObjectState } from 'services'

export interface Props {
  onChange: (red: number, green: number, blue: number) => void
}
interface State {
  y: number
}

const Hue = forwardRef<HTMLCanvasElement, Props>(({ onChange }, ref) => {
  const [{ y }, setState] = useObjectState<State>({ y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  canvasRef.current
  const combinedRef = useCombinedRefs<HTMLCanvasElement>(ref, canvasRef)

  const onMouseDown = (e: MouseEvent) => {
    setState({ y: e.offsetY - 2 })
    const imageData = combinedRef.current
      ?.getContext('2d')
      ?.getImageData(0, e.offsetY - 2, 1, 1).data
    const red = imageData?.at(0) || 0
    const green = imageData?.at(1) || 0
    const blue = imageData?.at(2) || 0
    onChange(red, green, blue)
    combinedRef.current?.addEventListener('mousemove', onMouseMove)
  }

  const onMouseUp = () =>
    combinedRef.current?.removeEventListener('mousemove', onMouseMove)

  const onMouseMove = (e: MouseEvent) => {
    setState({ y: e.offsetY - 2 })
    const imageData = combinedRef.current
      ?.getContext('2d')
      ?.getImageData(0, e.offsetY - 2, 1, 1).data
    const red = imageData?.at(0) || 0
    const green = imageData?.at(1) || 0
    const blue = imageData?.at(2) || 0
    onChange(red, green, blue)
  }

  const onMouseLeave = () =>
    combinedRef.current?.removeEventListener('mousemove', onMouseMove)

  useEffect(() => {
    const ctx = combinedRef.current
      ? combinedRef.current.getContext('2d')
      : null

    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 16, 176)
      for (let i = 0; i <= 360; i += 30) {
        gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`)
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 16, 176)
    }

    combinedRef.current?.addEventListener('mousedown', onMouseDown, false)
    combinedRef.current?.addEventListener('mouseup', onMouseUp, false)
    combinedRef.current?.addEventListener('mouseleave', onMouseLeave, false)
    return () => {
      combinedRef.current?.removeEventListener('mousedown', onMouseDown)
      combinedRef.current?.removeEventListener('mouseup', onMouseUp)
      combinedRef.current?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])
  return (
    <div className="relative w-4 cursor-pointer">
      <canvas width={16} height={176} ref={combinedRef} />
      <div
        style={{ top: y }}
        className="pointer-events-none absolute left-0 h-1 w-full bg-white"
      />
    </div>
  )
})

export default Hue
