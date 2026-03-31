import { Card } from '@/components/ui/card'
import { ITEMS } from '@/constants'
import { Header } from '@/shared/components'
import { Button } from '@/shared/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardHeader,
} from '@/shared/components/ui/card'
import { PageLayout, Grid } from '@/shared/layouts'
import { useStoreActions } from '@/shared/store'

function App() {
  const { resetCount } = useStoreActions()

  return (
    <PageLayout>
      <Header />

      <Grid className="mt-8">
        {ITEMS.map((item) => (
          <Card key={item.id} className="row-span-2 grid grid-rows-subgrid">
            <CardHeader className="text-center">
              <CardDescription className="uppercase">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="grid place-items-center items-center">
              {item.render()}
            </CardContent>
          </Card>
        ))}
      </Grid>

      <Button
        variant="outline"
        className="mx-auto mt-8 block"
        onClick={() => {
          resetCount()
        }}
      >
        Reset Count
      </Button>
    </PageLayout>
  )
}

export { App }
