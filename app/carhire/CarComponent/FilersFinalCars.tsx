'use client'
import React, { useState } from 'react'
import CarFinalmap from './CarFinalmap';
import { RxCross1 } from "react-icons/rx";
import { Jost } from 'next/font/google';
import CarFinalPageFilter from './CarFinalPageFilter';

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


const FilersFinalCars = () => {

    const [showMap,setShowMap]=useState(false)
    const [showFilter,setShowFilter]=useState(false)


  return (
    <div className='w-full grid grid-cols-2 gap-2'>
      <span onClick={()=>setShowMap(true)} className={`${jost.className} w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-1 rounded-md flex items-center justify-center text-lg`}>Map</span>
      <span  onClick={()=>setShowFilter(true)}  className={`${jost.className} w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-1 rounded-md flex items-center justify-center text-lg`}>Filter</span>

      
      
    {/* Map */}
    <div className={`fixed top-0 left-0 transform transition-transform ease-in-out bg-black/60  ${showMap ? 'translate-y-0' : '-translate-y-full'} duration-1000 flex items-center justify-center w-full h-full`}>
        <div className='w-[90%] h-[90%] rounded-md overflow-hidden bg-white z-30 '> 
            <div className='w-full flex items-center h-[5%] justify-between bg-white p-3 '>
                <span className='text-xl font-semibold'>Choose a pick-up location</span>
                <div onClick={()=>setShowMap(false)} className='text-xl  hover:cursor-pointer'> <RxCross1 /></div>
             </div>
             <div className='h-[95%]'>
             <CarFinalmap/>
             </div>
        </div>
     </div>



    {/* Filter */}
    <div className={`fixed top-0 right-0 transform transition-transform ease-in-out bg-black/60  ${showFilter ? 'translate-y-0' : 'translate-x-full'} duration-1000 flex items-start justify-end w-full h-full`}>

        <div className='w-full  max-w-[500px] h-full  overflow-hidden bg-white z-30 '> 

         <div className='w-full flex items-center h-[5%] justify-between bg-white p-3 '>
            <span className='text-xl font-semibold'>Filter</span>
             <div onClick={()=>setShowFilter(false)} className='text-xl hover:cursor-pointer'> <RxCross1 /></div>
         </div>
        <div className='h-[95%] overflow-y-auto '>
            
              <CarFinalPageFilter/>
        </div>
      </div>
    
      </div>
        {/* } */}
    </div>
  )
}

export default FilersFinalCars