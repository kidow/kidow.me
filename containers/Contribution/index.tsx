import { useEffect } from 'react'
import type { FC } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import type { Day } from 'react-activity-calendar'
import ReactTooltip from 'react-tooltip'
import { useObjectState } from 'services'
import { Spinner } from 'components'
import { useTheme } from 'next-themes'

export interface Props {}
interface State {
  list: Day[]
  isLoading: boolean
}

const Contribution: FC<Props> = () => {
  const [{ list, isLoading }, setState] = useObjectState<State>({
    list: [],
    isLoading: true
  })
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/kidow?y=last')
      .then((res) => res.json())
      .then((json) =>
        setState({ list: json?.contributions || [], isLoading: false })
      )
      .catch((err) => {
        console.error(err)
        setState({ isLoading: false })
      })
  }, [])
  return (
    <div className="mt-16">
      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Spinner className="h-5 w-5" />
        </div>
      ) : (
        <ActivityCalendar
          data={list}
          labels={{
            months: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            totalCount: '{{count}} contributions in {{year}}',
            tooltip: '<strong>{{count}} contributions</strong> on {{date}}',
            legend: {
              less: 'Less',
              more: 'More'
            }
          }}
          theme={{
            level0: resolvedTheme === 'dark' ? '#161b22' : '#ebedf0',
            level1: resolvedTheme === 'dark' ? '#0e4429' : '#9be9a8',
            level2: resolvedTheme === 'dark' ? '#006d32' : '#40c463',
            level3: resolvedTheme === 'dark' ? '#26a641' : '#30a14e',
            level4: resolvedTheme === 'dark' ? '#39d353' : '#216e39'
          }}
          children={<ReactTooltip html />}
        />
      )}
    </div>
  )
}

export default Contribution
