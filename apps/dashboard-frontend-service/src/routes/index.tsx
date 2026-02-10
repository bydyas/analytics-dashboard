import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { type TAggregationLevel } from '@common/contracts'

import { appConfig } from '@/app.config'

import AggregationLevelSelect from '@/components/aggregation-level-select'
import { DatePicker } from '@/components/date-picker'
import { Separator } from '@/components/ui/separator'
import { SalesChart } from '@/components/sales-chart'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [aggregationLevel, setAggregationLevel] = useState<TAggregationLevel>();

  return (
    <>
      <title>{appConfig.clientName}</title>

      <div className="text-center bg-[#282c34] flex items-center justify-center">
        <main className="min-h-[calc(100vh-76px)] w-[520px] flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
          <div className='flex gap-6'>
            <DatePicker date={startDate} setDate={setStartDate} variant='start' />
            <DatePicker date={endDate} setDate={setEndDate} variant='end' />
            <AggregationLevelSelect value={aggregationLevel} onValueChange={setAggregationLevel} />
          </div>
          <Separator className='my-6' />
          <SalesChart data={[
            { date: "2025-01-01", total: 186 },
            { date: "2025-01-01", total: 305 },
            { date: "2025-01-01", total: 237 },
            { date: "2025-01-01", total: 73 },
            { date: "2025-01-01", total: 209 },
            { date: "2025-01-01", total: 214 },
          ]} />
        </main>
      </div>
    </>
  )
}
