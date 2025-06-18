import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const AvaliableFlightDataChanger = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#05203c]  pb-3'>
    <div className='w-full max-w-screen-xl flex flex-col lg:flex-row  gap-3 px-3'>
    
    {/* top */}
     <div className='w-full py-1  bg-[#1e3750] flex items-center justify-center rounded-md px-[7px]'>
     
      {/* Search_Icon */}
      <div className='flex   items-start justify-start '>
        <div className=' bg-blue-600 flex items-center justify-center size-6 rounded-sm text-white'> <IoIosSearch size={20} /> </div>
      </div>

      {/* Flight_Details */}
      <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
      <span className='text-sm text-white'>Karachi(Any) - Munich(Any)</span>
      <span className='text-sm text-white'>. 8 travellers.Economy</span>
      </div>
     </div>

     {/* bottom */}
     <div className='w-full lg:w-1/2  grid grid-cols-2 gap-x-3  '>
       {/* 1 */}
       <div className='w-full flex items-center justify-between '>
        <div className='size-9 flex items-center justify-center rounded-sm text-white bg-[#1e3750]'><IoIosArrowBack /></div>  
        <span className='text-white'>Sat.21 Jun</span>
        <div className='size-9 flex items-center justify-center rounded-sm text-white bg-[#1e3750]'><IoIosArrowForward /></div>  
       </div>

       {/* 2 */}
       <div className='w-full flex items-center justify-between '>
        <div className='size-9 flex items-center justify-center rounded-sm text-white bg-[#1e3750]'><IoIosArrowBack /></div>  
        <span className='text-white'>Sat.21 Jun</span>
        <div className='size-9 flex items-center justify-center rounded-sm text-white bg-[#1e3750]'><IoIosArrowForward /></div>  
        
       </div>
     </div>

    </div>
    </div>
  )
}

export default AvaliableFlightDataChanger