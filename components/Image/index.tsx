import { memo, useState } from 'react'
import type { FC } from 'react'
import classnames from 'classnames'
import { createPortal } from 'react-dom'

export interface Props {
  className?: string
  src?: string
  alt?: string
}

const Image: FC<Props> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={classnames(className, 'cursor-pointer')}
        onClick={() => setIsOpen(true)}
      />
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-30 overflow-y-auto"
            aria-labelledby="modal-title"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="flex min-h-screen items-end justify-center p-0 text-center md:block"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="fixed inset-0 bg-black opacity-30 transition-opacity"
                aria-hidden="true"
              ></div>
              <span
                className="hidden h-screen align-middle md:inline-block"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="my-8 inline-block w-full transform overflow-hidden align-middle transition-all sm:px-8">
                <img
                  src={src}
                  alt={alt}
                  className="mx-auto select-none shadow-xl"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default memo(Image)
