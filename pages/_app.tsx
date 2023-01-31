import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'

import 'services/styles/global.css'
import { Toast } from 'containers'

export default function Nextra({
  Component,
  pageProps
}: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <Toast />
    </>
  )
}
