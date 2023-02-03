import type { FC } from 'react'

export interface Props {
  mode?: 'vertical' | 'horizontal'
}
interface State {}

const Divider: FC<Props> = ({ mode = 'horizontal' }) => {
  if (mode === 'vertical')
    return (
      <hr className="mx-8 h-full min-h-[20px] w-px border-l border-neutral-200 dark:border-neutral-700" />
    )
  return <hr className="my-8 h-px border-none dark:bg-neutral-700" />
}

export default Divider
