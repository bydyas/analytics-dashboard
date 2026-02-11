import { useChartFilters } from "@/providers/chart-filters-provider";
import AggregationLevelSelect from "./aggregation-level-select";
import DatePicker from "./date-picker";

export default function ChartFilters() {
    const { startDate, endDate, setStartDate, setEndDate, setAggregationLevel } = useChartFilters()

    return (
        <div className='flex gap-6'>
            <DatePicker date={startDate} setDate={setStartDate} variant='start' />
            <DatePicker date={endDate} setDate={setEndDate} variant='end' />
            <AggregationLevelSelect onValueChange={setAggregationLevel} />
        </div>
    )
}