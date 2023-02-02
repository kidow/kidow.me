import { forwardRef, useEffect, useRef } from 'react'
import { useCombinedRefs, useObjectState } from 'services'

export interface Props {
  onChange: (red: number, green: number, blue: number) => void
}
interface State {
  x: number
  y: number
}

const Spectrum = forwardRef<HTMLCanvasElement, Props>(({ onChange }, ref) => {
  const [{ x, y }, setState] = useObjectState<State>({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  canvasRef.current
  const combinedRef = useCombinedRefs<HTMLCanvasElement>(ref, canvasRef)

  const onMouseDown = (e: MouseEvent) => {
    setState({ x: e.offsetX - 6, y: e.offsetY - 6 })
    const imageData = combinedRef.current
      ?.getContext('2d')
      ?.getImageData(e.offsetX - 6, e.offsetY - 6, 1, 1).data
    onChange(
      imageData?.at(0) || 0,
      imageData?.at(1) || 0,
      imageData?.at(2) || 0
    )
    combinedRef.current?.addEventListener('mousemove', onMouseMove)
  }

  const onMouseUp = () =>
    combinedRef.current?.removeEventListener('mousemove', onMouseMove)

  const onMouseMove = (e: MouseEvent) => {
    setState({ x: e.offsetX - 6, y: e.offsetY - 6 })
    const imageData = combinedRef.current
      ?.getContext('2d')
      ?.getImageData(e.offsetX - 6, e.offsetY - 6, 1, 1).data
    onChange(
      imageData?.at(0) || 0,
      imageData?.at(1) || 0,
      imageData?.at(2) || 0
    )
  }

  const onMouseLeave = () =>
    combinedRef.current?.removeEventListener('mousemove', onMouseMove)

  useEffect(() => {
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
    <div className="relative cursor-pointer">
      <canvas width={176} height={176} ref={combinedRef} />
      <div
        style={{ left: x, top: y }}
        className="pointer-events-none absolute h-3 w-3 rounded-full border border-white"
      />
    </div>
  )
})

export default Spectrum
