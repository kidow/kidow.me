import type { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'
import { useObjectState } from 'services'
import classnames from 'classnames'
import { createPortal } from 'react-dom'

export interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}
interface State {
  isOpen: boolean
}

const Image: FC<Props> = ({ ...props }) => {
  const [{ isOpen }, setState] = useObjectState<State>({ isOpen: false })
  return (
    <>
      <img
        {...props}
        className={classnames(props.className, 'cursor-pointer')}
        onClick={() => setState({ isOpen: true })}
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
              onClick={() => setState({ isOpen: false })}
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
              <div
                className={classnames(
                  `my-8 inline-block w-full transform overflow-hidden align-middle transition-all sm:px-8`
                )}
              >
                <img {...props} className="mx-auto select-none shadow-xl" />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default Image
