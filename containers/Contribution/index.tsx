import { cloneElement, useEffect } from 'react'
import type { FC } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import type { Activity } from 'react-activity-calendar'
import { Tooltip } from 'react-tooltip'
import { useObjectState } from 'services'
import { Spinner } from 'components'
import { useTheme } from 'next-themes'
import 'react-tooltip/dist/react-tooltip.css'

export interface Props {}
interface State {
  list: Activity[]
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
        <>
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
              legend: {
                less: 'Less',
                more: 'More'
              }
            }}
            renderBlock={(block, activity) =>
              cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `<strong>${activity.count} contributions</strong> on ${activity.date}`
              })
            }
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
          />
          <Tooltip id="react-tooltip" />
        </>
      )}
    </div>
  )
}

export default Contribution
