import { Slider } from '@/components/ui/slider'
import { useCount, useStoreActions } from '@/shared/store'

interface ThermometerProps {
  max?: number
  step?: number
}

function Thermometer({ max = 10, step = 1 }: ThermometerProps) {
  const count = useCount()
  const { setCount } = useStoreActions()

  return (
    <Slider
      orientation="vertical"
      max={max}
      step={step}
      value={[count]}
      onValueChange={(value) => {
        setCount(value[0])
      }}
      className="h-40 **:data-[slot=slider-range]:bg-indigo-500 **:data-[slot=slider-thumb]:cursor-pointer"
    />
  )
}

export default Thermometer
