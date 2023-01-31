import { useEffect, useState } from 'react'
import type { FC } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import type { Day } from 'react-activity-calendar'
import ReactTooltip from 'react-tooltip'

export interface Props {}
interface State {}

const Contribution: FC<Props> = () => {
  const [list, setList] = useState<Day[]>([])

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/kidow?y=last')
      .then((res) => res.json())
      .then((json) => setList(json?.contributions || []))
      .catch((err) => console.log('err', err))
  }, [])
  return (
    <div className="mt-16">
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
          level0: '#161b22',
          level1: '#0e4429',
          level2: '#006d32',
          level3: '#26a641',
          level4: '#39d353'
        }}
        children={<ReactTooltip html />}
      />
    </div>
  )
}

export default Contribution
