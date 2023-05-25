import { memo, useEffect, Fragment } from 'react'
import type { FC } from 'react'
import { messageListState, useObjectState } from 'services'
import { initializeApp } from 'firebase/app'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'

import Textarea from './Textarea'

export interface Props {}
interface State {
  isOpen: boolean
  userId: string
}

const ChatBot: FC<Props> = () => {
  const [{ isOpen, userId }, setState] = useObjectState<State>({
    isOpen: false,
    userId: ''
  })
  const [messageList] = useRecoilState(messageListState)

  const getUserId = async () => {
    const app = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    })
    const auth = getAuth(app)
    try {
      const { user } = await signInAnonymously(auth)
      setState({ userId: user.uid })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUserId()
  }, [])
  return (
    <>
      <button
        onClick={() => setState({ isOpen: !isOpen })}
        className="fixed bottom-5 right-5 z-20 h-12 w-12 rounded-full border border-neutral-200 bg-white text-lg ring-neutral-400 duration-150 hover:ring active:scale-75 dark:border-transparent dark:bg-neutral-600 dark:ring-primary"
      >
        👋
      </button>
      {isOpen && (
        <div className="fixed bottom-0 right-0 z-[24775177912] h-screen w-screen animate-zoom-out overflow-auto bg-white transition-all delay-100 duration-200 dark:bg-neutral-950 sm:bottom-20 sm:right-5 sm:h-[calc(100vh-152px)] sm:w-96 sm:rounded-2xl sm:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <div className="relative flex h-full flex-col divide-y divide-neutral-100 dark:divide-neutral-800">
            <header className="flex h-16 items-center gap-4 p-2">
              <div className="flex flex-1 items-center gap-4 px-2">
                <img
                  src="/icons/logo.png"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1 font-semibold">
                  안녕하세요! 저에 대해 궁금하신 점이 있나요?
                </div>
              </div>
              <button
                onClick={() => setState({ isOpen: false })}
                className="flex h-12 w-12 items-center justify-center rounded-lg duration-150 hover:bg-neutral-100 md:hidden"
              >
                <XMarkIcon className="h-6 w-6 text-neutral-900" />
              </button>
            </header>
            <ul className="h-full flex-1 space-y-4 overflow-auto overscroll-contain p-6">
              {messageList.map((item, key) => (
                <Fragment key={key}>
                  <li className="ml-auto max-w-[240px] break-keep rounded-lg bg-neutral-200 px-5 py-4 dark:bg-neutral-900">
                    {item.query}
                  </li>
                  <li className="mr-auto max-w-[240px] break-keep rounded-lg bg-neutral-900 px-5 py-4 text-neutral-50 dark:bg-neutral-700">
                    {!!item.answer ? (
                      item.answer
                    ) : (
                      <span className="inline-flex gap-2">
                        <span className="h-3 w-3 animate-bounce rounded-full bg-neutral-200" />
                        <span
                          className="h-3 w-3 animate-bounce rounded-full bg-neutral-200"
                          style={{ animationDelay: '333ms' }}
                        />
                        <span
                          className="h-3 w-3 animate-bounce rounded-full bg-neutral-200"
                          style={{ animationDelay: '666ms' }}
                        />
                      </span>
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
            <Textarea userId={userId} />
          </div>
        </div>
      )}
    </>
  )
}

export default memo(ChatBot)
