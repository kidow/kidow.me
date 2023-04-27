import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ErrorBoundary, Modal, Offline, Toast } from 'containers'
import { appWithTranslation } from 'next-i18next'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import 'services/styles/global.css'
import 'dayjs/locale/ko'
import 'dayjs/locale/en'

export default appWithTranslation(function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <Offline>
      <ErrorBoundary>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <Modal.Confirm />
        </ThemeProvider>
      </ErrorBoundary>
      <Toast />
      <Analytics />
    </Offline>
  )
})
