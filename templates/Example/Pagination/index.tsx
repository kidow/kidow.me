import { Pagination } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  page: number
}

const PaginationExample: FC<Props> = () => {
  const [{ page }, setState] = useObjectState<State>({ page: 1 })
  return (
    <div className="mt-4">
      <Pagination
        page={page}
        total={100}
        size={1}
        onChange={(page) => setState({ page })}
      />
    </div>
  )
}

export default PaginationExample
