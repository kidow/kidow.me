import { memo } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'

export interface Props {
  src: string
  alt?: string
  shape?: 'circle' | 'square'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  border?: boolean
}

const Avatar: FC<Props> = ({ src, alt, shape, size, border }) => {
  return (
    <span>
      <img
        src={src}
        alt={alt}
        className={classnames(
          border ? 'border-gray-400' : 'border-transparent',
          {
            'rounded-full': shape === 'circle',
            rounded: shape === 'square',
            'h-8 w-8': size === 'xs',
            'h-10 w-10': size === 'sm',
            'h-12 w-12': size === 'md',
            'h-16 w-16': size === 'lg',
            'h-20 w-20': size === 'xl',
            'border-2': !!border
          }
        )}
        onError={(e) => {
          // @ts-ignore
          e.target.src = 'https://i.pravatar.cc'
        }}
      />
    </span>
  )
}

Avatar.defaultProps = {
  alt: '',
  shape: 'circle',
  size: 'md',
  border: false
}

export default memo(Avatar)
