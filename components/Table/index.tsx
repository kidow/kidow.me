import type { ReactNode } from 'react'
import classnames from 'classnames'
import { Spinner } from 'components'
import { useRouter } from 'next/router'

export interface Props<T> {
  list: T[]
  columns: ReactNode
  renderItem: (item: T, index: number) => ReactNode
  loading?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  summary?: string
  title?: string
}

function Table<T>({
  columns,
  list,
  renderItem,
  loading,
  size = 'lg',
  summary,
  title
}: Props<T>) {
  const { locale } = useRouter()
  return (
    <div
      className={classnames(
        'relative',
        loading ? 'cursor-progress overflow-hidden' : 'overflow-auto'
      )}
    >
      {loading && (
        <Spinner className="absolute left-1/2 top-1/2 z-[12] h-6 w-6 text-primary" />
      )}
      <table
        className={classnames(
          'tw-table w-full border-collapse whitespace-nowrap text-center text-xs text-neutral-500 dark:text-neutral-50',
          {
            'pointer-events-none select-none opacity-60': loading,
            'tw-table-lg': size === 'lg',
            'tw-table-md': size === 'md',
            'tw-table-sm': size === 'sm',
            'tw-table-xs': size === 'xs'
          }
        )}
      >
        {(!!summary || !!title) && (
          <caption>
            {!!title && <strong>{title}</strong>}
            {!!summary && <span>{summary}</span>}
          </caption>
        )}
        <thead className="sticky top-0 bg-neutral-100 tracking-wider dark:bg-neutral-700">
          {columns}
        </thead>
        <tbody>
          {!!list.length ? (
            list.map((item: T, key) => renderItem(item, key))
          ) : (
            <tr>
              <td
                colSpan={99}
                className="text-neutral-400 dark:text-neutral-500"
              >
                {locale === 'ko' ? '데이터가 없습니다.' : 'No Data.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
