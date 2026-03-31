import { BellIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { useCount, useStoreActions } from '@/shared/store'

function NotificationBadge() {
  const count = useCount()
  const { incrementCount } = useStoreActions()

  return (
    <Button
      variant="outline"
      size="icon-3xl"
      className="relative"
      aria-label={`Notifications, ${count.toString()} unread`}
      disabled={count >= 10}
      onClick={() => {
        incrementCount()
      }}
    >
      <BellIcon className="size-8" />
      <Badge
        variant="default"
        className="absolute -top-3 -right-3 size-6 bg-indigo-500 text-white"
      >
        {count}
      </Badge>
    </Button>
  )
}

export default NotificationBadge
