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
    NEXT_PUBLIC_CHAT_BOT_API_BASE_URL: string
    NEXT_PUBLIC_CHAT_BOT_API_KEY: string
    NEXT_PUBLIC_FIREBASE_API_KEY: string
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string
    NEXT_PUBLIC_FIREBASE_APP_ID: string
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
