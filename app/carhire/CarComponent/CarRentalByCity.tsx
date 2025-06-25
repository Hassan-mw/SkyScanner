import { Jost } from 'next/font/google'
import React from 'react'

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
    </div>
  )
}

export default CarRentalByCity