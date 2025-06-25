import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoBag, IoPersonSharp } from 'react-icons/io5'

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const CarRentalByCity = () => {
  return (
    <div className='w-full  flex flex-col items-start justify-start'>
       {/* Text */}
       <div className='flex flex-col items-start justify-start space-y-2'>
          <h1 className={`${jost.className} text-2xl sm:text-3xl`}>Find the best car hire deals in Islamabad</h1>
          <p style={{fontWeight:200}} className={`${jost.className} text-sm md:text-md`}>Here are the most popular types of rental car you can pick up from a point near you in the next 30 days.</p>
       </div>

       {/* Array */}
       <div className='w-full grid grid-cols-2 '>
          {/* 1 */}
          <div className='w-full flex flex-col items-center justify-center border rounded-md '>
             <Image height={200} width={200} src="/car_image1.png" className='p-1' alt='Car_iamge' />
             <div className='w-full flex  items-center justify-between p-3 border-t'>
                {/* Left */}
                <div className='flex flex-col items-start justify-start '>
                  <h1 className={`${jost.className} text-xl`}>Compact</h1>
                  <span style={{fontWeight:200}} className={`${jost.className} text-xs`}>4-5 doors</span>
                  <div className='flex items-center justify-center gap-x-3'>
                     {/*  1  */}
                    <div className='flex items-center justify-center gap-x-1 bg-[#eff3f8] rounded-sm p-2 mt-2'>
                        <IoPersonSharp />
                        <span className='text-xs'>4</span>
                    </div>
                    {/* 2 */}
                    <div className='flex items-center justify-center gap-x-1 bg-[#eff3f8] rounded-sm p-2 mt-2'>
                        <IoBag />
                        <span className='text-xs'>3</span>
                    </div>
                  </div>
                </div> 
                {/* Right */}
                <div className='flex flex-col items-end justify-end'>
                    <span  style={{fontWeight:100}} className={`${jost.className} text-slate-500 text-xs`}>From</span>
                    <h1  className={`${jost.className} text-lg`}>Rs17,774</h1>
                    <span  style={{fontWeight:100}} className={`${jost.className} text-slate-500 text-xs`}>per day</span>
                </div>


             </div>
          </div>

       </div>
    </div>
  )
}

export default CarRentalByCity