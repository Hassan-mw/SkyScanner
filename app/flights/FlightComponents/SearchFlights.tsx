'use client'


import { Jost } from 'next/font/google';
import { useEffect, useState } from 'react';

import { IoMdSearch } from "react-icons/io";

const jost=Jost({
    weight:['300'],
    subsets:['latin']
})


const SearchFlights = () => {
  
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
    <div className='w-full bg-[#05203c] flex items-center justify-center p-3 '>
    
    <div className='w-full flex items-center gap-x-2 justify-center py-4 max-w-screen-xl bg-white  rounded-md'>
     <IoMdSearch size={18} />
     <span className={`${jost.className} text-md`}>{fromcountry}  -  {tocountry} . {departdate} - {returndate} . {Number(person).toFixed(0)} Adult .{type}</span>
     
    </div>

    </div>
  )
}

export default SearchFlights