import { Heading } from '@/shared/components/ui/heading'

function Header() {
  return (
    <div className="mt-4 text-center">
      <Heading as="h2" className="mb-2 font-bold">
        One Store. <span className="text-indigo-500">Every Component.</span>
      </Heading>
      <p className="text-muted-foreground">
        All 6 subscribe to the same store <code>useSameStore</code>
      </p>
    </div>
  )
}

export default Header
