import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'
import { useCount, useStoreActions } from '@/shared/store'

interface StepperProps {
  steps?: number
}

function Stepper({ steps = 10 }: StepperProps) {
  const count = useCount()
  const { setCount } = useStoreActions()

  const dots = [...Array(steps).keys()].map((i) => (
    <Button
      key={i}
      aria-label={`Step ${(i + 1).toString()}`}
      aria-pressed={count > i}
      className={cn(
        'aspect-square size-8 rounded-full border bg-indigo-900/20 p-0 hover:bg-indigo-900/40',
        count > i &&
          'border-muted-foreground bg-indigo-500 hover:bg-indigo-500/80',
      )}
      onClick={() => {
        setCount(i + 1)
      }}
    />
  ))

  return (
    <div className="grid w-full auto-rows-[32px] grid-cols-[repeat(auto-fit,minmax(min(100%,32px),1fr))] gap-x-2 gap-y-4">
      {dots}
    </div>
  )
}

export default Stepper
