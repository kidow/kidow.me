import type { FC } from 'react'

export interface Props extends ReactProps {}
interface State {}

const Masonry: FC<Props> = ({ children }) => {
  return (
    <div className="inline-block columns-2 break-inside-avoid gap-2 sm:columns-3 md:columns-4 lg:columns-4 xl:columns-6 2xl:columns-7 [&>*]:mb-2 [&>*]:w-full">
      {children}
    </div>
  )
}

export default Masonry
