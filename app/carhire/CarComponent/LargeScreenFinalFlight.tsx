import React from 'react'
import CarFinalPageFilter from './CarFinalPageFilter'
import CarLargeScreenFinalPage from './CarLargeScreenFinalPage'

const LargeScreenFinalFlight = () => {

return (
  <div className='w-full hidden lg:block '>
       <div className='w-full grid grid-cols-6 space-y-3 z-50 '>
             <div className='col-span-2 w-[300px] bg-red-400'> <CarFinalPageFilter/> </div>
             <div className='col-span-4'><CarLargeScreenFinalPage/></div>   
       </div>
  </div>
  )
}

export default LargeScreenFinalFlight