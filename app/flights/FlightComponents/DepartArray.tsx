'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import image from "../../public/Pakistan.jpg"
import { Jost } from 'next/font/google'
import { LuExternalLink } from "react-icons/lu";

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})
const DepartArray = () => {
       const [filteroptons,setFileroptions]=useState('Cheapest flights')
  


  const fileredOptionsArray=[
    {id:1,text:"Cheapest flights"},
    {id:2,text:"All avaliable locations"}
]

  return (
  <div className='w-full   flex items-center justify-center bg-[#eff3f8] p-5'>
     <div className='w-full  max-w-screen-xl flex flex-col space-y-7 py-8 items-center justify-center  '>
 
       {/* Hero_Section */}
       <div className='w-full flex flex-col items-start justify-start space-y-2'>
          {/* Text */}
          <h1 className={`${jost.className} text-2xl sm:text-3xl w-full font-semibold`}>Select departure location</h1>
           {/* filtered-array */}
           <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3'>
             {fileredOptionsArray.map((data,index)=>
              <span onClick={()=>setFileroptions(data.text)}  key={index} className={`hover:cursor-pointer px-3 py-2 rounded-md text-xs text-center border ${data.text===filteroptons ? 'text-white bg-[#05203c] border-[#05203c]' :' bg-transparent  border-slate-300'}`}>{data.text}</span>)}
            </div>
       </div>

       {/* Data */}
       <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8"> 
       
       {/* 1 */}
       <div className='w-full flex flex-col items-start justify-start bg-white shadow-md p-4 rounded-md'>
        <h1 className={`${jost.className} text-xl`}>Karachi</h1>
        <div className='w-full flex items-center justify-between'>
        <span className={`text-slate-500 text-xs `} >Flight from</span>
        <span className={`${jost.className} text-xl `}>RS 123,342</span>
        </div>
        <span className={`text-slate-500 text-xs `} >1+ stops</span>

       </div> 

       {/* 1 */}
       <div className='w-full flex flex-col items-start justify-start bg-white shadow-md p-4 rounded-md'>
        <h1 className={`${jost.className} text-xl`}>Karachi</h1>
        <div className='w-full flex items-center justify-between'>
        <span className={`text-slate-500 text-xs `} >Flight from</span>
        <span className={`${jost.className} text-xl `}>RS 123,342</span>
        </div>
        <span className={`text-slate-500 text-xs `} >1+ stops</span>

       </div> 
       
       {/* 1 */}
       <div className='w-full flex flex-col items-start justify-start bg-white shadow-md p-4 rounded-md'>
        <h1 className={`${jost.className} text-xl`}>Karachi</h1>
        <div className='w-full flex items-center justify-between'>
        <span className={`text-slate-500 text-xs `} >Flight from</span>
        <span className={`${jost.className} text-xl `}>RS 123,342</span>
        </div>
        <span className={`text-slate-500 text-xs `} >1+ stops</span>

       </div> 

       </div>


    </div>
    </div>
  )
}

export default DepartArray