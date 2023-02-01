import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ErrorBoundary, Offline, Toast } from 'containers'
import 'services/styles/global.css'
import 'dayjs/locale/ko'
import 'dayjs/locale/en'

export default function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <Offline>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Toast />
    </Offline>
  )
}
