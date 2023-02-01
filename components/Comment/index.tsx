import React, { useEffect, useRef } from 'react'
import type { FC } from 'react'
import {} from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export interface Props {}

const Comment: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { locale } = useRouter()

  useEffect(() => {
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
      'data-theme': 'dark_dimmed',
      'data-lang': locale,
      crossOrigin: 'anonymous',
      async: 'true'
    }
    Object.entries(attributes).forEach(([key, value]) =>
      script.setAttribute(key, value)
    )
    ref.current?.appendChild(script)
  }, [])
  return <div ref={ref} className="mt-10" />
}

export default Comment
