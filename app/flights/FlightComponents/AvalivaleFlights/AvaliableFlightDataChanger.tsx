'use client'
import { Jost } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const jost=Jost({
  subsets:['latin'],
  weight:['300']
})

const AvaliableFlightDataChanger = () => {

  const [data,flightData]=useState([])
     useEffect(() => {
     const saved = localStorage.getItem("flgightData");
     if (saved) {
       flightData(JSON.parse(saved));
     }
   }, []);
   if(data.length===0) return
   const {fromcountry,tocountry,returndate,departdate,type,person}=data[0]
 
   

  return (
    <div className='w-full flex items-center justify-center bg-[#05203c]  pb-3'>
    <div className='w-full max-w-screen-xl rounded-md flex items-center justify-center p-2 bg-[#1e3750]'>
    
    {/* top */}
     <div className='w-full py-1  max-w-lg flex items-center gap-3 justify-center '>
     
      {/* Search_Icon */}
      <div className='flex   items-start justify-start '>
        <div className=' bg-blue-600 flex items-center justify-center size-4 rounded-sm text-white'> <IoIosSearch size={20} /> </div>
      </div>

      {/* Flight_Details */}
      <div className=' flex flex-col lg:flex-row items-center justify-center gap-x-2'>
      <span className={`${jost.className} text-md text-white`}>{fromcountry} - {tocountry} </span>
      <span className={`${jost.className}  text-md text-white`}>.{Number(person).toFixed(0)} travellers.{type}</span>
      </div>
     </div>

   
    </div>
    </div>
  )
}

export default AvaliableFlightDataChanger