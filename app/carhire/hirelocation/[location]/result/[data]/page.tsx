import FinalCarData from '@/app/carhire/CarComponent/FinalCarData'
import FinalNavbar from '@/app/carhire/CarComponent/FinalNavbar'
import LargeScreenFinalFlight from '@/app/carhire/CarComponent/LargeScreenFinalFlight'
import SmallScreenFinalFlight from '@/app/carhire/CarComponent/SmallScreenFinalFlight'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col bg-[#eff3f8] items-center justify-center'>
      <FinalNavbar/>
      <div className='w-full max-w-screen-xl  p-3 flex flex-col space-y-8'>
       <SmallScreenFinalFlight/>
       <LargeScreenFinalFlight/>
      </div>

    </div>
  )
}

export default page