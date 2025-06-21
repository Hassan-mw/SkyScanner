'use client'

import { useState } from "react"
import PersonPlane from "../(flightpageOptions)/PersonPlane"
import Hotelsearchplace from "../(hotelPageoptions)/HotelsearchPlace"
import HotelSearchDate from "../(hotelPageoptions)/HotelSearchDate"
import HotelSearchRooms from "../(hotelPageoptions)/HotelSearchRooms"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import CarPickUpSearchDate from "../(carhireOptions)/CarPickUpSearchDate"
import CustomDatePicker from "./CustomDatePicker"
function CustomSearchBarHotel() {
    const [showSideBar,setshowSidebar]=useState(false)
    const [crrentForm,setCurrentForm]=useState("")
    const [value,setValue]=useState('')
    const [checkInDate,setCheckInDate] = useState();
    const [checkOutDate,setCheckOutDate] = useState();
    const [room,setRoom]=useState({adult:2,child:0,rooms:1})
    console.log(room)
    function handleClick({clickOn}){
        setshowSidebar(true)
         setCurrentForm(clickOn)
    }
    return (
        <div   className="flex flex-col   gap-y-[3px] xl:gap-y-4 w-full p-5 max-w-screen-xl hover:cursor-pointer space-y-3 ">
       <div className="text-white font-semibold text-3xl sm:text-4xl ">Find the right hotel today</div>

     
        
       <div className="w-full grid grid-cols-1 xl:grid-cols-2 xl:gap-y-0 lg:gap-x-[0.5] gap-y-5  items-center justify-center">

 {/* //!   Hotel selecting */}
   <Popover >
    <PopoverTrigger> 
        <div className="w-full flex flex-col items-center space-y-2 ">
       <div className="text-xs text-white font-semibold flex items-start w-full">Where do you want to stay?</div>
        <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-r-none border w-full">
            <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
        
        {value.length>0  ? value :'Enter destionation or hotel name' }
        </div>
       </div>
       </PopoverTrigger>
    <PopoverContent  > 
    <Hotelsearchplace value={value} setValue={setValue}  />
    
    </PopoverContent>
   </Popover>
   <div className="w-full grid grid-cols-1  sm:grid-cols-3 gap-5 xl:gap-y-0 xl:gap-x-0 items-center justify-center">
   {/* //! CheckIn Date */}
   <Popover >
            <PopoverTrigger>
            <div className="w-full flex flex-col items-center space-y-2   ">
           <div className="text-xs text-white font-semibold flex items-start w-full ">Check-In Date</div>
            <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
            <div className="text-slate-800 truncate">{checkInDate? checkInDate.toLocaleDateString(): 'Check-In Date'}</div>
            </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent>
            <CustomDatePicker setDateSelect={setCheckInDate} />
      
        </PopoverContent>
        </Popover>
       
   {/* //! Check Out Date */}
   <Popover >
            <PopoverTrigger>
            <div className="w-full flex flex-col items-center space-y-2   ">
           <div className="text-xs text-white font-semibold flex items-start w-full ">Check-Out Date</div>
            <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
            <div className="text-slate-800 truncate">{checkOutDate? checkOutDate.toLocaleDateString(): 'Check-Out Date'}</div>
            </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent>
            <CustomDatePicker setDateSelect={setCheckOutDate} />
   
        </PopoverContent>
        </Popover>
       
     {/* //! Room Selection */}
   <Popover >
            <PopoverTrigger>
            <div className="flex flex-col items-center space-y-2 w-full ">
           <div className="text-xs text-white font-semibold flex items-start w-full ">Cuest and room</div>
            <div className=" min-w-full flex items-center justify-start gap-2 rounded-sm lg:rounded-l-none border bg-white p-2 sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
            <div className="text-slate-800 truncate">{`${room.adult} adults, ${room.rooms} rooms`}</div>
            </div>    
            </div>      
            </PopoverTrigger>
        <PopoverContent>
        <HotelSearchRooms room={room} setRoom={setRoom}/>
        </PopoverContent>
        </Popover>
       </div>
       </div>
   {/* //!     SEARCH BUTTON */}
   <div className="w-full flex items-center justify-between space-x-5">
    <div className="hidden sm:block w-full  max-w-xl">
<div className=" sm:w-full  grid grid-cols-2 lg:grid-cols-4  text-white items-center justify-start ">
<div className="flex items-center justify-start  lg:justify-center space-x-1">
  
  <div className="text-md">Popular filters:</div>
  </div>

   {/* <div className="grid grid-cols-2 text-sm bg-red-700 w-full">  */}
    <div className="flex items-center justify-start lg:justify-center space-x-1 ">
        <div><input type="checkbox"/></div>
        <div>Free cancelation</div>
    </div>
   {/* </div> */}
   
    <div className="flex items-center justify-start lg:justify-center space-x-1 ">
        <div><input type="checkbox"/></div>
        <div>4 stars</div>
    </div>
  
   
    <div className="flex items-center justify-start lg:justify-center space-x-1">
        <div><input type="checkbox"/></div>
        <div>5 stars</div>
    </div>
  
  
</div>
</div>
        <div className=" rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 p-3 w-full sm:max-w-[200px] flex items-center justify-center sm:justify-end space-x-3"><div className="text-base">
        <span className="text-3xl sm:text-xl">Search Hotel</span></div>
        <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
        </div>
   </div>

        </div>
    )
}

export default CustomSearchBarHotel
