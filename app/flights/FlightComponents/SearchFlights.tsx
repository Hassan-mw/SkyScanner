import { Jost } from 'next/font/google';
import React from 'react'
import { IoMdSearch } from "react-icons/io";

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})


const SearchFlights = () => {
  return (
    <div className='w-full bg-[#05203c] flex items-center justify-center p-3 '>
    
    <div className='w-full flex items-center gap-x-2 justify-center py-4 max-w-screen-xl bg-white  rounded-md'>
     <IoMdSearch size={18} />
     <span className={`${jost.className} text-md`}>Pakistan  -  Iran . 19 Jun - 19 Jun . 1 Adult</span>
     
    </div>

    </div>
  )
}

export default SearchFlights