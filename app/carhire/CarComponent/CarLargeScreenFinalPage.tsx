import React from 'react'
import FinalCarData from './FinalCarData'
import CarFinalmap from './CarFinalmap'
import CarsoleCarFilterBySize from './CarsoleCarFilterBySize'

const CarLargeScreenFinalPage = () => {
  return (
    <div className=' w-full flex flex-col space-y-7'>
        <div className='w-full h-80 rounded-md'>
           <CarFinalmap/>
        </div>
        <div className='w-full flex flex-col space-y-7'>
            <CarsoleCarFilterBySize/>
            <FinalCarData/>
          
        </div>

    </div>
  )
}

export default CarLargeScreenFinalPage