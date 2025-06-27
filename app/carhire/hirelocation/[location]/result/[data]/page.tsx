import FinalCarData from '@/app/carhire/CarComponent/FinalCarData'
import FinalNavbar from '@/app/carhire/CarComponent/FinalNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <FinalNavbar/>
      <div className='w-full max-w-screen-xl bg-white p-3 flex flex-col space-y-8'>

       <FinalCarData/>
      </div>

    </div>
  )
}

export default page