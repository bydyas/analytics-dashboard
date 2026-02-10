import { AggregationLevel, type TAggregationLevel } from "@common/contracts";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export interface IAggregationLevelSelectProps {
    onValueChange: (value: TAggregationLevel) => void;
}

export default function AggregationLevelSelect({ onValueChange }: IAggregationLevelSelectProps) {
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Aggregation level" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {Object.values(AggregationLevel).map((lvl) => (
                        <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}