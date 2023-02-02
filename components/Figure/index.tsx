import { memo } from 'react'
import type { FC } from 'react'
import dynamic from 'next/dynamic'

export interface Props {
  caption: string
  image: string
}
interface State {}

const Figure: FC<Props> = ({ caption, image }) => {
  return (
    <div className="nx-mt-6 nx-leading-7 first:nx-mt-0">
      <figure>
        <img src={image} alt={caption} className="mx-auto" />
        <figcaption className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400 md:mt-3 md:text-sm">
          {caption}
        </figcaption>
      </figure>
    </div>
  )
}

export default memo(
  dynamic<Props>(() => Promise.resolve((props) => <Figure {...props} />), {
    ssr: false
  })
)
