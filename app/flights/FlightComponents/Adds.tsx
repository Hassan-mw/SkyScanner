import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


 const jost=Jost({
   subsets:['latin'],
   weight:['500']
   
 })

const Adds = () => {
  return (
     <div className="w-[220px] hidden xl:block pt-2  ">
        <div className="w-full  flex flex-col    space-y-4 items-center justify-center">
        
         {/* 1 */}
         <div className="w-full flex flex-col items-center justify-center space-y-3 p-3 bg-white rounded-md shadow-lg">
             {/* Image */}
            <div className="flex items-center justify-center space-x-2">
              <Image height={25} width={25} src="/adds_1.svg" alt="adds_1" />    
              <Image height={25} width={25} src="/adds_2.svg" alt="adds_1" />    
              <Image height={25} width={25} src="/adds_3.svg" alt="adds_1" />    
            </div>

            {/* Text */}
            <span  className={`${jost.className} text-center  text-sm text-[#05203c]`}>Found fights? Now find a hotel</span>
        
            {/* Text */}
            <span style={{fontWeight:200}} className={`${jost.className} text-center text-xs text-[#05203c]`}>Get results from all top hotel sites right here on Skyscnner.</span>
            
            {/* cta */}
            <div className="w-full bg-[#05203c] rounded-md text-sm py-1 flex items-center justify-center text-white">
              Explore hotels

            </div>
         </div>
        

         {/* 2 */}
         <div className="w-full flex flex-col items-start justify-start space-y-2 p-3 bg-white rounded-md shadow-lg">
            {/* 1 */}
            <div className="flex items-center justify-between w-full">
             <span className="text-[9px] bg-[#e0e4e9] px-2 py-1 rounded-xs ">Thu, 19 Jun-Thu, 26 Jun</span>
            <Image height={30} width={30} className=" " src="/skyscanner_white_logo.svg" alt="logo" />
            </div>

            {/* Text */}
            <span style={{fontWeight:600}} className={`${jost.className}  tracking-widest text-sm text-[#05203c]`}>Car hire in Karachi</span>
        
            {/* Text */}
            <span style={{fontWeight:200}} className={`${jost.className}  text-[9px] text-[#05203c]`}>Don't stop at flights - find deals on wheels,too</span>
            
            <div className="w-full bg-[#0062e3] rounded-md flex items-center justify-between">
              {/* Image */}
              <Image height={130} width={130} src="/car_adds_1.svg" alt="car_ads"/>
              {/* text */}
              <div className="flex flex-col  text-white items-end justify-end pr-2">
                  <span className="text-[13px]">Car hire from</span>
                  <span className="text-[9px]">Rs16174 per day</span>
                  <span className="size-7 mt-2 border rounded-sm flex items-center justify-center"><FaArrowRight /></span>
              </div>
            </div>


         </div>

        </div>
        </div>
     
  )
}

export default Adds