import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ChartArea } from "lucide-react"

export default function NoContent() {
  return (
    <Empty className="border border-dashed min-h-[310px] w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ChartArea />
        </EmptyMedia>
        <EmptyTitle>No Sales Displayed</EmptyTitle>
        <EmptyDescription>
          Select the chart filters above to query the sales dataset
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
