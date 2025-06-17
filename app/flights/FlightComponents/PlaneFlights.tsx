'use client'

import { useState } from "react"
import { IoMdAirplane } from "react-icons/io";
import PlaneFilterFlight from  "../FlightComponents/AvalivaleFlights/PlaneFilterFlight"
import FinalPageFilter from  "../FlightComponents/AvalivaleFlights/FinalPageFilter"
import SideBarFilter from  "../FlightComponents/AvalivaleFlights/SideBarFilter"
import SideBarSort from  "../FlightComponents/AvalivaleFlights/SideBarSort"
import ShowSelectedFlightFinal from  "../FlightComponents/AvalivaleFlights/ShowSelectedFlightFinal"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import imageF from "./../../public/adds_1.svg"



function PlaneFlights({country,depart,finalcity}) {
 
    const [range,setRange]=useState('1.5')
    const [id,setId]=useState('')
    const [checkStops,setCheckStops]=useState("")
    const [checkAirline,setCheckAirline]=useState("")
    const [checkSort,setCheckSort]=useState("Best")
    const [showSideBar,setShowSideBar]=useState(false)
    const [showSideBarsort,setShowSideBarSort]=useState(false)
    const [showSelectFlight,setShowSelectFlight]=useState(false)
    const flightsArray=[
        {id:'1',hours:'12.5',startTime:'21.5',endTime:'6',stop:'direct',airline:"Fly Jinnah"},
        {id:'2',hours:'5',startTime:'5',endTime:'12',stop:'1',airline:"Fly Amrrates"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
   
    ]
// console.log(checkStops)

const filterArray=flightsArray

  function handleClickSelectFlight(data:string,id:string){
   setShowSelectFlight(true)
    setCheckAirline(data)
    setId(id)
 
  }
  //   handle side bars function
 function handleShowSidebar(data:string){

  if(data==="Filter"){
    setShowSideBar(true)
    setShowSideBarSort(false)
   
   }else{
    setShowSideBar(false)
    setShowSideBarSort(true)
   
  }
  
  }
    return (
        <div className="w-full flex  min-h-full lg:flex items-center justify-center lg:items-start lg:justify-start  lg:space-x-3 bg-[#eff3f8] ">
       
        {/* Show sidebar at alarge */}
        <div className="hidden lg:block min-w-[230px] b "><SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} /> </div>  
        
        {/* //!  Main_body */}
        <div className="w-full h-full  lg:max-w-xl  flex flex-col items-center justify-center  max-w-[900px] bg-blue-300 ">
          
          
        {/* Top filter show at large */}
        <FinalPageFilter handleShowSidebar={handleShowSidebar} setShowSideBar={setShowSideBar} setShowSideBarSort={setShowSideBarSort}/>

       {/* Plane Prices_FIlter _3*/}
        <div className="w-full flex items-center  justify-center ">
        <div className=" w-full"> <PlaneFilterFlight/></div>  
        </div>


        {/*//!  Main_Body  */}
        <div className="w-full h-full grid grid-cols-1 gap-3 p-3 ">
        {filterArray.map((data,index)=>

        <div key={index} className=" w-full  p-2  bg-white  shadow-lg rounded-2xl flex items-center justify-center space-x-4 border ">

        <div className="w-full grid grid-cols-1 sm:grid-cols-3   items-center justify-center space-y-1  ">
       
        {/* Plane_Deport_Return */}
        <div className="w-full pl-2 max-w-[80%]  flex flex-col  sm:col-span-2 items-center justify-center space-y-1 md:space-y-0 md:space-x-2  ">
          
          {/* 1 */}
          <div className="w-full  flex items-center justify-between   gap-x-12    ">
              <div><Image height={90} width={90}  className=" " src="/pia.png" alt="pia-logo"/></div>
              <div className="w-full flex  items-center justify-center space-x-3">
                
                {/* Plane_start */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.startTime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

                {/* Middle_body */}
                <div className="w-full flex flex-col items-center ">
                    <span className="text-xs">{data.hours} hours</span>
                    {/* middle */}
                    <div className="w-full flex items-center justify-center space-x-4 ">
                        <span className="border-t-2  w-full border-slate-400"></span>
                        <span className="rotate-90"><IoMdAirplane /></span>
                    </div>
                    {/* Stops */}
                    <span className="text-xs">{data.stop}</span> 
                </div>

                {/* Plane_End */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.endTime}:00</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

              </div>

          </div>
          
          {/* 2 */}
          <div className="w-full flex  items-center justify-between border-b pb-2 border-slate-300 sm:border-none gap-x-12   ">
              <div><Image height={90} width={90}  className=" " src="/pia.png" alt="pia-logo"/></div>
              <div className="w-full flex  items-center justify-center space-x-3">
                
                {/* Plane_start */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.startTime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

                {/* Middle_body */}
                <div className="w-full flex flex-col items-center ">
                    <span className="text-xs">{data.hours} hours</span>
                    {/* middle */}
                    <div className="w-full flex items-center justify-center space-x-4 ">
                        <span className="border-t-2  w-full border-slate-400"></span>
                        <span className="rotate-90"><IoMdAirplane /></span>
                    </div>
                    {/* Stops */}
                    <span className="text-xs">{data.stop}</span> 
                </div>

                {/* Plane_End */}
                <div className="flex flex-col items-start justify-center space-y-1">  
                    <span className="font-semibold">{data.endTime}:00</span>
                    <span className="text-slate-400 text-xs">UET</span>
                </div>

              </div>

          </div>
        </div>
          
        {/* Plane_Price_Data */}
          <div className="w-full  sm:col-span-1    flex items-end justify-end sm:items-center sm:justify-center  sm:border-l border-[#e5e5e5]  py-2 ">
          {/*Pricing_btton  */}
          <div className="flex sm:flex-col items-center justify-center gap-2">
        
          {/* price */}
          <div className="flex flex-col items-end">
          <p className="text-[10px] text-slate-500">1 deal</p>
          <span className="text-xl ">Rs 63,500</span>
          <p className="text-[10px] text-slate-500">Rs 1,424 total</p>
          </div>
         
          {/* cta */}
          <div onClick={()=>handleClickSelectFlight(data.airline,data.id)} className="px-3  py-1 gap-x-2 flex items-center justify-center bg-[#05203c] text-white rounded-md  hover:cursor-pointer  ">
          <span  className=" ">Select</span>
          <FaArrowRight />
          </div>

          </div>

          </div>

        </div>
               {/* <div>🖤</div> */}
          </div>
            )}
            
           
          
                 </div>


{/* Show large side bae */}

{/* Filter */}
 <div className={`${  showSideBar &&  !showSideBarsort && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBar ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>

<div  onClick={()=>setShowSideBar(false)} className="text-2xl p-1  hover:cursor-pointer"> 
    {/* <ion-icon name="arrow-back-outline"></ion-icon>  */}
    </div>
<SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} />
        </div>
     </div>
     {/* SORT */}
 <div className={`${  showSideBarsort && !showSideBar  && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBarsort ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>

<div  onClick={()=>setShowSideBarSort(false)} className="text-2xl p-1  hover:cursor-pointer">
     {/* <ion-icon name="arrow-back-outline"></ion-icon>  */}
     </div>
<SideBarSort checkSort={checkSort}  setCheckSort={setCheckSort} />
        </div>
     </div>



        
        {/* Show flight */}
<div className={`${  showSelectFlight  && 'w-full h-full flex items-center justify-center bg-white ' }`}>
<div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSelectFlight ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] top-0 left-0` }>

                 <ShowSelectedFlightFinal id={id} data={filterArray} checkAirline={checkAirline}  country={country} depart={depart} finalcity={finalcity} setShowSelectFlight={setShowSelectFlight}  /> 
                 </div>
        </div>
         </div>

        {/* Adds */}
        <div className="w-[300px] hidden xl:block bg-green-400  ">
        <div className="w-full bg-red-400 flex flex-col    space-y-4 items-center justify-center">
         {/* 1 */}
         <div className="w-full flex flex-col items-center justify-center space-y-3 p-3 bg-white rounded-md shadow-lg">
             {/* Image */}
            <div className="flex items-center justify-center space-x-1">
            <Image height={70} width={70} src="/karachi.jpg" alt="adds_1" />    
            <Image height={70} width={70} src="/adds_2.svg" alt="adds_1" />    
            <Image height={70} width={70} src="/adds_3.svg" alt="adds_1" />    
             </div>
        </div>

        </div>
        </div>
     
         
         </div>
    )
}

export default PlaneFlights







// car_adds_1