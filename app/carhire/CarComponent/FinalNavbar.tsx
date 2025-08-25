
'use client'
import { Jost } from "next/font/google"
import { TbSTurnDown } from "react-icons/tb";
import { useEffect, useState } from "react"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { DatePicker } from "@/components/ui/DatePicker";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Calendar } from "lucide-react";
import CustomDatePicker from "@/app/Components_Custom/CustomDatePicker";
import { BsDot } from "react-icons/bs";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const FinalNavbar = () => {

      
        const [value,setValue]=useState('')
        const [checkInDate,setCheckInDate]=useState('')
        const [date,setDate]=useState('')
        const [startPlace,setStartPlace]=useState('')
        const [endPlace,setEndPlace]=useState('')
        const [departDate,setDepartDate] =useState<Date>();
        const [returnDate,setReturnDate] =useState<Date>();
        const [adult,setAdult]=useState(1)
        const [children,setChildre]=useState(0)
        const [roomType,setRoomType]=useState('Economy')
        const [totaltraveller,setTotalTraveller]=useState<Number>(0)
    
        
    useEffect(()=>{
    setTotalTraveller(adult+children)

    },[adult,children])


return (
  <div   className="flex justify-center items-center  min-w-full   bg-[#05203c] p-3  ">
    
       {/* top */}
       <div className='w-full max-w-screen-xl py-2  bg-[#1e3750] flex items-center justify-center rounded-md px-2'>
        {/* Search_Icon */}
        <div className='flex   items-start justify-start '>
            <div className=' bg-blue-600 flex items-center justify-center size-7 rounded-sm text-white'> <IoIosSearch size={18} /> </div>
        </div>
      
        {/* Flight_Details */}
        <div className='w-full flex  text-md text-white items-center justify-center gap-x-1'>
          <span >Dubai</span>
          <BsDot />
          <span > 10/07/2025,10:00</span>
          <span >-</span>
          <span > 10/07/2025,10:00</span>
        </div>
    </div>
    
  
        </div> 
  )
}

export default FinalNavbar