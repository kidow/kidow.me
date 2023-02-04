import type { FC } from 'react'

export interface Props {
  value: string
  onChange: (file: File) => void
}
interface State {}

const IconUpload: FC<Props> = ({ value, onChange }) => {
  return (
    <form className="flex items-center space-x-4">
      <div className="h-9 w-9 shrink-0 rounded border p-0.5 dark:border-neutral-700">
        <img src={value} alt="" className="h-full w-full" />
      </div>
      <label className="block">
        <span className="sr-only">Choose Icon</span>
        <input
          type="file"
          onChange={(e) => onChange(e.target.files[0])}
          className="block w-full text-sm text-slate-500 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-500 hover:file:bg-blue-100 dark:file:bg-blue-900/30 dark:hover:file:bg-blue-700/30"
        />
      </label>
    </form>
  )
}

export default IconUpload
