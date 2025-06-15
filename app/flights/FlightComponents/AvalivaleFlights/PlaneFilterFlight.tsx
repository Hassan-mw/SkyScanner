'use client';

import { useState } from "react";

function planeFilterFlight() {
    const [currentOption,setCurrentOption]=useState("Best")
    return (
        <div className="grid grid-cols-3  w-full ">
            {/* By Best */}
            <div  onClick={()=>setCurrentOption("Best")} className={`flex flex-col space-y-1 border rounded-l-2xl text-slate-500 ${currentOption==="Best" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
         <div className={`text-sm `}>Best</div>
         <div className={`${currentOption==="Best" ?'text-white' : 'text-blue-600'}  text-xl   font-bold`}>Rs 57,649 $</div>
         <div className="text-sm  ">2h 18 (average)</div>
         
            </div>
            {/* By Cheaper */}
            <div  onClick={()=>setCurrentOption("Cheap")} className={`flex flex-col space-y-1 border  text-slate-500 ${currentOption==="Cheap" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
         <div className="text-sm ">Cheap</div>
         <div className={`${currentOption==="Cheap" ?'text-white' : 'text-blue-600'}  text-xl   font-bold`}>Rs 57,649 $</div>
         <div className="text-sm  ">2h 18 (average)</div>
         
            </div>
            {/* By Fastest */}
            <div  onClick={()=>setCurrentOption("Fast")} className={`flex flex-col space-y-1 border rounded-r-2xl text-slate-500 ${currentOption==="Fast" ?'bg-slate-800 text-white' :'bg-white '} p-2`}>
         <div className="text-sm ">Fastest</div>
         <div className={`${currentOption==="Fast" ?'text-white' : 'text-blue-600'}  text-xl   font-bold`}>Rs 90,000 $</div>
         <div className="text-sm  ">1h 18 (average)</div>
         
            </div>
         
        </div>
    )
}

export default planeFilterFlight
