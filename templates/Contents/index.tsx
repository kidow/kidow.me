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
            <Link href={item.href}>{item[locale].title}</Link>
          </li>
        ))}
      </ul>
      <ul className="mt-10 flex select-none items-center justify-center">
        <li>
          <Link
            href={{ query: { page: 1 } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
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
            href={{ query: { page: page === numPages ? page : page + 1 } }}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:hover:bg-inherit dark:hover:bg-neutral-800"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
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
