import { Bar, BarChart, CartesianGrid } from "recharts"

import { useChartFilters } from "@/providers/chart-filters-provider";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Skeleton } from "./ui/skeleton";
import NoContent from "./no-content";
import ErrorContent from "./error-content";
import { useChartQuery } from "@/hooks/useChartQuery";
import type { ISaleQueryParams } from "@common/contracts";

const chartConfig = {
  total: {
    label: "Total",
    color: "#2563eb",
  }
} satisfies ChartConfig

export default function SalesChart() {
  const { startDate, endDate, aggregationLevel  } = useChartFilters()
  const { data, error, status, enabled } = useChartQuery({ startDate, endDate, aggregationLevel } as ISaleQueryParams)
  
  if (!enabled && ['success', 'pending'].includes(status)) {
    return <NoContent /> 
  }

  if (status === 'error') {
    return <ErrorContent message={error?.message} />
  }

  if (enabled && status === 'pending') {
    return <Skeleton className='w-full h-[300px]'/> 
  }

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="total" fill="var(--color-total)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
