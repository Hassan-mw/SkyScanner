"use client"

import {Dispatch, SetStateAction} from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DateDataType= {
  place:string ;
  date: Date | undefined;
  setDate:Dispatch<SetStateAction<Date  | undefined>>
}

export function DatePicker({place,date,setDate}:DateDataType) {

  // const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="h-full rounded-none    flex flex-col items-start justify-center space-y-0  "
        >
          {/* <CalendarIcon /> */}
         <span className="text-[#626971] font-semibold text-sm">{place}  </span>
         <span className=""> {date   ?   format(date, "PPP") : 'Date'} </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </PopoverContent>
    </Popover>
  )
}