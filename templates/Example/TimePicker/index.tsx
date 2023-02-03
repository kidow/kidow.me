import type { FC } from 'react'
import dayjs from 'dayjs'
import { useObjectState } from 'services'
import { TimePicker } from 'components'

export interface Props {}
interface State {
  value: dayjs.Dayjs
}

const TimePickerExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: dayjs() })
  return (
    <div className="mt-4">
      <TimePicker value={value} onChange={(value) => setState({ value })} />
    </div>
  )
}

export default TimePickerExample
