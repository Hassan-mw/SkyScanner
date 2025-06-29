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
import RoomPerson from "./RoomPerson";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const CustomSearchBarHotel = () => {

    const [value,setValue]=useState('')
    const [checkInDate,setCheckInDate]=useState<Date>()
    const [returnDate,setReturnDate] =useState<Date>();
    const [adult,setAdult]=useState(1)
    const [children,setChildre]=useState(0)
    const [roomType,setRoomType]=useState('Economy')
    const [person,setPerson]=useState(1)
    const [room,setRoom]=useState(1)
    
    

    return (
    <div   className="flex justify-center items-center  min-w-full   bg-[#05203c] ">
    <div className="relative h-[300px] 2xl:h-[450px]  w-full">
    <Image className="hidden 2xl:block object-cover w-[100vw] " fill src="/hotel_main_image.webp" alt="large_screen_bg_image" />

    {/* //!    data */}
    <div   className="absolute  h-full   w-full top-0  left-0 flex  items-center justify-center    ">
    <div   className=" bg-[#05203c] lg:bg-transparent 2xl:p-6 2xl:rounded-lg flex flex-col items-center justify-center  gap-y-[3px] xl:gap-y-4 w-full px-2 pb-5 max-w-screen-xl  space-y-3 lg:space-y-1 ">
    
    
    {/* //! Header_text */}
    <div className=" w-full flex  items-start   ">
    <h1 style={{fontWeight:700}} className={`${jost.className}  text-2xl lg:text-4xl text-white  px-3`}>Find the right hotel today</h1>
    </div>

   <div className="w-full bg-[#05203c] p-2 rounded-sm flex flex-col space-y-2">

   
    {/*//!  Form */}
   <Menubar className="w-full bg-[#05203c]  h-32  grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 border-[#05203c]">
      
    {/* Hotel_Name */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
            <span className="text-[9px]  text-white">Where do you want to stay?</span>
            <div className="bg-white    rounded-md  md:rounded-r-none  md:rounded-l-md  w-full">
                 <input type="text"  value={value} placeholder='Enter the destination or hotel name' style={{fontWeight:400}}  className={`  w-full text-sm p-2 placeholder:text-gray-400 focus:outline-none`} />                 
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
           <div className="text-[9px]   flex text-white">Check-in </div>
            <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none  border-r ">
             <span className={`${jost.className} text-slate-800 truncate text-sm`}>{checkInDate? checkInDate.toLocaleDateString(): '26/7/25'}</span>
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
           <div className="text-[9px]   flex text-white">Check-out </div>
            <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none  border-r ">
            <span className={`${jost.className} text-slate-800 truncate text-sm`}>{returnDate? returnDate.toLocaleDateString(): '26/7/25'}</span>
            </div>      
          </MenubarTrigger>
        <MenubarContent >
            {/* Data */}
             <CustomDatePicker date={returnDate} setDateSelect={setReturnDate} />


        </MenubarContent>
    </MenubarMenu>

    
    
       
    {/* Guest_Room */}
    <MenubarMenu  >
       <MenubarTrigger className="w-full  flex flex-col space-y-1 items-start justify-start   rounded-md  p-0 ">
            <span className="text-white text-[9px] "> Guests and rooms </span>
            <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm  md:rounded-none md:rounded-r-md   ">
              <span className={`${jost.className} text-sm `}>{`${person} Person, ${room} room`}</span>
            </div>      
          </MenubarTrigger>
        <MenubarContent >
        <RoomPerson  person={person} room={room} setperson={setPerson}  setRoom={setRoom} />
      
        </MenubarContent>
    </MenubarMenu>

    </div>
    

      


   </Menubar>


   {/* //!  Filter icons */}
  <div className="w-full flex items-start justify-between    ">
    {/* 1 */}
   <div className="  justify-start gap-1 lg:gap-3  grid grid-cols-2 lg:grid-cols-4   ">
   <h2 className={`${jost.className} text-white text-xs`}>Popular ffgdhdfilters:</h2>
   
    {/* 1 */}
    <div className="flex items-start justify-start lg:items-center lg:justify-center text-white gap-x-2 ">
      <input className="size-3" type="checkbox"/>
      <p className={`${jost.className} text-xs `}>Free cancelation</p>
    </div>

    {/* 2 */}
    <div className="flex items-start justify-start lg:items-center lg:justify-center  text-white gap-x-2 ">
      <input className="size-3" type="checkbox"/>
      <p className={`${jost.className} text-xs `}>4 stars</p>
    </div>

    {/* 3 */}
    <div className="flex items-start justify-start lg:items-center lg:justify-center text-white gap-x-2 ">
      <input className="size-3" type="checkbox"/>
      <p className={`${jost.className} text-xs `}>5 stars</p>
    </div> 

   </div>


   {/* Buttons_Searching */}
    <Link href="/flights/PK" className="w-32 flex items-center py-2 justify-center h-full text-white  gap-x-2  rounded-sm bg-blue-600">
         <h2 className={`${jost.className} text-sm`}>Search hotels</h2>
         <FaArrowRight />
    </Link>
   </div>


   </div>
 

    </div>
    </div>

    </div>  


        </div>
    )
}


export default CustomSearchBarHotel








