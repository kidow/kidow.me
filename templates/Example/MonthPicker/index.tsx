import { MonthPicker } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: string
}

const MonthPickerExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: '' })
  return (
    <div className="mt-4">
      <MonthPicker value={value} onChange={(value) => setState({ value })} />
    </div>
  )
}

export default MonthPickerExample
