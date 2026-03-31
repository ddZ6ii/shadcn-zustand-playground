import {
  BigNumber,
  NotificationBadge,
  ProgressBar,
  Stat,
  Stepper,
  Thermometer,
} from '@/components'

type Item = {
  id: number
  description: string
  render: () => React.JSX.Element
}

const ITEMS: Item[] = [
  { id: 1, description: 'Big number', render: () => <BigNumber /> },
  { id: 2, description: 'Progress bar', render: () => <ProgressBar /> },
  { id: 3, description: 'Stepper', render: () => <Stepper /> },
  { id: 4, description: 'Thermometer', render: () => <Thermometer /> },
  {
    id: 5,
    description: 'Notification Badge',
    render: () => <NotificationBadge />,
  },
  {
    id: 6,
    description: 'Stat card',
    render: () => <Stat />,
  },
]

export { ITEMS }
