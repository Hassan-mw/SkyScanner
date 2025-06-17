import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const AvaliableFlightDataChanger = () => {
  return (
    <div className='w-full bg-[#05203c] px-3 space-y-3 pb-3'>
    {/* top */}
     <div className='w-full py-2  bg-[#1e3750] flex items-center justify-center rounded-md px-3'>
      {/* Search_Icon */}
      <div className='flex   items-start justify-start '>
        <div className=' bg-blue-600 flex items-center justify-center size-9 rounded-sm text-white'> <IoIosSearch size={20} /> </div>
      </div>
      {/* Flight_Details */}
      <div className='w-full flex flex-col items-center justify-center'>
      <span className='text-sm text-white'>Karachi(Any) - Munich(Any)</span>
      <span className='text-sm text-white'>8 travellers.Economy</span>
      </div>
     </div>
     {/* bottom */}
     <div className='w-full grid grid-cols-2 gap-x-3  '>
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
  )
}

export default AvaliableFlightDataChanger