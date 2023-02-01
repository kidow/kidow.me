import { Modal } from 'containers'
import { useEffect } from 'react'
import type { FC } from 'react'
import { useObjectState } from 'services'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./Editor'), { ssr: false })
const Toolbar = dynamic(() => import('./Toolbar'), { ssr: false })

export interface Props {}
interface State {
  isHelpOpen: boolean
  isClient: boolean
}

const Memo: FC<Props> = () => {
  const [{ isHelpOpen, isClient }, setState] = useObjectState<State>({
    isHelpOpen: false,
    isClient: false
  })

  const onHelpChange = (e: globalThis.KeyboardEvent) => {
    if (e.metaKey && e.code === 'KeyH') {
      e.preventDefault()
      setState({ isHelpOpen: !isHelpOpen })
    }
  }

  useEffect(() => {
    setState({ isClient: true })
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onHelpChange)
    return () => document.removeEventListener('keydown', onHelpChange)
  }, [isHelpOpen])
  if (!isClient) return <div className="h-[768px]" />
  return (
    <>
      <div className="container mx-auto min-h-[768px] max-w-screen-md">
        <Toolbar />
        <Editor />
      </div>

      <Modal
        title="메모 소개"
        maxWidth="max-w-xl"
        isOpen={isHelpOpen}
        onClose={() => setState({ isHelpOpen: false })}
      >
        <ul className="list-inside list-disc text-sm">
          <li>자유롭게 메모를 저장하고 열람할 수 있는 사이트입니다.</li>
          <li>
            <span className="font-bold">LocalStorage</span>를 사용하기 때문에
            다른 환경에서 내용을 불러올 수는 없습니다.
          </li>
          <li>
            실시간으로 저장하기 때문에 입력 후 창을 새로고침해도 데이터가
            날아가지 않습니다.
          </li>
          <li>
            혹 문의사항이 있다면{' '}
            <a
              target="_blank"
              className="underline"
              href="mailto:wcgo2ling@gmail.com"
              rel="noreferrer"
            >
              wcgo2ling@gmail.com
            </a>
            으로 남겨주시면 감사하겠습니다.
          </li>
        </ul>
      </Modal>
    </>
  )
}

export default Memo
