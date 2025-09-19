'use client'
import { Jost } from "next/font/google"
import { TbSTurnDown } from "react-icons/tb";
import { useEffect, useState } from "react"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { DatePicker } from "@/components/ui/DatePicker";
import CarPickTime from "./CarPickTime";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})
const CarSearchbarLargeScreen = () => {
 
    const [startPlace,setStartPlace]=useState('')
   
    const [pickupDate,setPickupDate] = useState<Date>();
    const [pickupTime,setPickupTime] = useState('');
    const [pickoffDate,setPickoffDate] = useState<Date>();
    const [pickoffTime,setPickoffTime] = useState('');

   
    
   


    return (
    <div   className="flex justify-center items-center  min-w-full    ">
    <div className="relative h-[350px] 2xl:h-[550px]  w-full">
    <Image className="hidden 2xl:block object-cover w-[100vw] " fill src="/car.webp" alt="large_screen_bg_image" />


    {/* <div className="w-full grid grid-cols-2 gap-x-8 absolute   bottom-0 ">
   
    
    <div className="w-full rounded-tr-full bg-white cursor-context-menu border-[16px] border-white "> </div>
    <div className="w-full rounded-tl-full bg-white cursor-context-menu border-[16px] border-white "> </div>
   
   </div> */}
    {/* //!    data */}
        <div   className="absolute  h-full   w-full top-0  left-0 flex  items-center justify-center    ">
    <div   className=" bg-[#05203c] lg:bg-transparent 2xl:p-6 2xl:rounded-lg flex flex-col items-center justify-center  gap-y-[3px] xl:gap-y-4 w-full px-2 pb-5 max-w-screen-xl  space-y-3 lg:space-y-1 ">
    
    
       {/* //! Header_text */}
    <div className=" w-full flex  items-start   ">
    <h1 style={{fontWeight:700}} className={`${jost.className}  text-2xl lg:text-4xl text-white  px-3`}>Find the best car rental deals</h1>
    </div>
   
      <div className="w-full bg-[#05203c] p-2 rounded-sm flex flex-col space-y-2">

    {/*//!  Form */}
     <Menubar className="w-full bg-[#05203c]  h-44 lg:h-16  grid grid-cols-1 lg:grid-cols-2 lg:gap-0 border-[#05203c]">
      
    {/* Journey Start Place */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  h-full bg-white col-span-1  rounded-none rounded-t-md lg:rounded-none lg:rounded-l-md  p-0 ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
               <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> Pick-up location </span>
                  <span>{startPlace ? startPlace : 'City,airport or station'}</span>
              </div>
            {/* </div> */}
          </MenubarTrigger>
        <MenubarContent >
            {/* Data */}
        <PlanesearchPlane value={startPlace} setValue={setStartPlace}  />
        </MenubarContent>
    </MenubarMenu>


     <div className=" w-full lg:h-full flex items-center justify-between gap-1 lg:gap-0">
   
    {/* Pick-up_Date  */}
     <div className="w-full bg-white flex rounded-bl-md lg:rounded-none items-center justify-center">  <DatePicker place="Pick-up date" date={pickupDate} setDate={setPickupDate} /></div>
    
    {/* pick_up time */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  h-full bg-white col-span-1  rounded-none p-0 ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
              <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> Time </span>
                     <div className="text-slate-800 truncate pr-1 max-w-full">
                 <span>{pickupTime ? pickupTime : '10:00'}</span>
                    </div>
              </div>
          </MenubarTrigger>
        <MenubarContent >
          <CarPickTime time={pickupTime} setTime={setPickupTime}  />
        </MenubarContent>
    </MenubarMenu>

    
    {/*pick-off_ Date  */}
    <div className="w-full bg-white flex items-center justify-center"><DatePicker  place="Pick-off date" date={pickoffDate} setDate={setPickoffDate} /></div>
       
    
    {/* pick_off time */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  h-full bg-white col-span-1  rounded-none rounded-br-md lg:rounded-none lg:rounded-r-md p-0 ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
              <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> Time </span>
                     <div className="text-slate-800 truncate pr-1 max-w-full">
                 <span>{pickupTime ? pickupTime : '10:00'}</span>
                    </div>
              </div>
          </MenubarTrigger>
        <MenubarContent >
          <CarPickTime time={pickupTime} setTime={setPickupTime}  />
        </MenubarContent>
    </MenubarMenu>

   
   
      <Link href="/flights/PK" className="w-full  h-full hidden lg:block ml-4">
      <div className="w-full h-full   rounded-md  flex items-center justify-center text-white font-semibold bg-blue-600 duration-700 hover:bg-blue-700 ">
         <h2 className={`${jost.className} text-sm`}>Search </h2>
      </div>
    </Link>
    

 </div>
   </Menubar>

   {/* //!  Filter icons */}
   <div className="w-full flex flex-col items-start justify-start lg:p-2 space-y-2 lg:space-y-0  ">
   <div className="w-full max-w-xl justify-start    grid grid-cols-2  ">
   
    {/* 1 */}
    <div className="flex items-center justify-start text-white gap-x-2 ">
      <input className="size-[15px]" type="checkbox"/>
      <p className={`${jost.className} text-sm `}>Driver aged between 25 - 70</p>
    </div>

    {/* 2 */}
    <div className="flex items-center justify-start  text-white gap-x-2 ">
      <input className="size-[15px]" type="checkbox"/>
      <p className={`${jost.className} text-sm `}>Return car to a different location</p>
    </div>

   

   </div>
  
    {/* Buttons_Searching */}
    <Link href="/flights/PK" className="w-full h-11  lg:hidden ">
     <div className="w-full flex items-center justify-center h-full bg-[#0062e3] duration-500 hover:bg-blue-700 text-xl  text-white rounded-md">
     Search
     </div>  
    </Link>
   </div>
 
</div>


    </div>
    </div>

    </div>  


        </div>
    )
}








export default CarSearchbarLargeScreen