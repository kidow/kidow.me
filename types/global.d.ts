export {}

declare global {
  interface Window {
    Feedbank: (
      command: 'showButton' | 'hideButton' | 'showWidget' | 'hideWidget'
    ) => void
  }
}
