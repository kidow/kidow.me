import { DatePicker } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: string
}

const DatePickerExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: '' })
  return (
    <div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Default
      </h3>
      <DatePicker value={value} onChange={(value) => setState({ value })} />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Format
      </h3>
      <DatePicker
        value={value}
        onChange={(value) => setState({ value })}
        format="YYYY-MM-DD"
      />
    </div>
  )
}

export default DatePickerExample
