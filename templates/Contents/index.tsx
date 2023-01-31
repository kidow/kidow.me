import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { contents } from 'services'

export interface Props {}
interface State {}

const Contents: FC<Props> = () => {
  const { locale } = useRouter()
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {contents.map((item, key) => (
        <li key={key} className="md:first:col-span-2">
          <Link href={item.href}>{item[locale].title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Contents
