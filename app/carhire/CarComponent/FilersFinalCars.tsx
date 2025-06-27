'use client'
import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";
const FilersFinalCars = () => {
    const [showMap,setShowMap]=useState(false)
  return (
    <div className='w-full grid grid-cols-2 gap-2'>
      <span onClick={()=>setShowMap(true)} className='w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-1 rounded-md flex items-center justify-center text-lg'>Map</span>
      <span className='w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-1 rounded-md flex items-center justify-center text-lg'>Filter</span>
      {/* <span className='w-full bg-[#e0e4e9] font-semibold p-1 rounded-md flex items-center justify-center text-lg'></span> */}
      
      
      {/* Map */}
       {/* {showMap && */}
       <div className={`fixed top-0 left-0 transform transition-transform ease-in-out  ${showMap ? 'translate-y-0' : '-translate-y-full'} duration-1000 flex items-center justify-center w-full h-full`}>

       {/* <div className={`absolute transform transition-transform ease-in-out  bg-red-400 ${showMap ?  ' top-0 left-0' : ' -top-0 -left-40' } duration-1000 flex  items-center justify-center  w-full h-full `}> */}
        <div className='w-[90%] h-[90%] rounded-md overflow-hidden bg-white z-30 '> 

         <div className='w-full flex items-center justify-between bg-white p-3 '>
            <span>hoose a pick-up location</span>
             <div onClick={()=>setShowMap(false)} className=''> <ImCancelCircle /></div>
         </div>
      </div>
    
      </div>
        {/* } */}
    </div>
  )
}

export default FilersFinalCars