import type { FC } from 'react'

export interface Props {
  mode?: 'vertical' | 'horizontal'
}
interface State {}

const Divider: FC<Props> = ({ mode = 'horizontal' }) => {
  if (mode === 'vertical') return <div className="w-px bg-neutral-200" />
  return <hr className="my-8" />
}

export default Divider
