import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { IAggregationSale } from "@common/contracts"
import { Bar, BarChart, CartesianGrid } from "recharts"

const chartConfig = {
  total: {
    label: "Total",
    color: "#2563eb",
  }
} satisfies ChartConfig

export interface ISalesChartProps {
    data: IAggregationSale[] | undefined;
}

export function SalesChart({ data = [] }: ISalesChartProps) {
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
