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


import Image from 'next/image';
import CarsoleCarFilterBySize from './CarsoleCarFilterBySize';

const FilersFinalCars = () => {

    const [showMap,setShowMap]=useState(false)
    const [showFilter,setShowFilter]=useState(false)
   
  

  return (
    <div className='w-full flex flex-col space-y-3 gap-2'>
      
       <div className='w-full grid grid-cols-2 gap-2'>
      <span  onClick={()=>setShowFilter(true)}  className={`${jost.className} w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-2 rounded-md flex items-center justify-center text-sm`}>Filter</span>
      <span onClick={()=>setShowMap(true)} className={`${jost.className} w-full hover:cursor-pointer hover:bg-[#abadb0] duration-500 bg-[#e0e4e9] font-semibold p-2 rounded-md flex items-center justify-center text-sm`}>Map</span>
      </div>
      
       <div className='w-full flex items-center justify-between'>
         <span  className={`${jost.className} text-sm`}>28 result found</span>
         <div className='flex items-center justify-center gap-x-3'>
           <span className={`${jost.className} text-sm`}>Sort by</span>
           <select className='w-36 px-2 py-1 border focus:outline-none rounded-sm bg-white'>
              <option>Abc</option>
           </select>
        </div>

      </div>


     <CarsoleCarFilterBySize/>
        {/* Car_filer_size */}
        {/* <div className='w-full grid grid-cols-3 gap-4 text-xs'> */}
            
        {/* </div> */}
      
     

    {/* Text */}
    <div className='w-full flex justify-start p-3 rounded-md bg-white'>
       <span className='text-sm'>We find prices from all across the web – what providers pay us affects how we sort results. <span className='border-b text-xs'>Learn how Skyscanner workd</span></span>
    </div>
      


      
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
    <div className={`fixed top-0 left-0 transform transition-transform ease-in-out  ${showFilter ? '-translate-x-0' : '-translate-x-full'} duration-1000  w-full h-full`}>

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
        


    </div>
  )
}

export default FilersFinalCars