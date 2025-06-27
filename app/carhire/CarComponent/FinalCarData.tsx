'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFuelPumpFill } from 'react-icons/bs'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa6'
import { GoGear } from 'react-icons/go'
import { IoMdSpeedometer } from 'react-icons/io'
import { IoBag, IoLockClosedSharp, IoLockOpenSharp, IoPersonSharp } from 'react-icons/io5'
import { LuBuilding2 } from 'react-icons/lu'
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineLoop, MdOutlineSevereCold } from 'react-icons/md'
import CarFinalShowCarDetailBtn from './CarFinalShowCarDetailBtn'


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const FinalCarData = () => {
  const [show,setShow]=useState(false)
  const [showDetails,setShowDetails]=useState(0)

   
 function handleDetails(id:number,action:boolean){
    // setShowDetails(null)
    setShow(action)
     setShowDetails((p)=>p===0?id:0);
 
    }


  const carDataArray=[
    {id:1},
    {id:2}
  ]

  return (
    <div className='w-full grid grid-cols-1 gap-4'>
     {
      carDataArray.map((data,index)=>
     
     <div className='w-full border flex flex-col  bg-white   rounded-md shadow  '>
     <div className='w-full  flex flex-col sm:flex-row      '>
      
       {/* First */}
       <div className='w-full flex items-start justify-between p-4 sm:border-r-2 border-slate-300'>
         {/* Left */}
         <div className='flex flex-col space-y-2 items-start justify-start'>
            <h1 className='font-semibold text-2xl'>Suzuki Baleno</h1>
            <span className='text-xs'>or similar mini</span>
            <div className=' sm:hidden '><Image height={60} width={60} className='pt-3' src="/wheego.png" alt='wheego'/></div>
            <div className='grid grid-cols-2 gap-1'>
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
                {/* 3 */}
                <div className='flex items-center justify-center gap-x-1 bg-[#eff3f8] rounded-sm p-2 mt-2'>
                    <MdOutlineSevereCold />
                    <span className='text-xs'>AC</span>
                </div>
                {/* 4 */}
                <div className='flex items-center justify-center gap-x-1 bg-[#eff3f8] rounded-sm p-2 mt-2'>
                    <GoGear /> 
                    <span className='text-xs'>Auto</span>
                </div>
            </div>
            <div className='flex items-center gap-x-1'>
               <LuBuilding2 />
               <span className='text-sm'>Pick-up:ABC+DEF Dubai</span>
            </div>
         </div>
         {/* Right  */}
         <div className='flex flex-col items-end  justify-center '>
            <div className='sm:hidden'> <FaRegHeart size={20} /></div>
            <div className='hidden sm:block'><Image height={60} width={60} className='pt-3' src="/wheego.png" alt='wheego'/></div>
            <Image height={200} width={200}  src="/car_image1.png" className='p-1  py-4 sm:p-0' alt='Car_iamge' />
          </div> 
           
       </div>
        
        {/* Second */}
        <div className='w-full sm:w-1/2 flex flex-col space-y-1 sm:space-y-4 sm:justify-between p-4 border-t-2  sm:border-none border-slate-300'>
            {/* Cancelation_btn */}
           <div className='w-full  flex items-center justify-between '>         
                <div className='sm:hidden flex items-center sm:order-2 justify-center gap-x-1'>
                    <IoLockOpenSharp size={14} />
                   <span className='text-xs '>Free cancellation</span>
                </div>
                <span className={`${jost.className} text-xs sm:text-sm sm:font-semibold text-gray-600`}>1 deal</span>
            </div>
            <span className='text-sm hidden sm:block'>Free cancellation</span>
               {/* price  */}
            <div className='w-full flex sm:flex-col  items-center justify-between sm:items-start  '>
              
              <div className='w-1/2 sm:order-2 sm:w-full sm:pt-5 flex items-center justify-start sm:items-end'>
                         { 
                         ( showDetails===data.id && show )?

                          <div onClick={()=>handleDetails(data.id,false)} className='hover:cursor-pointer flex w-[90%] rounded-md  items-center justify-center gap-x-2 py-1 text-[#05203c] bg-[#e0e4e9]'>
                             <span>Hide</span>
                             <div className='-rotate-90'> <MdArrowBackIosNew /></div>
            
                          </div>
                          :
                          <div onClick={()=>handleDetails(data.id,true)} className='hover:cursor-pointer flex w-[90%] rounded-md text-white items-center justify-center gap-x-2 py-1 bg-[#05203c]'>
                             <span>View deal</span>
                             <div className='-rotate-90'> <MdArrowBackIosNew /></div>
            
                          </div>
                         
                          }
                          </div>
                 <h1 className={`sm:order-1 text-xl sm:text-3xl font-semibold `}>Rs 3,696</h1>
                 
            </div>

           
         
        </div>  
        

        

 

     </div>
       {(showDetails===data.id && show ) &&
        <div className='w-full flex flex-col space-y-2 items-start justify-start  p-3 border-t border-slate-400'>
           
            <div className='w-full flex items-center justify-between'>
               <div className='flex items-center justify-center gap-x-2'>
                  <span className='font-semibold'>VIP cars</span>
                  <span className='text-[#f55d42]'><FaStar /></span>
               </div>
               <span className='text-lg font-medium'>Rs 3,696 total</span>
            </div>
            <div className='flex items-center justify-center gap-x-3 mb-2'>
               <div className='flex items-center justify-center '><span className='text-md font-semibold'>8.3</span><span className='pt-1 text-[11px] text-slate-600'>/10</span> </div>
               <span className='text-sm border-b border-black'>Very good deal</span>
            </div>
            <div className='flex items-center gap-x-1'>
               <IoMdSpeedometer />
               <span className='text-sm'>Unlimited mileage</span>
            </div>
            <div className='flex items-center gap-x-1'>
               <BsFuelPumpFill />
               <span className='text-sm'>Same to same</span>
            </div>
            <div className='flex items-center gap-x-1'>
               <LuBuilding2 />
               <span className='text-sm'>Pick-up:ABC+DEF Dubai</span>
            </div>
          
        </div>
        }
     </div>

       )}




    </div>
  )
}

export default FinalCarData