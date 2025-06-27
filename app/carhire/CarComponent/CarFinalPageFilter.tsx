import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
// import { Jost } from 'next/font/google';

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})



const CarFinalPageFilter = () => {
  return (
    <div className='w-full flex flex-col space-y-5 p-3  pb-10'>
      
       {/* Recomended filters */}
       <div className='w-full flex flex-col space-y-3 items-start justify-start border-b pb-6'>
         <h1 className={`${jost.className} text-xl`}>Recomended filters</h1>

         {/* 1 */}
         <div className='w-full flex items-center justify-between'>
           <div className='flex items-center justify-center gap-x-3'>
              <Image height={40} width={40} src="/filter_mileage_logo.svg" alt='' />
              <div className='flex flex-col items-start justify-start'>
                <span className='text-md font-semibold'>Unlimited mileage</span>
                <span className='text-xs '>No additional costs if you go over your mileage allowance.</span>
              </div>
           </div>
           <input type='checkbox' className='size-5' />
         </div>

         

         {/* 2 */}
         <div className='w-full flex items-center justify-between'>
           <div className='flex items-center justify-center gap-x-3'>
              <Image height={40} width={40} src="/free_cancelation_logo.svg" alt='' />
              <div className='flex flex-col items-start justify-start'>
                <span className='text-md font-semibold'>Free cancelation </span>
                <span className='text-xs '>Cancel for free up to 48 hours before your pick-up time.</span>
              </div>
           </div>
           <input type='checkbox' className='size-5' />
         </div>

         

         {/* 1 */}
         <div className='w-full flex items-center justify-between'>
           <div className='flex items-center justify-center gap-x-3'>
              <Image height={40} width={40} src="/filter_fuel_logo.svg" alt='' />
              <div className='flex flex-col items-start justify-start'>
                <span className='text-md font-semibold'>Fair fuel policy</span>
                <span className='text-xs '>Pick up and return your car with the same amount of fuel.</span>
              </div>
           </div>
           <input type='checkbox' className='size-5' />
         </div>

         
       </div>

       {/* Seats */}
       <div className='w-full flex flex-col space-y-3 pb-6 border-b'>
          <h1 className={`${jost.className} text-xl`}>Seats </h1>
          <div className='w-full grid grid-cols-3 gap-2 text-xs'>
             <span className='p-1 flex items-center justify-center rounded-md border'>1-3</span>
             <span className='p-1 flex items-center justify-center rounded-md border'>4-5</span>
             <span className='p-1 flex items-center justify-center rounded-md border'>6+</span>
          </div>

       </div> 



       {/* Car type */}
       <div className='w-full flex flex-col space-y-3 pb-6 border-b'>
          <h1 className={`${jost.className} text-xl`}>Car type </h1>
          <div className='w-full grid grid-cols-2 gap-2 text-xs'>
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image1.png" alt='small' /><span className='text-sm'>Small</span></div> 
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image2.png" alt='small' /><span className='text-sm'>Small</span></div> 
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image3.png" alt='small' /><span className='text-sm'>Small</span></div> 
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image4.png" alt='small' /><span className='text-sm'>Small</span></div> 
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image5.png" alt='small' /><span className='text-sm'>Small</span></div> 
             <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md '><Image  height={100} width={100} src="/car_image6.png" alt='small' /><span className='text-sm'>Small</span></div> 
            
          
          </div>

       </div> 

       
       {/* Transmission */}
       <div className='w-full flex flex-col space-y-3 pb-6 border-b'>
          <h1 className={`${jost.className} text-xl`}>Transmission </h1>
          <div className='w-full grid grid-cols-1 gap-2 '>
             <div className='flex items-center justify-between' >  <span className='text-md'>Automatic</span> <input type='checkbox' className='size-4' />    </div>           
             <div className='flex items-center justify-between' >  <span className='text-md'>Manual</span> <input type='checkbox' className='size-4' />    </div>           
          
          </div>

       </div> 


       {/* Pick-up */}
       <div className='w-full flex flex-col space-y-3 '>
          <h1 className={`${jost.className} text-xl`}>Pick-up </h1>
          <div className='w-full grid grid-cols-1 gap-2 '>
             <div className='flex items-center justify-between' >  <span className='text-md'>Electric</span> <input type='checkbox' className='size-4' />    </div>           
             <div className='flex items-center justify-between' >  <span className='text-md'>Hybird</span> <input type='checkbox' className='size-4' />    </div>           
          
          </div>

       </div> 

     


    </div>
  )
}

export default CarFinalPageFilter