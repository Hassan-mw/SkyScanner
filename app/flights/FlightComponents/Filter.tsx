import React, { Dispatch, SetStateAction } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import SideBarFilter from './AvalivaleFlights/SideBarFilter'


interface    DataTypeSideBarFilter {
  cabinBag:boolean;
  setCabinBag:Dispatch<SetStateAction<boolean>>;
  checkStops:string;
  setCheckStops:Dispatch<SetStateAction<string>>;
  cabinBagChecked:boolean;
  setCabinBagChecked:Dispatch<SetStateAction<boolean>>;
  checkAirline:string
  setCheckAirline:Dispatch<SetStateAction<string>>;
  totaltime:string;
  setTotaltime:Dispatch<SetStateAction<string>>;
  showSideBar:boolean
  setShowSideBar:Dispatch<SetStateAction<boolean>>;
  showSideBarsort:boolean;
}


const Filter = ({
   showSideBar,
   setShowSideBar,
   cabinBag,
   setCabinBag,
   checkStops,
   setCheckStops,
   cabinBagChecked,
   setCabinBagChecked,
   checkAirline,
   setCheckAirline,
   totaltime,
   setTotaltime,
   showSideBarsort
} :DataTypeSideBarFilter) => {
  return (
     <div className={`${  showSideBar &&  !showSideBarsort && 'w-full h-full flex items-center justify-center bg-white lg:hidden ' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBar ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>
            <div  onClick={()=>setShowSideBar(false)} className="flex items-center border-b border-white hover:border-blue-500 gap-x-1 text-xl p-3 text-blue-500 hover:text-blue-700 duration-500 hover:cursor-pointer"> 
            <FaArrowLeft size={15} /> Back
            </div>
          <SideBarFilter cabinBag={cabinBag}  setCabinBag={setCabinBag} cabinBagChecked={cabinBagChecked} setCabinBagChecked={setCabinBagChecked}  checkAirline={checkAirline} setCheckAirline={setCheckAirline} checkStops={checkStops} totaltime={totaltime} setTotaltime={setTotaltime}   setCheckStops={setCheckStops} /> </div>  
     </div>
  )
}

export default Filter