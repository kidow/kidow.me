import { memo } from 'react'
import type { FC } from 'react'

export interface Props {}
interface State {}

const Required: FC<Props> = () => {
  return <span className="after:text-red-500 after:content-['*']" />
}

export default memo(Required)
