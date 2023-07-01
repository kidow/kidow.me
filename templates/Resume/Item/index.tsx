import type { FC } from 'react'

export interface Props extends ReactProps {
  image: string
  title: string
  date: string
  keywords: string
  url: string
}
interface State {}

const ResumeItem: FC<Props> = ({
  image,
  title,
  date,
  keywords,
  url,
  children
}) => {
  return (
    <div id={title}>
      <div className="flex gap-3">
        <a href={url} target="_blank">
          <img src={image} alt="" className="h-11 w-11 rounded-full" />
        </a>
        <div>
          <div className="text-lg font-medium text-neutral-800 dark:text-neutral-400 dark:sm:text-neutral-300">
            <a href={url} target="_blank" className="hover:underline">
              {title}
            </a>
          </div>
          <div className="mb-3 text-xs text-neutral-500">{date}</div>
        </div>
      </div>
      <div className="mb-1 space-y-5 leading-8">
        {children}
        {!!keywords && (
          <div className="flex flex-wrap gap-3">
            {keywords.split(', ').map((keyword) => (
              <span key={keyword} className="tag">
                {keyword}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeItem
