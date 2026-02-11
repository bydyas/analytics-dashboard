import { createFileRoute } from '@tanstack/react-router'

import SalesChart from '@/components/sales-chart'
import { Separator } from '@/components/ui/separator'
import ChartFilters from '@/components/chart-filters'

import { appConfig } from '@/app.config'
import { ErrorBoundary } from '@/components/error-boundary'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <title>{appConfig.clientName}</title>

      <div className="text-center bg-[#282c34] flex items-center justify-center">
        <main className="h-screen w-[520px] flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <ChartFilters />
          <Separator className='my-6' />
          <ErrorBoundary>
            <SalesChart />
          </ErrorBoundary>
        </main>
      </div>
    </>
  )
}
