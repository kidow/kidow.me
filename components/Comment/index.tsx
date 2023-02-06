import { useEffect, useRef, memo } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

export interface Props {}

const Comment: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { locale } = useRouter()
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark_dimmed' : 'light'

  useEffect(() => {
    const giscusEl: HTMLIFrameElement = ref.current.querySelector(
      'iframe.giscus-frame'
    )
    const createGiscus = () => {
      const script = document.createElement('script')
      const attributes = {
        src: 'https://giscus.app/client.js',
        'data-repo': 'kidow/kidow.me',
        'data-repo-id': 'R_kgDOI3aG4g',
        'data-category': 'General',
        'data-category-id': 'DIC_kwDOI3aG4s4CT4mv',
        'data-mapping': 'title',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'bottom',
        'data-theme': theme,
        'data-lang': locale,
        crossOrigin: 'anonymous',
        async: 'true'
      }
      Object.entries(attributes).forEach(([key, value]) =>
        script.setAttribute(key, value)
      )
      ref.current?.appendChild(script)
    }

    const postThemeMessage = () => {
      giscusEl.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        'https://giscus.app'
      )
    }

    giscusEl ? postThemeMessage() : createGiscus()
  }, [resolvedTheme])
  return <div ref={ref} className="mt-10" />
}

export default memo(Comment)
