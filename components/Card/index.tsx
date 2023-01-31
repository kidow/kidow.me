import type { FC } from 'react'

import CardLink from './Link'
import CardList from './List'

export interface Props {}
interface State {}

const Card: FC<Props> = () => {
  return <>Card</>
}

export default Object.assign(Card, { Link: CardLink, List: CardList })
