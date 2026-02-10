import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface IDataPickerProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  variant: 'start' | 'end';
}

export function DatePicker({ date, setDate, variant }: IDataPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
        >
        <CalendarIcon />
        {date ? format(date, "PPP") : <span>Pick {variant} date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}