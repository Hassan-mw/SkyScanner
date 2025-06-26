
'use client'
import { Jost } from "next/font/google"

//  import Hotelsearchplace from "./HotelsearchPlace"
import { TbSTurnDown } from "react-icons/tb";
import { useEffect, useState } from "react"
// import CustomDatePicker from "./CustomDatePicker"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { DatePicker } from "@/components/ui/DatePicker";
import { IoIosSearch, IoMdSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Calendar } from "lucide-react";
import CustomDatePicker from "@/app/Components_Custom/CustomDatePicker";


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
  <div   className="flex justify-center items-center  min-w-full   bg-[#05203c] ">
    
    {/* top */}
    <div className='w-full max-w-screen-xl py-3  bg-[#1e3750] flex items-center justify-center rounded-md px-[7px]'>
        {/* Search_Icon */}
        <div className='flex   items-start justify-start '>
            <div className=' bg-blue-600 flex items-center justify-center size-6 rounded-sm text-white'> <IoIosSearch size={20} /> </div>
        </div>
      
        {/* Flight_Details */}
        <div className='w-full flex flex-col lg:flex-row items-center justify-center'>
          <span className='text-sm text-white'>Karachi(Any) - Munich(Any)</span>
          <span className='text-sm text-white'>. 8 travellers.Economy</span>
        </div>
    </div>
    
  
        </div> 
  )
}

export default FinalNavbar