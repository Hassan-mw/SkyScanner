import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa"
import { FaCarSide } from "react-icons/fa6"
import { IoIosArrowForward, IoMdPricetag } from "react-icons/io"

import { Jost } from "next/font/google"
const jost=Jost({
    subsets:['latin'],
    weight:['500']
})



function ShowCurrentPageHotel() {
  
    return (
      <div className="flex flex-col space-y-2 w-full ">

    <div className="flex items-start justify-start space-x-2 w-full pb-6"> 
        <div className="flex items-center justify-center space-x-2  font-semibold"> 
          <Link href="/" className={`${jost.className} text-black  border-b border-black  hover:border-blue-800`}>Home</Link> <span className="text-slate-600"><IoIosArrowForward size={16} /></span></div>
        <span style={{fontWeight:200}} className={`${jost.className} text-slate-500   `}> Car hire</span>  
    </div>



    <div className="flex flex-col sm:flex-row items-start justify-between w-full space-y-5 sm:space-y-0 sm:space-x-8 font-base  text-slate-900">
        
        {/* 1 */}
        
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm   pt-1"><FaCarSide size={22} /></div>
        <span className={`${jost.className} text-sm `}>Search for cheap car rental in seconds – anywhere in the world</span>
        </div>

        {/* 2 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><FaCalendarAlt size={20} /></div>
        <span className={`${jost.className} text-sm `}>Compare deals from trusted car hire providers in one place</span>
        </div>
        
        
        {/* 3 */}
        <div className="flex items-start sm:flex-col lg:flex-row text-black   space-x-3 sm:space-x-0 sm:space-y-2 lg:space-y-0  lg:space-x-3">
        <div className="text-sm  pt-1"><IoMdPricetag size={24} /></div>
        <span className={`${jost.className} text-sm `}>Rent a car with a flexible booking policy or free cancellation</span>
        </div>
         
    </div>



    </div>
    )
}

export default ShowCurrentPageHotel
