'use client'
import { Jost } from "next/font/google"
import { IoPerson } from "react-icons/io5";
import { MdTripOrigin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react"
import { MdLocationOn } from "react-icons/md";
import CustomDatePicker from "../../Components_Custom/CustomDatePicker"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { TbSTurnDown } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { FaCalendarAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import CarPickTime from "./CarPickTime";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})
const CarSearchbarSmallScreen = () => {
    const [startPlace,setStartPlace]=useState('')
    const [pickupDate,setPickupDate] = useState<Date>();
    const [pickupTime,setPickupTime] = useState('');
    const [pickoffDate,setPickoffDate] = useState<Date>();
    const [pickoffTime,setPickoffTime] = useState('');

    


    return (
    <div   className="flex flex-col   gap-y-[3px] xl:gap-y-4 w-full p-5 pr-2 max-w-screen-xl hover:cursor-pointer space-y-3 ">

    {/* Text  */}
    <div className=" flex items-center justify-start gap-x-3 text-white">
    <TbSTurnDown />
    <h2 className=" font-semibold text-md  ">Crete a multi-city route</h2>
    </div >

    

    {/* Date */}
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-y-0 lg:gap-x-[0.5] gap-y-[2px]  items-center justify-center">

   {/* //!  Journey Start Place */}
   <Popover >
    <PopoverTrigger> 
    <div className=" w-full flex flex-col items-center  ">
        <div className="bg-white   flex items-center justify-start p-3 gap-2 rounded-t-xl lg:rounded-r-none border w-full">
          <span className="text-xs text-slate-500"><MdTripOrigin /></span>
          {startPlace ?<span>{startPlace} </span>  :<span className="text-black"> Pick-up location </span>}
        </div>
    </div>
       </PopoverTrigger>
    <PopoverContent  > 
     {/* Content */}
    <PlanesearchPlane value={startPlace} setValue={setStartPlace}  />

    </PopoverContent>
   </Popover>

       
    {/* pick_up_date_time*/}
    <div className=" grid grid-cols-2 gap-x-[2px]">

    {/* //! Date */}
    <Popover >
            <PopoverTrigger>
            <div className="w-full flex flex-col items-center space-y-2   ">
              <div className=" min-w-full flex items-center justify-start p-3 gap-2  border bg-white  sm:p-3">
                <div className="text-sm text-gray-500"><FaCalendarAlt /></div>
                <div className="text-black truncate">
                   {pickupDate ?<span>{pickupDate.toLocaleDateString() }</span>  :<span className="text-black"> date </span>}
                </div>
              </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent>
            <CustomDatePicker date={pickupDate}  setDateSelect={setPickupDate} />
        </PopoverContent>
    </Popover>
       
    {/* //! Room Selection */}
   <Popover >
            <PopoverTrigger>
            <div className=" flex flex-col items-center space-y-2 w-full ">
           {/* <div className="text-xs text-white font-semibold flex items-start w-full ">Persons</div> */}
            <div className=" min-w-full flex items-center justify-start gap-2 border bg-white p-3 sm:p-3">
                <div className="text-sm text-gray-400"><GoClockFill /></div>
                 <span>{pickupTime ? pickupTime : '10:00'}</span>
            </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent className=" w-[200px]">
            <CarPickTime time={pickupTime} setTime={setPickupTime}  />
        </PopoverContent>
    </Popover>
    
    </div>


    {/*pick_off_date_time */}
    <div className=" grid grid-cols-2 gap-x-[2px]">

    {/* //! Date */}
    <Popover >
            <PopoverTrigger>
            <div className="w-full flex flex-col items-center space-y-2   ">
           {/* <div className="text-xs text-white font-semibold flex items-start w-full ">Selecy Date</div> */}
            <div className=" min-w-full flex items-center justify-start p-3 gap-2 rounded-bl-xl  lg:rounded-none border bg-white  sm:p-3">
            <div className="text-sm text-gray-500"><FaCalendarAlt /></div>
            <div className="text-black truncate">
                 {pickoffDate ?<span>{pickoffDate.toLocaleDateString() }</span>  :<span className="text-black"> date </span>}
            </div>
          
            </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent>
            <CustomDatePicker date={pickoffDate}  setDateSelect={setPickoffDate} />
        </PopoverContent>
    </Popover>
       
    {/* //! Room Selection */}
   <Popover >
        <PopoverTrigger>
            <div className=" flex flex-col items-center space-y-2 w-full ">
              <div className=" min-w-full flex items-center justify-start gap-2 rounded-br-xl lg:rounded-l-none border bg-white p-3 sm:p-3">
                  <div className="text-sm text-gray-400"><GoClockFill /></div>
                 <span>{pickoffTime ? pickoffTime : '10:00'}</span>
              </div>    
            </div>      
        </PopoverTrigger>
        <PopoverContent className=" w-[200px]">
            <CarPickTime time={pickoffTime} setTime={setPickoffTime}  />
        </PopoverContent>
    </Popover>

    </div>

    </div>



    {/* Buttons_Searching */}
    <div className="w-full flex flex-col space-y-2 items-start justify-center sm:justify-end ">
    <div className=" flex items-center justify-center gap-x-2">
    <input className="size-4 rounded-md" type="checkbox"/><h1 className={`${jost.className} text-white `}>Direct flights</h1></div>
    <div className=" rounded-lg text-white font-semibold bg-blue-600 duration-700 hover:bg-blue-700 p-3 w-full  flex items-center justify-center  space-x-3">
    <h2 className={`${jost.className} text-lg `}>Search </h2>
    </div>
    </div>
    </div>
  
     
    )
}

export default CarSearchbarSmallScreen