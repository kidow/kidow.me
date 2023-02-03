import { Rating } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: number
}

const RatingExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: 3 })
  return (
    <div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Default
      </h3>
      <Rating value={value} onChange={(value) => setState({ value })} />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Count
      </h3>
      <Rating
        value={value}
        onChange={(value) => setState({ value })}
        count={10}
      />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Read-Only
      </h3>
      <Rating value={3} onChange={() => {}} readOnly />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Disabled
      </h3>
      <Rating value={3} onChange={() => {}} disabled />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Half
      </h3>
      <Rating value={value} onChange={(value) => setState({ value })} half />
    </div>
  )
}

export default RatingExample
