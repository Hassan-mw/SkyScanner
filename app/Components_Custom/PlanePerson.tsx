'use client';

import {  SetStateAction, useEffect, useState } from "react";

const PlanePerson = ({adult,setAdult,children,setChildren,roomType,setRoomType}:{ adult:number,setPerson:SetStateAction<number>}) => {
  const [countAdults,setCountAdults]=useState(adult);
  const [countChildren,setCountChildren]=useState(children);
  const [className,setClassName]=useState(roomType);
 console.log(countAdults,countChildren)

    // handle button click
    function handleCount({type,countType}:{type:string,countType:string}){

    if(type==="Adults"){
      if(countType==="inc"){
         setCountAdults((pre)=>pre+1)
      }else{
        if(countAdults<=1) return alert("At least 1 person")
        setCountAdults((pre)=>pre-1)
      }
    }


    if(type==="children"){
      if(countType==="inc"){
        if(countChildren>=6)  return 
         setCountChildren((pre)=>pre+1)
      }else{
        if(countChildren <=0 )  return 
        setCountChildren((pre)=>pre-1)
      }
    }
      
      } 
    
    // putting data on chages
      useEffect(()=>{
        setAdult(countAdults)
        setChildren(countChildren)
      },[countChildren,countAdults])


    useEffect(()=>{
    setRoomType(className)
    },[className])
    
 
  return (
     <div className=" flex flex-col items-center justify-start space-y-5 bg-white  w-[300px] p-4 rounded-lg shadow-lg">
     
     {/*  Class  */}
     <div className="flex flex-col items-start w-full  justify-start">
        <h2 className="font-semibold text-black">Cabin class</h2>
        
  
       
        <select className="p-2  w-full outline-none border rounded-md border-slate-400" value={className} onChange={(e)=>setClassName(e.target.value)} >
              <option value="Ecnomic">Ecnomic</option>
              <option value="Premium class">Premium class</option>
              <option value="Business Class">Business Class</option>
              <option value="First Class">First Class</option>
        </select>

       </div>

     {/* Adults */}
     <div className=" w-full flex items-center justify-between">
      {/* Text */}
       <div className=" flex flex-col items-start justify-start">
          <h2 className="text-md text-black font-semibold">Adults</h2>
          <p className="text-xs text-slate-500">Aged 18+</p>
       </div>
     {/* Buttons */}
      <div className="flex items-center justify-center space-x-3">
           
            <div
             onClick={() => handleCount({ type: 'Adults', countType: 'inc' })}
              className="border size-8 flex items-center justify-center text-sm bg-slate-400 hover:bg-slate-500 rounded-md"
            >
              +
            </div>

            <div className="text-xl">{countAdults}</div>
            <div
              onClick={() => handleCount({ type: 'Adults', countType: 'dec' })}
              className="border size-8 flex items-center justify-center text-sm bg-slate-400 hover:bg-slate-500 rounded-md"
            >
              -
            </div>

      </div>

     </div>


     {/* Children */}
     <div className=" w-full flex items-center justify-between">
      {/* Text */}
       <div className=" flex flex-col items-start justify-start">
          <h2 className="text-md text-black font-semibold">Children</h2>
          <p className="text-xs text-slate-500">Age 0 to 17</p>
       </div>
     {/* Buttons */}
      <div className="flex items-center justify-center space-x-3">
           
            <div
             onClick={() => handleCount({ type: 'children', countType: 'inc' })}
              className="border size-8 flex items-center justify-center text-sm bg-slate-400 hover:bg-slate-500 rounded-md"
            >
              +
            </div>

            <div className="text-xl">{countChildren}</div>
            <div
              onClick={() => handleCount({ type: 'children', countType: 'dec' })}
              className="border size-8 flex items-center justify-center text-sm bg-slate-400 hover:bg-slate-500 rounded-md"
            >
              -
            </div>

      </div>

     </div>
     
    {/* text */}
    <p className="text-xs text-slate-500">Your age at time of travel must be valid for the age category booked. Airlines have restrictions on under 18s travelling alone.</p>  
 
    {/* text */}
    <p className="text-xs text-slate-500">Age limits and policies for travelling with children may vary so please check with the airline before booking.</p>  
     
    <div  className="w-full flex items-center justify-center text-white hover:cursor-pointer duration-500 hover:bg-blue-700  text-xl p-2 rounded-md bg-[#0062e3]">Apply</div>
      

    </div>
  )
}

export default PlanePerson