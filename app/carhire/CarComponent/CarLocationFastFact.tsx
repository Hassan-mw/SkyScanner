import { Jost } from 'next/font/google'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaCarSide, FaHeart } from 'react-icons/fa6'
import { IoMdPricetag } from 'react-icons/io'

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


const CarLocationFastFact = () => {
  return (
<div className="w-full h-full flex flex-col space-y-7 items-center justify-center">
                {/* Upper text */}
               <div className="flex flex-col w-full items-start space-y-1">
                   <h1 className={`${jost.className} text-3xl md:text-3xl font-semibold`}>Car hire fast facts</h1>
                   <span style={{fontWeight:200}} className={`${jost.className} text-sm text-slate-900`}>Everything you need to know to hit the road happy.</span>
               </div>
               <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* 1 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold  mb-2"><IoMdPricetag /></div>
                   <span className="text-sm text-slate-600">Hotel brands to choose from</span>
                   <span className="font-semibold text-xl border-b border-black">Rs17,774</span>
               </div>
                {/* 2 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold  mb-2"><FaCarSide /></div>         
                   <span className="text-sm text-slate-600">Cheapest provider</span>
                   <span className="font-semibold text-xl border-b border-black">Hertz</span>
               </div>
                {/* 3 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold mb-2"><FaHeart size={20} /></div> 
                   <span className="text-sm text-slate-600">Highest rated provider</span>
                   <span className="font-semibold text-xl border-b border-black">Europcar</span>
               </div>
                {/* 4 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold mb-2"><FaCalendarAlt size={20} /></div> 
                   <span className="text-sm text-slate-600">Best time to book</span>
                   <span className="font-semibold text-xl border-b border-black">2 weeks before</span>
               </div>
               </div>
              
              
            </div>        
         

  )
}

export default CarLocationFastFact