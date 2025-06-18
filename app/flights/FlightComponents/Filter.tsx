import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import SideBarFilter from './AvalivaleFlights/SideBarFilter'

const Filter = ({range,setRange,showSideBar,showSideBarsort,setShowSideBar,setCheckStops}) => {
  return (
     <div className={`${  showSideBar &&  !showSideBarsort && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBar ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>
            <div  onClick={()=>setShowSideBar(false)} className="text-2xl p-1  hover:cursor-pointer"> 
            <FaArrowLeft />
            </div>
        <SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} />
        </div>
     </div>
  )
}

export default Filter