import React from 'react'
import Link from "next/link"
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Jost } from 'next/font/google';

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const ShowDetails = () => {
  return (
    <div className="flex flex-col space-y-2 w-full p-3">

    <div className="flex items-start justify-start space-x-2 w-full pb-6"> 
        <div className="flex items-center justify-center space-x-2 font-semibold"> <Link href="/" className={`${jost.className} text-blue-600 border-b border-white  hover:border-blue-800`}>Home</Link> <span className="text-slate-600"><IoIosArrowForward size={16} /></span></div>
        <span className={`${jost.className} text-blue-600  `}>Flights</span>  
    </div>

    <div className="flex flex-col sm:flex-row items-start justify-between w-full space-y-5 sm:space-y-0 sm:space-x-8 font-base  text-slate-900">
        
        {/* 1 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  rotate-45 pt-1"><MdOutlineAirplanemodeActive size={22} /></div>
        <span className={`${jost.className} text-sm `}>Explore the best flight deals from anywhere, to everywhere, then book with no fees</span>
        </div>
        

        {/* 2 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><FaCalendarDays size={20} /></div>
        <span className={`${jost.className} text-sm `}>Compare flight deals from over 1000 providers, and choose the cheapest, fastest or lowest-emission tickets</span>
        </div>
        

        {/* 3 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><IoIosPricetag size={20} /></div>
        <span className={`${jost.className} text-sm `}>Find the cheapest month - or even day - to fly, and set up Price Alerts to book when the price is right</span>
        </div>
         
    </div>

    </div>
  )
}

export default ShowDetails