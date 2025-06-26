import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoBedSharp } from 'react-icons/io5'
import { RiPlaneLine } from 'react-icons/ri'

const FlightAndHotel = () => {
  return (
      
         <div className="w-full flex flex-col items-start justify-start space-y-3">
           
               <h1 className="w-full flex items-start text-3xl font-semibold">Ready to plan a trip?</h1>
   
               <div className="w-full flex  items-center justify-between border-b border-black pb-2">
                 <div className="flex items-center justify-center gap-x-3">
                   <IoBedSharp size={20} />
                    <span className="text-xl font-medium pb-1">Hotels in Dubai</span>
                 </div>
                 <IoIosArrowForward />   
               </div>
   
               <div className="w-full flex  items-center justify-between border-b border-black pb-2">
                 <div className="flex items-center justify-center gap-x-3">
                    <div className="rotate-45"> <RiPlaneLine  size={20} /> </div>
                    <span className="text-xl font-medium pb-1">Flights to Dubai</span>
                 </div>
                 <IoIosArrowForward />   
               </div>
            
         <div>FlightAndHotel</div> 
         </div>
  )
}

export default FlightAndHotel