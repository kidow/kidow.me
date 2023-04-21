import { Switch } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  checked: boolean
}

const SwitchExample: FC<Props> = () => {
  const [{ checked }, setState] = useObjectState<State>({ checked: false })
  return (
    <div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Default
      </h3>
      <Switch checked={checked} onChange={(checked) => setState({ checked })} />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Size
      </h3>
      <div className="flex items-end gap-2">
        <Switch
          checked={checked}
          onChange={(checked) => setState({ checked })}
          size="sm"
        />
        <Switch
          checked={checked}
          onChange={(checked) => setState({ checked })}
        />
        <Switch
          checked={checked}
          onChange={(checked) => setState({ checked })}
          size="lg"
        />
      </div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Disabled
      </h3>
      <Switch
        checked={false}
        disabled
        onChange={(checked) => setState({ checked })}
      />
    </div>
  )
}

export default SwitchExample
