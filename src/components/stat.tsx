import { ArrowUp } from 'lucide-react'

import { useCount } from '@/shared/store'
import { cn } from '@/shared/lib/utils'

function Stat() {
  const count = useCount()

  return (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <div className="text-4xl">{count}</div>
        <p className="text-muted-foreground text-sm">Total count</p>
      </div>
      {count > 0 && (
        <div
          className={cn(
            'flex items-center gap-1 text-sm',
            count > 0 ? 'text-green-500' : 'text-muted-foreground',
          )}
        >
          <ArrowUp className="size-4" />
          <span>{count} since start</span>
        </div>
      )}
    </div>
  )
}

export default Stat
