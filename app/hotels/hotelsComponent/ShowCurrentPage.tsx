import React from 'react'
import Link from "next/link"
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosPricetag, IoMdPricetag } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Jost } from 'next/font/google';
import { IoCameraReverse, IoSearchOutline } from 'react-icons/io5';

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})
function ShowCurrentPage({country}:{country:string}) {
    return (
          <div className="flex flex-col space-y-2 w-full p-3">

    <div className="flex items-start justify-start space-x-2 w-full pb-6"> 
        <div className="flex items-center justify-center space-x-2 font-semibold"> <Link href="/" className={`${jost.className} text-blue-600 border-b border-white  hover:border-blue-800`}>Home</Link> <span className="text-slate-600"><IoIosArrowForward size={16} /></span></div>
        <div className="flex items-center justify-center space-x-2 font-semibold"> <Link href="/" className={`${jost.className} text-blue-600 border-b border-white  hover:border-blue-800`}>Hotels</Link> <span className="text-slate-600"><IoIosArrowForward size={16} /></span></div>
        <span className={`${jost.className} text-blue-600  `}>{country}</span>  
    </div>

    <div className="flex flex-col sm:flex-row items-start justify-between w-full space-y-5 sm:space-y-0 sm:space-x-8 font-base  text-slate-900">
        
        {/* 1 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  -rotate-12 pt-1"><IoSearchOutline size={22} /></div>
        <span className={`${jost.className} text-sm `}>Find the best {country} hotel for your dates, by price or preference</span>
        </div>
        

        {/* 2 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><IoMdPricetag size={20} /></div>
        <span className={`${jost.className} text-sm `}>Compare hotel deals across hundreds of providers, all in one place</span>
        </div>
        

        {/* 3 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><IoCameraReverse size={20} /></div>
        <span className={`${jost.className} text-sm `}>Look out for {country} hotels with free cancellation or excellent ratings</span>
        </div>
         
    </div>

    </div>
    )
}

export default ShowCurrentPage
