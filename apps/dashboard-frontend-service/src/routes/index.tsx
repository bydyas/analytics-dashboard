import { Activity, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { type ISaleQueryParams, type TAggregationLevel } from '@common/contracts'

import { appConfig } from '@/app.config'

import AggregationLevelSelect from '@/components/aggregation-level-select'
import DatePicker from '@/components/date-picker'
import SalesChart from '@/components/sales-chart'
import NoContent from '@/components/no-content'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { getSales } from '@/api/get-sales'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  // TODO: abstract logic into useChartFilters hook
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [aggregationLevel, setAggregationLevel] = useState<TAggregationLevel>()

  const params = { startDate, endDate, aggregationLevel }
  const { data, error, status } = useQuery({
    queryKey: ['sales', params],
    queryFn: () => getSales(params as ISaleQueryParams)
  })
  
  console.log("status ==> ", status);
  console.log("data ==> ", data);

  return (
    <>
      <title>{appConfig.clientName}</title>

      <div className="text-center bg-[#282c34] flex items-center justify-center">
        <main className="min-h-[calc(100vh-76px)] w-[520px] flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <div className='flex gap-6'>
            <DatePicker date={startDate} setDate={setStartDate} variant='start' />
            <DatePicker date={endDate} setDate={setEndDate} variant='end' />
            <AggregationLevelSelect onValueChange={setAggregationLevel} />
          </div>
          <Separator className='my-6' />

          <Activity mode={!data?.length ? 'visible' : 'hidden'}>
            <NoContent /> 
          </Activity>

          <Activity mode={status === 'error' ? 'visible' : 'hidden'}>
            <p className='text-red bold'>{JSON.stringify(error)}</p> 
          </Activity>

          <Activity mode={status === 'pending' ? 'visible' : 'hidden'}>
            <Skeleton className='w-full h-[300px]'/> 
          </Activity>

          <Activity mode={data?.length && status === 'success' ? 'visible' : 'hidden'}>
            <SalesChart data={data} />
          </Activity>
        </main>
      </div>
    </>
  )
}
