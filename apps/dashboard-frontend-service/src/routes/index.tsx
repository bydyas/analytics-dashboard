import { createFileRoute } from '@tanstack/react-router'

import SalesChart from '@/components/sales-chart'
import { Separator } from '@/components/ui/separator'
import ChartFilters from '@/components/chart-filters'
import { ErrorBoundary } from '@/components/error-boundary'
import { SalesAlert } from '@/components/sales-alert'

import { appConfig } from '@/app.config'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <title>{appConfig.clientName}</title>

      <div className="bg-[#282c34] flex items-center justify-center">
        <main className="h-screen w-[550px] flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <SalesAlert />
          <div className='text-center'>
            <ChartFilters />
            <Separator className='my-6' />
            <ErrorBoundary>
              <SalesChart />
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </>
  )
}
