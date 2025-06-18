import React from 'react'
import SideBarSort from './AvalivaleFlights/SideBarSort'
import { FaArrowLeft } from 'react-icons/fa6'

const Sort = ({checkSort,setCheckSort,showSideBarsort,showSideBar,setShowSideBarSort}) => {
  return (
     <div className={`${  showSideBarsort && !showSideBar  && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBarsort ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>

      <div  onClick={()=>setShowSideBarSort(false)} className="text-2xl p-1  hover:cursor-pointer"> <FaArrowLeft /> </div>
      
        <SideBarSort checkSort={checkSort}  setCheckSort={setCheckSort} />
        </div>
     </div>
  )
}

export default Sort