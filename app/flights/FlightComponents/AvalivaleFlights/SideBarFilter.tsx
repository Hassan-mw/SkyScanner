'use client';


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { Jost } from "next/font/google";
   
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
        <div className="w-full h-full flex flex-col items-center justify-start space-y-2 ">
            <h1 className={`${jost.className} text-xl   lg:border-b border-slate-900`}>Filters</h1>
            {/* Results */}
           <div className="bg-slate-900 flex items-center justify-between w-full lg:hidden  p-3">
         <div className="text-lg font-medium text-white">Result:3/9</div>
         <div  className="text-lg font-medium text-white hover:text-slate-500 duration-100">Reset  all filters</div>
           </div>
    
           <Accordion type="single" collapsible className="w-full p-3 space-y-8">

      <AccordionItem value="item-1">
        <AccordionTrigger className={`${jost.className} text-xl pb-1 hover:ring-0   hover:underline-none"`}>Stop</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-7 p-3 w-full">
           
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox" value={"direct"} onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <span className="font-medium">Direct</span>
                <span className="text-xs  text-slate-500"> from Rs 34,000</span>
             </div>

            </div>
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"  value={"1"}  onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium">1 Stop</div>
                <div className="text-xs  text-slate-500"> from Rs 34,000</div>
             </div>

            </div>      
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"  value={"2"}  onChange={(e)=>handleChangeStop(e.target.value)} id="stops" /></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium">2+ Stop</div>
                <div className="text-xs  text-slate-500"> from Rs 34,000</div>
             </div>

            </div>

           </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger  className={`${jost.className} text-xl pb-1 hover:ring-0   hover:underline-none"`}> Duration</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-2 p-3 w-full">
         <div>1.5 hours - {range} hours</div>
            <div><input className="w-full" value={range} onChange={(e)=>setRange(e.target.value)} type="range" min="1.5" max="23.0"/></div>
           </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger  className={`${jost.className} text-xl pb-1 border-b"`}>Airlines</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-2 p-3 w-full">
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"/></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium">Fly Jinnah</div>
                <div className="text-xs  text-slate-500"> from Rs 34,000</div>
             </div>

            </div>
            <div className="flex items-center space-x-5">
                <div ><input className="size-5" type="checkbox"/></div>
             <div className="flex flex-col items-start ">
                <div className="font-medium">Airline combinations</div>
                <div className="text-xs  text-slate-500"> from Rs 37,000</div>
             </div>

            </div>
    

           </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    )
}

export default SideBarFilter
