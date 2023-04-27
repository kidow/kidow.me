import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import { EventListener, useConfirm, useObjectState } from 'services'

export interface Props {}
interface State {
  isOpen: boolean
  message: string
}

const ConfirmModal: FC<Props> = () => {
  const [{ isOpen, message }, setState] = useObjectState<State>({
    isOpen: false,
    message: ''
  })
  let ge = useRef<Generator<string, void, unknown>>(null)

  function* generator() {
    yield 'message'
    return yield 'confirm'
  }

  const listener = ({ detail }: any) => {
    ge.current = generator()
    setState({ isOpen: true, message: detail })
    ge.current.next()
  }

  useEffect(() => {
    EventListener.add('confirm', listener)
    return () => EventListener.remove('confirm', listener)
  }, [isOpen])
  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 z-30 overflow-y-auto"
      aria-labelledby="confirm-modal"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex min-h-screen items-center justify-center p-0 text-center md:block">
        <div
          className="fixed inset-0 bg-black/30 transition-opacity"
          aria-hidden="true"
        />
        <div className="mt-8 inline-block w-[450px] transform overflow-hidden rounded text-left align-top shadow-xl transition-all">
          <div className="space-y-4 bg-zinc-800 px-5 py-4 text-neutral-50">
            <div>{message}</div>
            <div className="flex justify-end gap-2 text-xs font-medium">
              <button
                onClick={() => {
                  console.log('ge', ge)
                  ge?.current?.next(false)
                }}
                className="rounded border border-zinc-700 px-5 py-1.5 text-blue-300 duration-150 hover:bg-blue-500/5"
              >
                취소
              </button>
              <button
                onClick={() => ge?.current?.next(true)}
                className="rounded bg-blue-300 px-5 py-1.5 text-black duration-150 hover:opacity-90"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
