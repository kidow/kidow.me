import { TimeRangePicker } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  startTime: string
  endTime: string
}

const TimeRangePickerExample: FC<Props> = () => {
  const [{ startTime, endTime }, setState] = useObjectState<State>({
    startTime: '',
    endTime: ''
  })
  return (
    <div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Default
      </h3>
      <TimeRangePicker
        startTime={startTime}
        endTime={endTime}
        onChange={(startTime, endTime) => setState({ startTime, endTime })}
      />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Error
      </h3>
      <TimeRangePicker
        startTime={startTime}
        endTime={endTime}
        onChange={(startTime, endTime) => setState({ startTime, endTime })}
        error={<p>Error!</p>}
      />
    </div>
  )
}

export default TimeRangePickerExample
