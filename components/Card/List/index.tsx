import type { FC } from 'react'

export interface Props extends ReactProps {}
interface State {}

const CardList: FC<Props> = ({ children }) => {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  )
}

export default CardList
