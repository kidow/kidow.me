import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { useEffect } from 'react'
import type { FC } from 'react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'services'

dayjs.extend(LocalizedFormat)

export interface Props {}
interface State {}

const Frontmatter: FC<Props> = () => {
  const { frontMatter } = useConfig()
  const { locale, asPath } = useRouter()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
    script.defer = true
    document.head.appendChild(script)
    script.onload = () => {
      window.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_API)
    }

    return () => {
      script.remove()
    }
  }, [])
  return (
    <div className="relative text-center">
      <h1 className="font-bold">{frontMatter.title}</h1>
      <div className="text-sm text-neutral-400 dark:text-neutral-500">
        {dayjs(frontMatter.date).locale(locale).format('LL')}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
        {frontMatter.keywords?.split(', ').map((keyword, i) => (
          <span key={i} className="rounded-full bg-neutral-800 px-3 py-1">
            {keyword}
          </span>
        ))}
      </div>

      <div className="absolute top-0 -left-20 hidden flex-col gap-3 rounded-full border border-neutral-700 bg-neutral-800 p-2 md:flex">
        <CopyToClipboard
          text={`https://kidow.me${asPath}`}
          onCopy={() => toast.success('Successfully copied!')}
        >
          <button className="rounded-full border border-neutral-700 p-2 hover:border-neutral-500">
            <img src="/icons/links.svg" alt="" className="h-6 w-6" />
          </button>
        </CopyToClipboard>
        <button
          onClick={() =>
            window.open(
              `http://www.facebook.com/sharer.php?u=${window.location.href}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="rounded-full border border-neutral-700 p-2 hover:border-neutral-500"
        >
          <img src="/icons/facebook.svg" alt="" className="h-6 w-6" />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${window.location.href}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="rounded-full border border-neutral-700 p-2 hover:border-neutral-500"
        >
          <img src="/icons/twitter.svg" alt="" className="h-6 w-6" />
        </button>
        {locale === 'ko' && (
          <button className="rounded-full border border-neutral-700 p-2 hover:border-neutral-500">
            <img src="/icons/kakao-talk.svg" alt="" className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Frontmatter
