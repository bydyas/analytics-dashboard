import { useChartFilters } from "@/providers/chart-filters-provider";
import AggregationLevelSelect from "./aggregation-level-select";
import DatePicker from "./date-picker";

export default function ChartFilters() {
    const { startDate, endDate, setStartDate, setEndDate, setAggregationLevel } = useChartFilters()

    return (
        <div className='grid grid-cols-3 gap-2'>
            <DatePicker date={startDate} setDate={setStartDate} variant='start' />
            <DatePicker date={endDate} setDate={setEndDate} variant='end' />
            <AggregationLevelSelect onValueChange={setAggregationLevel} />
        </div>
    )
}