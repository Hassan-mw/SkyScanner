'use client';


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Jost } from "next/font/google";
import { CiFilter } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
   
 const jost=Jost({
   subsets:['latin'],
   weight:['500']
   
 })

function SideBarFilter({range,setRange,setCheckStops}) {
  

    
    function handleChangeStop(data){
        // console.log(data)
        setCheckStops(data)
    }
    return (
        <div className="w-full h-full flex flex-col items-center justify-start space-y-2 pt-2">
            <div className={`${jost.className}  flex items-center justify-center gap-x-2  lg:border-b border-slate-900`}>
               <CiFilter size={20} />
               <span className={`${jost.className} text-xl`}> Filters </span>
            </div>
           
            {/* Results */}
           <div className="bg-[#05203c] flex items-center justify-between w-full lg:hidden  p-3">
         <span  style={{fontWeight:300}} className={ `${jost.className} text-md font-medium text-white`}>Result: 3 / 9</span>
         <span style={{fontWeight:300}} className={ `${jost.className} text-md font-medium text-white`}>Reset  all filters</span>

           </div>
    
           <Accordion type="single" collapsible className="w-full p-3 space-y-4">

      <AccordionItem value="item-1">
        <AccordionTrigger className={`${jost.className} text-lg pb-1 hover:ring-0   hover:underline-none"`}>Stop</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-3 p-3 w-full">
           
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox" value={"direct"} onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <span className="font-medium text-xs">Direct</span>
                <span className="text-[9px]  text-slate-500"> from Rs 34,000</span>
             </div>

            </div>
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"  value={"1"}  onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium text-xs">1 Stop</div>
                <div className="text-[9px] text-slate-500"> from Rs 34,000</div>
             </div>

            </div>      
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"  value={"2"}  onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium text-xs">2+ Stop</div>
                <div className="text-[9px]  text-slate-500"> from Rs 34,000</div>
             </div>

            </div>

           </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger  className={`${jost.className} text-lg pb-1 border-slate-600 hover:ring-0   hover:underline-none"`}> Duration</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-2  w-full">
         <span className="text-xs" >1 hours - {range} hours</span>
            <div><input className="w-full" value={range} onChange={(e)=>setRange(e.target.value)} type="range" min="1.5" max="23.0"/></div>
           </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger  className={`${jost.className} text-lg "`}>Airlines</AccordionTrigger>
        <AccordionContent className="pb-1 border-b ">
        <div className="flex flex-col space-y-2 p-3 w-full">
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"/></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium text-xs">Fly Jinnah</div>
                <div className="text-[9px]  text-slate-500"> from Rs 34,000</div>
             </div>

            </div>
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"/></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium text-xs">Airline combinations</div>
                <div className="text-[9px]  text-slate-500"> from Rs 37,000</div>
             </div>

            </div>
    

           </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger  className={`${jost.className} text-lg "`}>Baggage</AccordionTrigger>
        <AccordionContent className="pb-1 border-b ">
        <div className="flex flex-col space-y-2 p-3 w-full">
         <div className="flex items-center justify-start gap-x-4">
          <div ><input className="size-3" type="checkbox"/></div>
           <div className=" flex items-center justify-center gap-x-1"><span className="text-sm">Cabin bag</span><IoLockClosed /> </div>
         </div>     
         <div className="flex items-center justify-start gap-x-4">
          <div ><input className="size-3" type="checkbox"/></div>
           <div className=" flex items-center justify-center gap-x-1"><span className="text-sm">Checked bag</span><IoLockClosed /> </div>
         </div>     
    

           </div>
        </AccordionContent>
      </AccordionItem>


    </Accordion>
        </div>
    )
}

export default SideBarFilter
