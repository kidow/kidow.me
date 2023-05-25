import { atom } from 'recoil'

export const messageListState = atom<IMessage[]>({
  key: 'messageListState',
  default: []
})
