import type { FC } from 'react'

export interface Props extends ReactProps {}
interface State {}

const CardList: FC<Props> = ({ children }) => {
  return (
    <div className="gap-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  )
}

export default CardList
