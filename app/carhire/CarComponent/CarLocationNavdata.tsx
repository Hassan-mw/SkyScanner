import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { FaCalendarAlt } from "react-icons/fa"
import { FaCarSide } from "react-icons/fa6"
import {IoMdPricetag } from "react-icons/io"



import { Jost } from "next/font/google"
const jost=Jost({
    subsets:['latin'],
    weight:['500']
})



const CarLocationNavdata = () => {
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-4'> 
       {/* Navigation */}
        <div className='flex items-center gap-x-3'>
        <div className='flex items-center gap-x-3'> <span className='border-b border-black'>Home</span><span className='text-slate-400'><IoMdArrowDropright /></span> </div>
        <div className='flex items-center gap-x-3'> <span  className='border-b border-black'>Car hire</span><span  className='text-slate-400'><IoMdArrowDropright /></span> </div>
        <span>Car hire</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full space-y-5 sm:space-y-0 sm:space-x-8 font-base  text-slate-900">
                
            {/* 1 */}
            <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
                <div className="text-sm   pt-1"><FaCarSide size={22} /></div>
                <span className={`${jost.className} text-sm `}>Use the same magic that powers our flight search to find cheap car rental in Dubai</span>
            </div>
                
        
            {/* 2 */}
            <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
                <div className="text-sm  pt-1"><FaCalendarAlt size={20} /></div>
                <span className={`${jost.className} text-sm `}>Compare car hire on price, ease of pick-up, a fair fuel policy and more</span>
            </div>
                
            {/* 3 */}
            <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
                <div className="text-sm  pt-1"><IoMdPricetag size={24} /></div>
                <span className={`${jost.className} text-sm `}>Find Dubai car rental deals you can amend or cancel if your plans change</span>
            </div>
                 
        </div>

    </div>
  )
}

export default CarLocationNavdata