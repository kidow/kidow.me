import { useRef, forwardRef } from 'react'
import type { ReactNode, DetailedHTMLProps, DialogHTMLAttributes } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import classnames from 'classnames'
import { useCombinedRefs } from 'services'

interface Props
  extends DetailedHTMLProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  description?: string
  padding?: boolean
  footer?: ReactNode
  maxWidth?:
    | 'max-w-screen-2xl'
    | 'max-w-screen-xl'
    | 'max-w-screen-lg'
    | 'max-w-screen-md'
    | 'max-w-screen-sm'
    | 'max-w-full'
    | 'max-w-8xl'
    | 'max-w-7xl'
    | 'max-w-6xl'
    | 'max-w-5xl'
    | 'max-w-4xl'
    | 'max-w-3xl'
    | 'max-w-2xl'
    | 'max-w-xl'
    | 'max-w-lg'
    | 'max-w-md'
    | 'max-w-sm'
    | 'max-w-xs'
}

const Dialog = forwardRef<HTMLDialogElement, Props>(
  (
    {
      title,
      description,
      padding = true,
      footer,
      maxWidth = 'max-w-lg',
      children,
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const combinedRef = useCombinedRefs<HTMLDialogElement>(ref, dialogRef)
    return (
      <dialog
        role="dialog"
        ref={combinedRef}
        className={classnames(
          'w-full rounded-lg p-0 backdrop:bg-black/30',
          maxWidth
        )}
        onClick={() => combinedRef.current.close()}
        {...props}
      >
        <header className="border-t-4 border-primary bg-white dark:bg-neutral-800">
          {!!title && (
            <div className="flex items-center border-b border-neutral-200 py-3 px-4 dark:border-neutral-700">
              <div className="flex-1">
                <h1 className="text-xl font-semibold">{title}</h1>
                {!!description && (
                  <p className="mt-1 text-sm text-neutral-400">{description}</p>
                )}
              </div>
              <button
                onClick={() => combinedRef.current.close()}
                className="rounded-full p-2 hover:bg-neutral-300 dark:hover:bg-neutral-900"
              >
                <XMarkIcon className="h-5 w-5 text-neutral-800 dark:text-neutral-100" />
              </button>
            </div>
          )}
        </header>
        <div
          className={classnames('bg-white dark:bg-neutral-800', {
            'py-6 px-7': padding,
            'rounded-b-lg': !footer
          })}
        >
          {children}
        </div>
        {!!footer && (
          <footer className="rounded-b-lg border-t bg-white py-4 px-7 dark:border-neutral-700 dark:bg-neutral-800">
            {footer}
          </footer>
        )}
      </dialog>
    )
  }
)

export default Dialog
