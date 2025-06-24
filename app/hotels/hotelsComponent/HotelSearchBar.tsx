
'use client'
import { Jost } from "next/font/google"

 import Hotelsearchplace from "./HotelsearchPlace"

import { TbSTurnDown } from "react-icons/tb";
import { useEffect, useState } from "react"
import CustomDatePicker from "./CustomDatePicker"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { DatePicker } from "@/components/ui/DatePicker";
import { IoMdSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Calendar } from "lucide-react";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})




const HotelSearchBar = () => {
    
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
       
    
       
        {/*//!  Form */}
       <Menubar className="w-full max-w-screen-xl bg-[#05203c] px-3 h-32 md:h-20  grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-0 border-[#05203c] ">
          
        {/* Hotel_Name */}
        <MenubarMenu  >
            <MenubarTrigger className="w-full  flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
                <span className="text-[9px]  hidden xl:block   text-white">Where do you want to stay?</span>
                <div className="bg-white    rounded-md  md:rounded-r-none  md:rounded-l-md md:border-r  w-full">
                     <input type="text"  value={startPlace && startPlace  } placeholder='Enter the destination or hotel name' style={{fontWeight:400}}  className={`  w-full text-sm p-2 placeholder:text-gray-400 focus:outline-none`} />                 
                </div>      
              </MenubarTrigger>
            <MenubarContent >
                {/* Data */}
             <Hotelsearchplace value={value} setValue={setValue}  />
            </MenubarContent>
        </MenubarMenu>
    
    
         <div className=" w-full flex items-center justify-between gap-2 md:gap-0">
    
        {/* Check_In_Date*/}
        <MenubarMenu  >
            <MenubarTrigger className="w-1/2   flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
               <div className="text-[9px]    text-white  hidden xl:block ">Check-in </div>
                <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none  border-r ">
                 <span className={`${jost.className} text-slate-800 truncate text-sm`}>{checkInDate? checkInDate: '26/7/25'}</span>
                </div>      
              </MenubarTrigger>
            <MenubarContent >
                {/* Data */}
                 <CustomDatePicker date={checkInDate} setDateSelect={setCheckInDate} />
    
    
            </MenubarContent>
        </MenubarMenu>
    
        
        {/* Check_Out_Date*/}
        <MenubarMenu  >
            <MenubarTrigger className="w-1/2   flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
               <div className="text-[9px]    text-white  hidden xl:block ">Check-out </div>
                <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none  border-r ">
                <span className={`${jost.className} text-slate-800 truncate text-sm`}>{checkInDate? checkInDate: '26/7/25'}</span>
                </div>      
              </MenubarTrigger>
            <MenubarContent >
                {/* Data */}
                 <CustomDatePicker date={checkInDate} setDateSelect={setCheckInDate} />
    
    
            </MenubarContent>
        </MenubarMenu>
    
        
        
           
        {/* Guest_Room */}
        <MenubarMenu  >
           <MenubarTrigger className="w-full  flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
                <span className="text-white text-[9px] hidden xl:block "> Guests and rooms </span>
                <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none md:rounded-r-md   ">
                  <span className={`${jost.className} text-sm `}>{`${totaltraveller} ${Array.isArray(totaltraveller) &&   totaltraveller.length >1  ? 'travellers' : 'traveller'}, ${roomType}`}</span>
                </div>      
              </MenubarTrigger>
            <MenubarContent >
       
            <PlanePerson adult={adult} setAdult={setAdult} children={children} setChildren={setChildre} roomType={roomType} setRoomType={setRoomType} />
            </MenubarContent>
        </MenubarMenu>
    
        </div>
        
    
          
    
    
       </Menubar>
    
    
    
    
    
     
     
    
        {/* </div> */}
        {/* // </div> */}
    
        </div>  
    
    
            // </div>
  )
}

export default HotelSearchBar