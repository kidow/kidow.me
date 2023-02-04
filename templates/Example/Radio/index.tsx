import { Radio } from 'components'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  value: string
}

const RadioExample: FC<Props> = () => {
  const [{ value }, setState] = useObjectState<State>({ value: '' })
  return (
    <div>
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Default
      </h3>
      <Radio
        value={value}
        onChange={(value) => setState({ value })}
        options={[
          { name: 'Apple', value: 'apple' },
          { name: 'Amazon', value: 'amazon' },
          { name: 'Goole', value: 'google', description: 'Description' },
          { name: 'Tesla', value: 'tesla', disabled: true }
        ]}
      />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Direction
      </h3>
      <Radio
        value={value}
        onChange={(value) => setState({ value })}
        options={[
          { name: 'Apple', value: 'apple' },
          { name: 'Amazon', value: 'amazon' },
          { name: 'Goole', value: 'google', description: 'Description' },
          { name: 'Tesla', value: 'tesla', disabled: true }
        ]}
        direction="vertical"
      />
      <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl mb-4">
        Card
      </h3>
      <Radio
        value={value}
        onChange={(value) => setState({ value })}
        options={[
          { name: 'Apple', value: 'apple', description: 'Asd' },
          { name: 'Amazon', value: 'amazon', description: 'Amazon' },
          { name: 'Goole', value: 'google', description: 'Description' },
          {
            name: 'Tesla',
            value: 'tesla',
            disabled: true,
            description: 'Tesla'
          }
        ]}
        card
      />
    </div>
  )
}

export default RadioExample
