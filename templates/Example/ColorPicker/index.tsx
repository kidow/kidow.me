import { ColorPicker } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: string
}

const ColorPickerExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: '#e67a00' })
  return (
    <div className="mt-4">
      <ColorPicker value={value} onChange={(value) => setState({ value })} />
    </div>
  )
}

export default ColorPickerExample
