import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import type { FC } from 'react'
import { contents } from 'services'
import classnames from 'classnames'

export interface Props {}
interface State {}

const Contents: FC<Props> = () => {
  const { locale, query } = useRouter()

  const numPages: number = useMemo(
    () => Math.ceil(contents.length / 5),
    [contents.length]
  )
  const page: number = useMemo(() => {
    if (!query.page || typeof query.page !== 'string') return 1
    return Number(query.page)
  }, [query.page])
  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {contents.slice((page - 1) * 5, page * 5).map((item, key) => (
          <li key={key} className="md:first:col-span-2">
            <Link
              href={item.href}
              className={classnames({
                'md:grid md:grid-cols-2 md:gap-8': key === 0
              })}
            >
              {key === 0 && (
                <div className="overflow-hidden rounded">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="hidden duration-150 hover:scale-105 md:block"
                  />
                </div>
              )}
              <article className="group space-y-2">
                <h2
                  className={classnames(
                    'text-lg line-clamp-2 group-hover:underline',
                    key === 0
                      ? 'font-medium md:text-3xl md:font-semibold'
                      : 'font-medium'
                  )}
                >
                  {item[locale].title}
                </h2>
                <p className="text-neutral-400 line-clamp-3">
                  {item[locale].description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs md:text-sm">
                  {item[locale].keywords?.split(', ').map((keyword, key) => (
                    <span
                      className={classnames(
                        'rounded-full bg-neutral-800 py-1 px-3',
                        {
                          'border border-[#61dafb] text-[#61dafb]':
                            keyword === 'React',
                          'border border-[#38bdf8] text-[#38bdf8]':
                            keyword === 'TailwindCSS',
                          'border border-[#bf4080] text-[#bf4080]':
                            keyword === 'SCSS',
                          'border border-[#da936a] text-[#da936a]':
                            keyword === 'Styled Components',
                          'border border-[#25c19f] text-[#25c19f]':
                            keyword === 'Docusaurus',
                          'border border-[#FF528C] text-[#FF528C]':
                            keyword === 'Storybook'
                        }
                      )}
                      key={key}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-10 flex select-none items-center justify-center">
        <li>
          <Link
            scroll={false}
            href={{ query: { page: 1 } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            href={{ query: { page: page === 1 ? 1 : page - 1 } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Link>
        </li>
        {Array.from({ length: 5 }).map((_, key) => (
          <li key={key}>
            {page > numPages - 2 && key > numPages - page + 2 ? (
              <div className="h-10 w-10" />
            ) : (
              <Link
                href={{
                  query: {
                    page:
                      page > numPages - 2
                        ? page + key - 2
                        : numPages > 5
                        ? page > 3
                          ? page + key - 2
                          : key + 1
                        : key + 1
                  }
                }}
                scroll={false}
                className={classnames(
                  'h-10 w-10',
                  page > numPages - 2
                    ? key > numPages - page + 2
                      ? 'cursor-default'
                      : 'flex items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800'
                    : 'flex items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800',
                  {
                    'font-semibold text-black dark:text-white':
                      page > numPages - 2
                        ? key === 2
                        : numPages > 5
                        ? page > 3
                          ? key === 2
                          : page === key + 1
                        : key + 1 === page
                  }
                )}
              >
                {page > numPages - 2
                  ? key > numPages - page + 2
                    ? null
                    : page + key - 2
                  : numPages > 5
                  ? page > 3
                    ? page + key - 2
                    : key + 1
                  : key + 1}
              </Link>
            )}
          </li>
        ))}
        <li>
          <Link
            scroll={false}
            href={{ query: { page: page === numPages ? page : page + 1 } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            href={{ query: { page: numPages } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Contents
