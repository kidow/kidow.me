export {}

declare namespace NodeJS {
  interface Process {
    env: ProcessEnv
  }
  interface ProcessEnv {
    NODE_ENV: string
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_KEY: string
    NEXT_PUBLIC_KAKAO_API: string
    NEXT_PUBLIC_PASSWORD: string
  }
}

declare global {
  interface Window {
    Feedbank: (
      command: 'showButton' | 'hideButton' | 'showWidget' | 'hideWidget'
    ) => void
    Kakao: any
  }
}
