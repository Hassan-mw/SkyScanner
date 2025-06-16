
'use client'
import { useEffect, useState } from "react";
import {  DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


const CustomDatePicker = ({date,setDateSelect}) => {
      const [selectedDate, setSelectedDate] = useState(date);
     const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined });
  console.log(date)
   useEffect(()=>{
  
    setDateSelect(selectedDate.toLocaleDateString())
   },[selectedDate])

  return (
       <div className="h-full w-full rounded-xl bg-white shadow-lg flex flex-col items-center justify-start space-y-5  overflow-auto z-[500]">
       <div className="w-full flex items-center justify-center max-w-screen-lg">
      <div className="flex  ">
      <div className="flex flex-col space-y-3 ">
      <DayPicker
      className=" bg-white  py-5 px-3 rounded-2xl"
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
    
    />   
     </div>
     </div>   
     </div> 



        </div>
  )
}

export default CustomDatePicker