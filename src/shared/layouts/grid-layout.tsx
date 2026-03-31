import { cn } from '@/shared/lib/utils'

function Grid({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'grid auto-rows-[auto_1fr] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Grid
