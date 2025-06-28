import React from 'react'
import FinalCarData from './FinalCarData'
import CarFinalmap from './CarFinalmap'

const CarLargeScreenFinalPage = () => {
  return (
    <div className=' w-full'>
        <div className='w-full h-80 rounded-md'> <CarFinalmap/></div>
         <FinalCarData/>

    </div>
  )
}

export default CarLargeScreenFinalPage