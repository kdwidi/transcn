import React from "react";
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import type { DateRange } from "react-day-picker";

type DateRangePickerProps = {
  range: DateRange | undefined,
  setRange: (value: DateRange | undefined) => void,
}

export default function DateRangePicker({ range, setRange }: DateRangePickerProps) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {(() => {
            if (range) return <>{range.from!.toLocaleDateString()} - {range.to!.toLocaleDateString()}</>;
            return "Pilih tanggal"
          })()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="start">

        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </PopoverContent>
    </Popover>
  )
}
