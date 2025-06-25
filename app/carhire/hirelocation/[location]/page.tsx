import React from 'react'
import CarSearchbarLargeScreen from '../../CarComponent/CarSearchbarLargeScreen'
import CarSearchbarSmallScreen from "../../CarComponent/CarSearchbarSmallScreen"
import CarLocationNavdata from '../../CarComponent/CarLocationNavdata'


const page = () => {
  return (
    <div className='w-full bg-green-500 flex items-center justify-center'>
         {/*Search_bar  */}
       {/* <div className="bg-[#05203c] flex items-center justify-center w-full">
          <div className="hidden md:block w-full "> <CarSearchbarLargeScreen/></div>
          <div className="md:hidden w-full "> <CarSearchbarSmallScreen/></div>
       </div> */}
       <div className='w-full max-w-screen-xl flex items-center justify-center'>
           {/* Nav_data  */}
           <CarLocationNavdata/>
       </div>
    </div>
  )
}

export default page