'use client'
import { Jost } from "next/font/google"



import { TbSTurnDown } from "react-icons/tb";
import { useEffect, useState } from "react"
import CustomDatePicker from "../../Components_Custom/CustomDatePicker"
import PlanesearchPlane from "../../Components_Custom/PlaneSearchBarPlace"
import PlanePerson from "../../Components_Custom/PlanePerson"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { DatePicker } from "@/components/ui/DatePicker";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const CustomSearchBarHotel = () => {

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
    <div   className="flex justify-center items-center  min-w-full    ">
    <div className="relative h-[350px] 2xl:h-[550px]  w-full">
    <Image className="hidden 2xl:block object-cover w-[100vw] " fill src="/large_screen_bg_image.webp" alt="large_screen_bg_image" />

    {/* //!    data */}
    <div   className="absolute  h-full   w-full top-0  left-0 flex  items-center justify-center    ">
    <div   className="bg-[#05203c] 2xl:p-6 2xl:rounded-lg flex flex-col items-center justify-center  gap-y-[3px] xl:gap-y-4 w-full px-5 pb-5 max-w-screen-xl  space-y-3 ">
    
    
    {/* //! Header_text */}
    <div className=" w-full flex flex-col items-start   ">
    <h1 style={{fontWeight:700}} className={`${jost.className} pb-12 text-3xl text-white 2xl:hidden `}>Find the right hotel today</h1>
    <div className=" flex items-center justify-start gap-x-3 text-white"> <TbSTurnDown /> <h2 className=" font-semibold text-md  ">Where do you want to stay?</h2> </div >
    </div>


    {/*//!  Form */}
   <Menubar className="w-full bg-[#05203c] h-20  grid grid-cols-6  border-[#05203c]">
      
    {/* Journey Start Place */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full relative h-full bg-white col-span-1  rounded-none rounded-l-md  p-0 ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
               <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> From </span>
                  <span>{startPlace ? startPlace : 'Anywhere'}</span>
              </div>
                <div className="absolute  -right-[22px] top-[14px]   bg-white border-[#05203c] size-10 flex border-[3px] items-center justify-center rounded-full"><FaArrowRightArrowLeft /></div>
            {/* </div> */}
          </MenubarTrigger>
        <MenubarContent >
            {/* Data */}
        <PlanesearchPlane value={startPlace} setValue={setStartPlace}  />
        </MenubarContent>
    </MenubarMenu>


    {/* Journey End Place*/}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  h-full bg-white col-span-1  rounded-none  pl-5  ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
              <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> To </span>
                  <span>{endPlace ? endPlace : 'Anywhere'}</span>
              </div>

           
            {/* </div> */}
          </MenubarTrigger>
        <MenubarContent >
            {/* Data */}
        <PlanesearchPlane value={endPlace} setValue={setEndPlace}  />
        </MenubarContent>
    </MenubarMenu>

    {/* Depart_Date  */}
    <DatePicker place="Depart" date={departDate} setDate={setDepartDate} />
      
    {/*Return_ Date  */}
    <DatePicker  place="Return" date={returnDate} setDate={setReturnDate} />
       
    {/* Person Selection */}
    <MenubarMenu  >
        <MenubarTrigger className="w-full  h-full bg-white col-span-1  rounded-none rounded-r-xl   p-0 ">
            {/* <div className="w-full h-full bg-green-600  relative flex flex-col justify-start   "> */}
              <div className="  flex flex-col items-start py-3 px-4 justify-start   w-full">
                  <span className="text-[#626971] font-semibold text-sm"> Person </span>
                     <div className="text-slate-800 truncate pr-1 max-w-full">
                    <span>{`${totaltraveller} ${Array.isArray(totaltraveller) &&   totaltraveller.length >1  ? 'travellers' : 'traveller'}, ${roomType}`}</span>
                    </div>
              </div>
          </MenubarTrigger>
        <MenubarContent >
   
        <PlanePerson adult={adult} setAdult={setAdult} children={children} setChildren={setChildre} roomType={roomType} setRoomType={setRoomType} />
        </MenubarContent>
    </MenubarMenu>


    

      {/* Buttons_Searching */}
    <Link href="/flights/PK" className="w-full flex items-center justify-center h-full   rounded-xl ">
      <div className="w-full ml-3 max-w-[80%] h-full   2xl:max-w-full rounded-xl  flex items-center justify-center text-white font-semibold bg-blue-600 duration-700 hover:bg-blue-700 ">
         <h2 className={`${jost.className} text-sm`}>Search </h2>
      </div>
    </Link>


   </Menubar>


   {/* //!  Filter icons */}
   <div className="w-full flex items-start justify-start    ">
   <div className="w-full max-w-xl justify-start   grid grid-cols-4  ">
   <h2 className={`${jost.className} text-white text-md`}>Popular filters:</h2>
   
    {/* 1 */}
    <div className="flex items-center justify-center text-white gap-x-2 ">
      <input className="size-[15px]" type="checkbox"/>
      <p className={`${jost.className} text-md `}>Free cancelation</p>
    </div>

    {/* 2 */}
    <div className="flex items-center justify-center  text-white gap-x-2 ">
      <input className="size-[15px]" type="checkbox"/>
      <p className={`${jost.className} text-md `}>4 stars</p>
    </div>

    {/* 3 */}
    <div className="flex items-center justify-center text-white gap-x-2 ">
      <input className="size-[15px]" type="checkbox"/>
      <p className={`${jost.className} text-md `}>5 stars</p>
    </div>

   </div>
   </div>
 

    </div>
    </div>

    </div>  


        </div>
    )
}


export default CustomSearchBarHotel





















// 'use client'
// import { useState } from "react"
// // import PersonPlane from "../(flightpageOptions)/PersonPlane"
// // import Hotelsearchplace from "../(hotelPageoptions)/HotelsearchPlace"
// // import HotelSearchDate from "../(hotelPageoptions)/HotelSearchDate"
// // import HotelSearchRooms from "../(hotelPageoptions)/HotelSearchRooms"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"
// // import CarPickUpSearchDate from "../(carhireOptions)/CarPickUpSearchDate"
// import CustomDatePicker from "./CustomDatePicker"
// import PlanesearchPlane from ".//PlaneSearchBarPlace"
// // import PlanePerson from "../(flightpageOptions)/PlanePerson"
// function CustomSearchBarHotel() {
//     // const [selectPlace,setSelectplace]=useState("")
//     // const [value,setValue]=useState('')
//     // const [pickUpDateSelect, setPickUpDateSelect] = useState();
//     // const [pickOffDateSelect, setPickOffDateSelect] = useState();
//     // const [pickUpTime, setPickUpTime] = useState();
//     // const [pickOffTime, setPickOffTime] = useState();


//     // const [showSideBar,setshowSidebar]=useState(false)
//     // const [crrentForm,setCurrentForm]=useState("")
//     // function handleClick({clickOn}){
//     //     setshowSidebar(true)
//     //      setCurrentForm(clickOn)
//     // }
//     // return (
   
//         const [showSideBar,setshowSidebar]=useState(false)
//         const [crrentForm,setCurrentForm]=useState("")
//         const [startPlace,setStartPlace]=useState('')
//         const [pickUpPlace,setpickUpPlace]=useState('')
//         const [pickOffPlace,setpickOffPlace]=useState('')
//         const [pickUpDate,setPickUpDate] = useState();
//         const [pickOffDate,setPickOffDate] = useState();
       
        
    
//         return (
//             <div   className="flex flex-col   gap-y-[3px] xl:gap-y-4 w-full p-5 max-w-screen-xl hover:cursor-pointer space-y-3 ">
    
//            <div className="text-white font-semibold text-3xl sm:text-4xl ">Find the best car rental deals today</div>
    
         
            
//            <div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-y-0 lg:gap-x-[0.5] gap-y-5  items-center justify-center">
    
//      {/* //!  Journey Start Place */}
//        <Popover >
//         <PopoverTrigger> 
//             <div className="w-full flex flex-col items-center space-y-2 ">
//            <div className="text-xs text-white font-semibold flex items-start w-full">Pick-up Location</div>
//             <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-r-none border w-full">
//                 <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
//             {startPlace ?<span>{startPlace} </span>  :<span className="text-slate-600"> From </span>}
//             </div>
//            </div>
//            </PopoverTrigger>
//         <PopoverContent  > 
//         <PlanesearchPlane value={startPlace} setValue={setStartPlace}  />
        
//         </PopoverContent>
//        </Popover>
//        {/* //! PICK UP */}
//        <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 xl:gap-y-0 xl:gap-x-0 items-center justify-center">
//        {/* //? Pick Up Location*/}
//        <Popover >
//         <PopoverTrigger> 
//             <div className="w-full flex flex-col items-center space-y-2 ">
//            <div className="text-xs text-white font-semibold flex items-start w-full">Pick - Up Location</div>
//             <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border w-full">
//                 <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
//                 {pickUpPlace ?<span>{pickUpPlace} </span>  :<span className="text-slate-600"> pick - up place </span>}
    
//             </div>
//            </div>
//            </PopoverTrigger>
//         <PopoverContent  > 
//         <PlanesearchPlane value={pickUpPlace} setValue={setpickUpPlace}  />
        
//         </PopoverContent>
//        </Popover>
           
//         {/* //? Pick Up Time*/}

//        <Popover >
//                 <PopoverTrigger>
//                 <div className="w-full flex flex-col items-center space-y-2   ">
//                <div className="text-xs text-white font-semibold flex items-start w-full ">Pick - Up Time</div>
//                 <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
//                 <div className="text-slate-800 truncate">
//                 {pickUpDate ?<span>{pickUpDate.toLocaleDateString() }</span>  :<span className="text-slate-600">  pick - up time </span>}
    
//                     {/* {date? date.toLocaleDateString(): 'date'} */}
//                     </div>
              
//                 </div>    
//                 </div>      
//                 </PopoverTrigger>
//             <PopoverContent>
//                 <CustomDatePicker setDateSelect={setPickUpDate} />
       
//             </PopoverContent>
//             </Popover>
           
      
//            </div>
//        {/* //! PICK OFF */}
//        <div className="w-full grid grid-cols-1  sm:grid-cols-2 gap-5 xl:gap-y-0 xl:gap-x-0 items-center justify-center">
//        {/* //? Pick off Date*/}
//        <Popover >
//         <PopoverTrigger> 
//             <div className="w-full flex flex-col items-center space-y-2 ">
//            <div className="text-xs text-white font-semibold flex items-start w-full">Pick - Off Location</div>
//             <div   className="bg-white  sm:p-3 flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border w-full">
//                 <div className="text-sm"><ion-icon name="location-outline"></ion-icon></div>
            
//                 {pickOffPlace ?<span>{pickOffPlace} </span>  :<span className="text-slate-600"> pick - off place </span>}
    
//             </div>
//            </div>
//            </PopoverTrigger>
//         <PopoverContent  > 
//         <PlanesearchPlane value={pickOffPlace} setValue={setpickOffPlace}  />
        
//         </PopoverContent>
//        </Popover>  
//         {/* //? Pick off Time*/}
//        <Popover >
//                 <PopoverTrigger>
//                 <div className="w-full flex flex-col items-center space-y-2   ">
//                <div className="text-xs text-white font-semibold flex items-start w-full ">Pick - Off Time</div>
//                 <div className=" min-w-full flex items-center justify-start p-2 gap-2 rounded-sm lg:rounded-none border bg-white  sm:p-3"><div className="text-sm"><ion-icon name="calendar-outline"></ion-icon></div>
//                 <div className="text-slate-800 truncate">
//                 {pickOffDate ?<span>{pickOffDate.toLocaleDateString() }</span>  :<span className="text-slate-600">  pick - off time </span>}
    
//                     {/* {date? date.toLocaleDateString(): 'date'} */}
//                     </div>
              
//                 </div>    
//                 </div>      
//                 </PopoverTrigger>
//             <PopoverContent>
//                 <CustomDatePicker setDateSelect={setPickOffDate} />
       
//             </PopoverContent>
//             </Popover>
           
      
//            </div>
       
//            </div>
//        {/* //!     SEARCH BUTTON */}
//        <div className="w-full flex items-center justify-between space-x-5">
//         <div className="hidden sm:block w-full  max-w-xl">
//     <div className=" sm:w-full  grid grid-cols-2 lg:grid-cols-4  text-white items-center justify-start ">
//     <div className="flex items-center justify-start  lg:justify-center space-x-1">
      
//       <div className="text-md">Popular filters:</div>
//       </div>
    
//        {/* <div className="grid grid-cols-2 text-sm bg-red-700 w-full">  */}
//         <div className="flex items-center justify-start lg:justify-center space-x-1 ">
//             <div><input type="checkbox"/></div>
//             <div>Free cancelation</div>
//         </div>
//        {/* </div> */}
       
//         <div className="flex items-center justify-start lg:justify-center space-x-1 ">
//             <div><input type="checkbox"/></div>
//             <div>4 stars</div>
//         </div>
      
       
//         <div className="flex items-center justify-start lg:justify-center space-x-1">
//             <div><input type="checkbox"/></div>
//             <div>5 stars</div>
//         </div>
      
      
//     </div>
//     </div>
//             <div className=" rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 p-3 w-full sm:max-w-[200px] flex items-center justify-center sm:justify-end space-x-3"><div className="text-base">
//             <span className="text-3xl sm:text-xl">Search Hotel</span></div>
//             <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
//             </div>
//        </div>
    
//             </div>
//         )
//     }

// export default CustomSearchBarHotel
