'use client'
import { useState } from "react"
// import PersonPlane from "../(flightpageOptions)/PersonPlane"
// import Hotelsearchplace from "../(hotelPageoptions)/HotelsearchPlace"
// import HotelSearchDate from "../(hotelPageoptions)/HotelSearchDate"
// import HotelSearchRooms from "../(hotelPageoptions)/HotelSearchRooms"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
// import CarPickUpSearchDate from "../(carhireOptions)/CarPickUpSearchDate"
import CustomDatePicker from "./CustomDatePicker"
import PlanesearchPlane from ".//PlaneSearchBarPlace"
// import PlanePerson from "../(flightpageOptions)/PlanePerson"
function CustomSearchBarHotel() {
    // const [selectPlace,setSelectplace]=useState("")
    // const [value,setValue]=useState('')
    // const [pickUpDateSelect, setPickUpDateSelect] = useState();
    // const [pickOffDateSelect, setPickOffDateSelect] = useState();
    // const [pickUpTime, setPickUpTime] = useState();
    // const [pickOffTime, setPickOffTime] = useState();


    // const [showSideBar,setshowSidebar]=useState(false)
    // const [crrentForm,setCurrentForm]=useState("")
    // function handleClick({clickOn}){
    //     setshowSidebar(true)
    //      setCurrentForm(clickOn)
    // }
    // return (
   
        const [showSideBar,setshowSidebar]=useState(false)
        const [crrentForm,setCurrentForm]=useState("")
        const [startPlace,setStartPlace]=useState('')
        const [pickUpPlace,setpickUpPlace]=useState('')
        const [pickOffPlace,setpickOffPlace]=useState('')
        const [pickUpDate,setPickUpDate] = useState();
        const [pickOffDate,setPickOffDate] = useState();
       
        
    
        return (
            <div   className="flex flex-col   gap-y-[3px] xl:gap-y-4 w-full p-5 max-w-screen-xl hover:cursor-pointer space-y-3 ">
    
           <div className="text-white font-semibold text-3xl sm:text-4xl ">Find the best car rental deals today</div>
    
         
            
           <div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-y-0 lg:gap-x-[0.5] gap-y-5  items-center justify-center">
    
     {/* //!  Journey Start Place */}
       <Popover >
        <PopoverTrigger> 
            <div className="w-full flex flex-col items-center space-y-2 ">
           <div className="text-xs text-white font-semibold flex items-start w-full">Pick-up Location</div>
            <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-r-none border w-full">
                <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
            {startPlace ?<span>{startPlace} </span>  :<span className="text-slate-600"> From </span>}
            </div>
           </div>
           </PopoverTrigger>
        <PopoverContent  > 
        <PlanesearchPlane value={startPlace} setValue={setStartPlace}  />
        
        </PopoverContent>
       </Popover>
       {/* //! PICK UP */}
       <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 xl:gap-y-0 xl:gap-x-0 items-center justify-center">
       {/* //? Pick Up Location*/}
       <Popover >
        <PopoverTrigger> 
            <div className="w-full flex flex-col items-center space-y-2 ">
           <div className="text-xs text-white font-semibold flex items-start w-full">Pick - Up Location</div>
            <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border w-full">
                <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
                {pickUpPlace ?<span>{pickUpPlace} </span>  :<span className="text-slate-600"> pick - up place </span>}
    
            </div>
           </div>
           </PopoverTrigger>
        <PopoverContent  > 
        <PlanesearchPlane value={pickUpPlace} setValue={setpickUpPlace}  />
        
        </PopoverContent>
       </Popover>
           
        {/* //? Pick Up Time*/}

       <Popover >
                <PopoverTrigger>
                <div className="w-full flex flex-col items-center space-y-2   ">
               <div className="text-xs text-white font-semibold flex items-start w-full ">Pick - Up Time</div>
                <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
                <div className="text-slate-800 truncate">
                {pickUpDate ?<span>{pickUpDate.toLocaleDateString() }</span>  :<span className="text-slate-600">  pick - up time </span>}
    
                    {/* {date? date.toLocaleDateString(): 'date'} */}
                    </div>
              
                </div>    
                </div>      
                </PopoverTrigger>
            <PopoverContent>
                <CustomDatePicker setDateSelect={setPickUpDate} />
       
            </PopoverContent>
            </Popover>
           
      
           </div>
       {/* //! PICK OFF */}
       <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 xl:gap-y-0 xl:gap-x-0 items-center justify-center">
       {/* //? Pick off Date*/}
       <Popover >
        <PopoverTrigger> 
            <div className="w-full flex flex-col items-center space-y-2 ">
           <div className="text-xs text-white font-semibold flex items-start w-full">Pick - Off Location</div>
            <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border w-full">
                <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
                {pickOffPlace ?<span>{pickOffPlace} </span>  :<span className="text-slate-600"> pick - off place </span>}
    
            </div>
           </div>
           </PopoverTrigger>
        <PopoverContent  > 
        <PlanesearchPlane value={pickOffPlace} setValue={setpickOffPlace}  />
        
        </PopoverContent>
       </Popover>  
        {/* //? Pick off Time*/}
       <Popover >
                <PopoverTrigger>
                <div className="w-full flex flex-col items-center space-y-2   ">
               <div className="text-xs text-white font-semibold flex items-start w-full ">Pick - Off Time</div>
                <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
                <div className="text-slate-800 truncate">
                {pickOffDate ?<span>{pickOffDate.toLocaleDateString() }</span>  :<span className="text-slate-600">  pick - off time </span>}
    
                    {/* {date? date.toLocaleDateString(): 'date'} */}
                    </div>
              
                </div>    
                </div>      
                </PopoverTrigger>
            <PopoverContent>
                <CustomDatePicker setDateSelect={setPickOffDate} />
       
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
