import { IconUpload } from 'components'
import type { FC } from 'react'
import { fileToBase64, useObjectState } from 'services'

export interface Props {}
interface State {
  value: string
}

const IconUploadExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: '' })
  return (
    <div className="mt-4">
      <IconUpload
        value={value}
        onChange={async (file) => setState({ value: await fileToBase64(file) })}
      />
    </div>
  )
}

export default IconUploadExample
