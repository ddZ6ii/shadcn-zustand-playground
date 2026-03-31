import { Button } from '@/shared/components/ui/button'
import { useCount, useStoreActions } from '@/shared/store'

export default function BigNumber() {
  const count = useCount()
  const { incrementCount } = useStoreActions()

  return (
    <Button
      variant="ghost"
      className="size-24 rounded-full text-6xl font-bold text-indigo-500 filter-[drop-shadow(0_0_6px_var(--color-indigo-500))] hover:bg-radial-[at_50%_50%] hover:from-indigo-500/10 hover:to-transparent hover:text-indigo-300"
      disabled={count >= 10}
      onClick={() => {
        incrementCount()
      }}
    >
      {count}
    </Button>
  )
}
