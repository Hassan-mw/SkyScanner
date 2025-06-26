import FinalCarData from '@/app/carhire/CarComponent/FinalCarData'
import FinalNavbar from '@/app/carhire/CarComponent/FinalNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col'>
      <FinalNavbar/>
       <FinalCarData/>

    </div>
  )
}

export default page