import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import type { FC } from 'react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

export interface Props {}
interface State {}

const Frontmatter: FC<Props> = () => {
  const { frontMatter } = useConfig()
  const { locale } = useRouter()

  return (
    <div className="text-center">
      <h1 className="mt-4 text-3xl font-bold md:text-4xl">
        {frontMatter.title}
      </h1>
      <div className="mt-4 text-sm text-neutral-400 dark:text-neutral-500">
        {dayjs(frontMatter.date).locale(locale).format('LL')}
      </div>
      <div className="mt-4 mb-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
        {frontMatter.keywords?.split(', ').map((keyword, i) => (
          <span
            key={i}
            className="rounded-full bg-neutral-200 px-3 py-1 dark:bg-neutral-800"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Frontmatter
