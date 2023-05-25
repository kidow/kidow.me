interface ReactProps {
  children?: ReactNode
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  /**
   * @default "max-w-lg"
   */
  maxWidth?:
    | 'max-w-screen-2xl'
    | 'max-w-screen-xl'
    | 'max-w-screen-lg'
    | 'max-w-screen-md'
    | 'max-w-screen-sm'
    | 'max-w-full'
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
  description?: ReactNode
  padding?: boolean
  footer?: ReactNode
}

type TPosition = 'left' | 'top' | 'right' | 'bottom'

namespace NToast {
  type Type = 'success' | 'info' | 'warn' | 'error'
  interface Emit {
    message: string
    type: NToast.Type
  }
}

interface TooltipProps {
  position?: TPosition
}

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  position?: TPosition
  className?: Argument
}

interface IMessage {
  id: string
  answer: string
  conversation_id: string
  created_at: number
  feedback: any
  inputs: object
  query: string
}

interface IConversation {
  created_at: number
  id: string
  inputs: object
  introduction: string
  name: string
  status: 'normal' | string
}
