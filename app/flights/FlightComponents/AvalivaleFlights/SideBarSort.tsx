'use client';

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
function SideBarSort({checkSort,setCheckSort}) {
  

    
    function handleChangeSort(data){
        // console.log(data)
        setCheckSort(data)
    }
    return (
        <div className="w-full h-full flex flex-col items-center justify-start space-y-2 ">
            <div className="text-2xl font-semibold lg:text-3xl lg:border-b border-slate-900">Sort by</div>
            {/* Sort */}
          <div className="flex flex-col items-start justify-center w-full px-4 space-y-3">
            {/* Best */}
        <div className="flex items-center justify-center space-x-3 ">
            <div><input checked={checkSort==="Best"}  value={"Best"} onChange={(e)=>handleChangeSort(e.target.value)}  name="sort"  className="size-4 border-4 "type="radio"/></div >
        <div className="pb-1">Best</div></div>
    <Accordion type="single" collapsible className="w-full p-3">
     
      <AccordionItem value="item-1">
        <AccordionTrigger  > What does this mean?</AccordionTrigger>
        <AccordionContent className="text-slate-500">
        We think these flights offer the best combination of price and speed. We may also consider factors like number of stops and amount of hassle.
        </AccordionContent>
      </AccordionItem>

    
    </Accordion>
        
            {/* Price per adult */}
        <div className="flex items-center justify-center space-x-3 ">
            <div><input   value={"perAdult"} onChange={(e)=>handleChangeSort(e.target.value)} name="sort" className="size-4 border-4 "  type="radio"/></div >
           <div className="flex flex-col items-start justify-center">
            <div className="">Price per adult</div>
            <div className="text-[11px] text-slate-500">Cheapest first</div>
            </div>
        </div>
            {/* Total journey time */}
        <div className="flex items-center justify-center space-x-3 ">
            <div><input  value={"journeyTime"} onChange={(e)=>handleChangeSort(e.target.value)}   name="sort" className="size-4 border-4 "  type="radio"/></div >
           <div className="flex flex-col items-start justify-center">
            <div className="">Total journey time</div>
            <div className="text-[11px] text-slate-500">Fastest first</div>
            </div>
        </div>
            {/* Outbound:Depart time */}
        <div className="flex items-center justify-center space-x-3 ">
            <div><input  value={"outbond"} onChange={(e)=>handleChangeSort(e.target.value)}   name="sort" className="size-4 border-4 "  type="radio"/></div >
           <div className="flex flex-col items-start justify-center">
            <div className="">Outbound: Depart time</div>
            <div className="text-[11px] text-slate-500">Early - late</div>
            </div>
        </div>
            {/* Return:Depart time */}
        <div className="flex items-center justify-center space-x-3 ">
            <div><input  value={"return"} onChange={(e)=>handleChangeSort(e.target.value)}  name="sort" className="size-4 border-4 "  type="radio"/></div >
           <div className="flex flex-col items-start justify-center">
            <div className="">Return: Depart time</div>
            <div className="text-[11px] text-slate-500">Early - late</div>
            </div>
        </div>
          </div>
        </div>
    )
}

export default SideBarSort
