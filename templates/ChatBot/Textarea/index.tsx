import { memo } from 'react'
import type { FC, KeyboardEvent } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useRecoilCallback } from 'recoil'
import { messageListState, request, useObjectState } from 'services'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { Spinner } from 'components'

export interface Props {
  userId: string
}
interface State {
  content: string
  isLoading: boolean
  conversationId: string
}

const ChatBotTextarea: FC<Props> = ({ userId }) => {
  const [{ content, isLoading, conversationId }, setState, onChange] =
    useObjectState<State>({
      content: '',
      isLoading: false,
      conversationId: ''
    })

  const create = useRecoilCallback(
    ({ set }) =>
      async () => {
        if (!content.trim() || isLoading) return
        setState({ isLoading: true, content: '' })
        set<IMessage[]>(messageListState, (prevState) => [
          ...prevState,
          {
            id: '',
            answer: '',
            conversation_id: '',
            created_at: 0,
            feedback: null,
            inputs: {},
            query: content.trim()
          }
        ])
        try {
          const { data, success } = await request<{
            data: {
              answer: string
              conversation_id: string
              created_at: number
              event: string
              id: string
              task_id: string
            }
            success: boolean
          }>('/api/chat/create', {
            method: 'POST',
            headers: new Headers({
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHAT_BOT_API_KEY}`,
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
              message: content.trim(),
              userId,
              conversationId
            })
          })
          if (!success) return
          set<IMessage[]>(messageListState, (prevState) => [
            ...prevState.slice(0, prevState.length - 1),
            {
              ...prevState[prevState.length - 1],
              id: data.id,
              answer: data.answer,
              conversation_id: data.conversation_id,
              created_at: data.created_at,
              feedback: null,
              inputs: {}
            }
          ])
          setState({ content: '', conversationId: data.conversation_id })
        } catch (err) {
          console.error(err)
        } finally {
          setState({ isLoading: false })
        }
      },
    [content, userId, conversationId]
  )

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      create()
    }
  }
  return (
    <div className="flex items-start justify-between gap-3 px-7 py-[18px]">
      <TextareaAutosize
        className="flex-1 resize-none bg-inherit focus:outline-none"
        placeholder="메시지를 보내보세요."
        value={content}
        name="content"
        onChange={onChange}
        onKeyDown={onEnter}
        autoFocus
        readOnly={isLoading}
      />
      <button disabled={isLoading} onClick={create}>
        {isLoading ? (
          <Spinner className="h-6 w-6 text-neutral-500" />
        ) : (
          <PaperAirplaneIcon className="h-6 w-6 text-neutral-500" />
        )}
      </button>
    </div>
  )
}

export default memo(ChatBotTextarea)
