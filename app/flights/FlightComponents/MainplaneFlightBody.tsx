import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { IoMdAirplane } from 'react-icons/io'

const MainplaneFlightBody = ({filterArray,handleClickSelectFlight}) => {
  return (
     <div className="w-full h-full grid grid-cols-1 gap-3 p-3 ">
        {filterArray.map((data,index)=>

        <div key={index} className=" w-full  p-2  bg-white  shadow-lg rounded-2xl flex items-center justify-center space-x-4 border ">

        <div className="w-full grid grid-cols-1 sm:grid-cols-3   items-center justify-center space-y-1  ">
       
        {/* Plane_Deport_Return */}
        <div className="w-full pl-2 max-w-[80%] lg:max-w-[95%] flex flex-col  sm:col-span-2 items-center justify-center space-y-1 md:space-y-0 md:space-x-2  ">
          
          {/* 1 */}
          <div className="w-full  flex items-center justify-between   gap-x-12    ">
              <div><Image height={90} width={90}  className=" " src="/pia.png" alt="pia-logo"/></div>
              <div className="w-full flex  items-center justify-center space-x-3">
                
                {/* Plane_start */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.startTime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

                {/* Middle_body */}
                <div className="w-full flex flex-col items-center ">
                    <span className="text-xs">{data.hours} hours</span>
                    {/* middle */}
                    <div className="w-full flex items-center justify-center space-x-4 ">
                        <span className="border-t-2  w-full border-slate-200"></span>
                        <span className="rotate-90"><IoMdAirplane /></span>
                    </div>
                    {/* Stops */}
                    <span className="text-xs">{data.stop}</span> 
                </div>

                {/* Plane_End */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.endTime}:00</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

              </div>

          </div>
          
          {/* 2 */}
          <div className="w-full flex  items-center justify-between border-b pb-2 border-slate-300 sm:border-none gap-x-12   ">
              <div><Image height={90} width={90}  className=" " src="/pia.png" alt="pia-logo"/></div>
              <div className="w-full flex  items-center justify-center space-x-3">
                
                {/* Plane_start */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.startTime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

                {/* Middle_body */}
                <div className="w-full flex flex-col items-center ">
                    <span className="text-xs">{data.hours} hours</span>
                    {/* middle */}
                    <div className="w-full flex items-center justify-center space-x-4 ">
                        <span className="border-t-2  w-full border-slate-200"></span>
                        <span className="rotate-90"><IoMdAirplane /></span>
                    </div>
                    {/* Stops */}
                    <span className="text-xs">{data.stop}</span> 
                </div>

                {/* Plane_End */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.endTime}:00</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

              </div>

          </div>
        </div>
          
        {/* Plane_Price_Data */}
          <div className="w-full  sm:col-span-1    flex items-end justify-end sm:items-center sm:justify-center  sm:border-l border-[#e5e5e5]  py-2 ">
          {/*Pricing_btton  */}
          <div className="flex sm:flex-col items-center justify-center gap-2">
        
          {/* price */}
          <div className="flex flex-col items-end">
          <p className="text-[10px] text-slate-500">1 deal</p>
          <span className="text-xl ">Rs 63,500</span>
          <p className="text-[10px] text-slate-500">Rs 1,424 total</p>
          </div>
         
          {/* cta */}
          <div onClick={()=>handleClickSelectFlight(data.airline,data.id)} className="px-3  py-1 gap-x-2 flex items-center justify-center bg-[#05203c] text-white rounded-md  hover:cursor-pointer  ">
          <span  className=" ">Select</span>
          <FaArrowRight />
          </div>

          </div>

          </div>

        </div>
               {/* <div>🖤</div> */}
          </div>
          
            )}
            
           
          
         </div>
  )
}

export default MainplaneFlightBody