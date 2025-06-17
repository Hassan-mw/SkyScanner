'use client';


import { Jost } from "next/font/google";
   
 const jost=Jost({
   subsets:['latin'],
   weight:['500']
   
 })

import { useState } from "react";

function planeFilterFlight() {
    const [currentOption,setCurrentOption]=useState("Best")
    return (
        <div className="grid grid-cols-3  w-full h-20  px-2 ">
          {/* By Best */}
          <div  onClick={()=>setCurrentOption("Best")} className={`flex flex-col pl-5 border rounded-l-2xl text-slate-500 ${currentOption==="Best" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
             <span  className={`text-xs  `}>Best</span>
             <span className={`${currentOption==="Best" ?'text-white' : 'text-blue-600'} ${jost.className} text-xl   font-bold`}>Rs 57,649 $</span>
             <span className={`  text-xs  `}>2h 18 (average)</span>
          </div>
            
          {/* By Cheaper */}
          <div  onClick={()=>setCurrentOption("Cheap")} className={`flex flex-col pl-5 border  text-slate-500 ${currentOption==="Cheap" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
            <span className={`text-xs  `}>Cheap</span>
            <span className={`${currentOption==="Cheap" ?'text-white' : 'text-blue-600'}  ${jost.className}  text-xl   font-bold`}>Rs 57,649 $</span>
            <span className={` text-xs  `} >2h 18 (average)</span>
          </div>


          {/* By Fastest */}
          <div  onClick={()=>setCurrentOption("Fast")} className={`flex flex-col pl-5  border rounded-r-2xl text-slate-500 ${currentOption==="Fast" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
            <span className={`text-xs  `}>Fastest</span>
            <span className={`${currentOption==="Fast" ?'text-white' : 'text-blue-600'} ${jost.className}  text-xl   font-bold`}>Rs 90,000 $</span>
            <span className={`  text-xs  `}>1h 18 (average)</span>
          </div>
         
        </div>
    )
}

export default planeFilterFlight
