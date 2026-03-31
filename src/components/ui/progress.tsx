import { Progress as ProgressPrimitive } from 'radix-ui'

import { cn } from '@/shared/lib/utils'

interface ProgressProps extends React.ComponentProps<
  typeof ProgressPrimitive.Root
> {
  max?: number
}

function Progress({ className, value, max = 100, ...props }: ProgressProps) {
  const percentage = ((max - (value ?? 0)) / max) * 100

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{
          transform: `translateX(-${percentage.toString()}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
