import React from 'react'
import CarFinalPageFilter from './CarFinalPageFilter'
import CarLargeScreenFinalPage from './CarLargeScreenFinalPage'

const LargeScreenFinalFlight = () => {

return (
  <div className='w-full  hidden lg:block  '>
       <div className='w-full flex items-start gap-x-6 z-50 max-w-screen-lg'>
             <div className=' w-[300px] '> <CarFinalPageFilter/> </div>
             <div className=''><CarLargeScreenFinalPage/></div>   
       </div>
  </div>
  )
}

export default LargeScreenFinalFlight