import { Progress } from '@/components/ui/progress'
import { useCount } from '@/shared/store'

interface ProgressBarProps {
  max?: number
}

function ProgressBar({ max = 10 }: ProgressBarProps) {
  const count = useCount()

  return (
    <div className="w-full space-y-2">
      <Progress
        max={max}
        value={count}
        className="**:data-[slot=progress-indicator]:bg-indigo-500"
      />
      <p className="text-muted-foreground/60 text-right text-sm">
        {count} / {max}
      </p>
    </div>
  )
}

export default ProgressBar
