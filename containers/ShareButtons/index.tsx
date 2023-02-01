import { Icon } from 'components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { FC } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'services'

export interface Props {}
interface State {}

const ShareButtons: FC<Props> = () => {
  const { asPath, locale } = useRouter()

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
    <div className="fixed top-[180px] right-[calc((100vw-896px)/2+896px)] hidden lg:block">
      <ul className="flex flex-col gap-3 rounded-full border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-800">
        <CopyToClipboard
          text={`https://kidow.me${asPath}`}
          onCopy={() => toast.success('Successfully copied!')}
        >
          <button className="rounded-full border border-neutral-200 p-2 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-500">
            <Icon.Share />
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
          className="rounded-full border border-neutral-200 p-2 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-500"
        >
          <Icon.Facebook />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${window.location.href}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="rounded-full border border-neutral-200 p-2 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-500"
        >
          <Icon.Twitter />
        </button>
        {locale === 'ko' && (
          <button
            onClick={() =>
              window.Kakao?.Link?.sendScrap({
                requestUrl: window.location.href
              })
            }
            className="rounded-full border border-neutral-200 p-2 hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-500"
          >
            <Icon.KakaoTalk />
          </button>
        )}
      </ul>
    </div>
  )
}

export default ShareButtons
