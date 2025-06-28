import React from 'react'
import FilersFinalCars from './FilersFinalCars'
import FinalCarData from './FinalCarData'

const SmallScreenFinalFlight = () => {
  return (
    <div className='w-full lg:hidden flex items-center justify-center '>
       <div className='w-full flex flex-col space-y-3 z-50 '>
         <FilersFinalCars/>
         <FinalCarData/>
       </div>
    </div>
  )
}

export default SmallScreenFinalFlight