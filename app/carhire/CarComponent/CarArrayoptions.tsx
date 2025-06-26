import React from 'react'


import { Jost } from "next/font/google"
import { IoBag, IoPersonSharp } from 'react-icons/io5'
import Image from 'next/image'
import { IoMdAlert } from 'react-icons/io'
import CarLinkMap from './CarLinkMap'
const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


const CarArrayoptions = () => {
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-5'>
        <h1 className={`${jost.className} text-2xl md:text-3xl`}>Find cheap car hire in Dubai</h1>
        {/* Array */}
               <div className='w-full grid  sm:grid-cols-2 md:grid-cols-3  gap-8  sm:gap-4'>
                
               
        
        
                  {/* 1 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image2.png" className='p-1 py-4' alt='Car_iamge' />
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
        
                
                  {/* 2 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image3.png" className='p-1 py-4' alt='Car_iamge' />
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
        
        
                  {/* 3 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image4.png" className='p-1 py-4' alt='Car_iamge' />
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


                  {/* 4 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image4.png" className='p-1 py-4' alt='Car_iamge' />
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


                  {/* 5 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image5.png" className='p-1 py-4' alt='Car_iamge' />
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


                  {/* 6 */}
                  <div className='w-full flex flex-col items-center justify-center border rounded-md shadow'>
                     <Image height={200} width={200} src="/car_image6.png" className='p-1 py-4' alt='Car_iamge' />
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


       {/* Text */}
       <div className='w-full flex items-center-safe justify-start gap-x-2 bg-[#eff3f8] rounded-md p-2'>
         <div className='text-slate-500'><IoMdAlert /></div>
         <span style={{fontWeight:400}} className={`${jost.className} text-sm`}>These are the lowest Dubai car hire prices we found over the next 30 days and are subject to change.</span>
       </div>
       
       {/* Map */}
       <CarLinkMap/>
       <div>

       </div>

    </div>
  )
}

export default CarArrayoptions