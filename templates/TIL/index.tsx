import { useEffect } from 'react'
import type { FC } from 'react'
import { supabase, useObjectState } from 'services'
import dayjs from 'dayjs'
import { Button, Input } from 'components'

export interface Props {}
interface State {
  list: Array<{
    id: number
    content: string
    source: string
    created_at: string
  }>
  content: string
  source: string
  password: string
  isSubmitting: boolean
}

const TIL: FC<Props> = () => {
  const [
    { list, content, source, password, isSubmitting },
    setState,
    onChange
  ] = useObjectState<State>({
    list: [],
    content: '',
    source: '',
    password: '',
    isSubmitting: false
  })

  const get = async () => {
    const { data, error } = await supabase
      .from('learns')
      .select()
      .order('created_at', { ascending: false })
    if (error) {
      console.error(error)
      return
    }
    setState({ list: data })
  }

  const create = async () => {
    if (!content || password !== process.env.NEXT_PUBLIC_PASSWORD) return

    setState({ isSubmitting: true })
    const { data, error } = await supabase
      .from('learns')
      .insert({ content, source })
      .select()
      .single()
    setState({ isSubmitting: false })
    if (error) {
      console.error(error)
      return
    }
    setState({ content: '', source: '', list: [data, ...list] })
  }

  useEffect(() => {
    get()
  }, [])
  return (
    <div className="container mx-auto max-w-screen-md pb-40">
      <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
        Today I Learn
      </h1>
      <div className="mt-8 space-y-2">
        <div>
          <Input
            value={content}
            name="content"
            onChange={onChange}
            fullWidth
            placeholder="What I learned today..."
          />
        </div>
        <div className="flex gap-2">
          <Input
            value={source}
            name="source"
            onChange={onChange}
            placeholder="Source"
            float={false}
          />
          <Input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="Password"
            float={false}
          />
          <Button
            onClick={create}
            disabled={!content || password !== process.env.NEXT_PUBLIC_PASSWORD}
            loading={isSubmitting}
          >
            Add
          </Button>
        </div>
      </div>
      <ul className="mt-10 space-y-4">
        {list.map((item) => (
          <li key={item.id}>
            <div className="text-xl font-semibold">{item.content}</div>
            <div className="flex items-center gap-2 text-neutral-500">
              <span>출처: {item.source}</span>
              <span>-</span>
              <span className="text-sm">
                {dayjs(item.created_at).format('YYYY.MM.DD')}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TIL
