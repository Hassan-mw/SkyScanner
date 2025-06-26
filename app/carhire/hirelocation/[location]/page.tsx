import React from 'react'
import CarSearchbarLargeScreen from '../../CarComponent/CarSearchbarLargeScreen'
import CarSearchbarSmallScreen from "../../CarComponent/CarSearchbarSmallScreen"
import CarLocationNavdata from '../../CarComponent/CarLocationNavdata'
import CarArrayoptions from '../../CarComponent/CarArrayoptions'


const page = () => {
  return (
    <div className='w-full bg-white flex items-center justify-center'>
         {/*Search_bar  */}
       {/* <div className="bg-[#05203c] flex items-center justify-center w-full">
          <div className="hidden md:block w-full "> <CarSearchbarLargeScreen/></div>
          <div className="md:hidden w-full "> <CarSearchbarSmallScreen/></div>
       </div> */}
       <div className='w-full max-w-screen-xl flex flex-col space-y-9 py-5 items-center justify-center p-5'>
           {/* Nav_data  */}
           <CarLocationNavdata/>
           {/* CarOptions  */}
           <CarArrayoptions/>
       </div>
    </div>
  )
}

export default page