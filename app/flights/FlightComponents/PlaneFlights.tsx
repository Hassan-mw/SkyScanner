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
import { Jost } from "next/font/google";
import { FaArrowLeft } from "react-icons/fa";
import MainplaneFlightBody from "./MainplaneFlightBody";

 const jost=Jost({
   subsets:['latin'],
   weight:['500']
   
 })



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
        <div className="w-full h-full  lg:max-w-xl  flex flex-col items-center justify-center  max-w-[900px]  ">
          
          
        {/* Top filter show at large */}
        <FinalPageFilter handleShowSidebar={handleShowSidebar} setShowSideBar={setShowSideBar} setShowSideBarSort={setShowSideBarSort}/>

       {/* Plane Prices_FIlter _3*/}
        <div className="w-full flex items-center  justify-center ">
        <div className=" w-full"> <PlaneFilterFlight/></div>  
        </div>


        {/*//!  Main_Body  */}
        <MainplaneFlightBody  filterArray={filterArray}  handleClickSelectFlight={handleClickSelectFlight} /> 


       {/* Show large side bae */}

       {/* Filter */}
        <div className={`${  showSideBar &&  !showSideBarsort && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

        <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBar ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>
         <div  onClick={()=>setShowSideBar(false)} className="text-2xl p-1  hover:cursor-pointer"> 
         <FaArrowLeft />
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
        <div className="w-[250px] hidden xl:block pt-2  ">
        <div className="w-full  flex flex-col    space-y-4 items-center justify-center">
        
         {/* 1 */}
         <div className="w-full flex flex-col items-center justify-center space-y-3 p-3 bg-white rounded-md shadow-lg">
             {/* Image */}
            <div className="flex items-center justify-center space-x-2">
              <Image height={25} width={25} src="/adds_1.svg" alt="adds_1" />    
              <Image height={25} width={25} src="/adds_2.svg" alt="adds_1" />    
              <Image height={25} width={25} src="/adds_3.svg" alt="adds_1" />    
            </div>

            {/* Text */}
            <span style={{fontWeight:600}} className={`${jost.className} text-center tracking-widest text-sm text-[#05203c]`}>Found fights? Now find a hotel</span>
        
            {/* Text */}
            <span style={{fontWeight:200}} className={`${jost.className} text-center text-xs text-[#05203c]`}>Get results from all top hotel sites right here on Skyscnner.</span>
            
            {/* cta */}
            <div className="w-full bg-[#05203c] rounded-md text-sm py-1 flex items-center justify-center text-white">
              Explore hotels

            </div>
         </div>
        

         {/* 2 */}
         <div className="w-full flex flex-col items-start justify-start space-y-2 p-3 bg-white rounded-md shadow-lg">
            {/* 1 */}
            <div className="flex items-center justify-between w-full">
             <span className="text-[9px] bg-[#e0e4e9] px-2 py-1 rounded-xs ">Thu, 19 Jun-Thu, 26 Jun</span>
            <Image height={30} width={30} className=" " src="/skyscanner_white_logo.svg" alt="logo" />
            </div>

            {/* Text */}
            <span style={{fontWeight:600}} className={`${jost.className}  tracking-widest text-sm text-[#05203c]`}>Car hire in Karachi</span>
        
            {/* Text */}
            <span style={{fontWeight:200}} className={`${jost.className}  text-[9px] text-[#05203c]`}>Don't stop at flights - find deals on wheels,too</span>
            
            <div className="w-full bg-[#0062e3] rounded-md flex items-center justify-between">
              {/* Image */}
              <Image height={130} width={130} src="/car_adds_1.svg" alt="car_ads"/>
              {/* text */}
              <div className="flex flex-col  text-white items-end justify-end pr-2">
                  <span className="text-[13px]">Car hire from</span>
                  <span className="text-[9px]">Rs16174 per day</span>
                  <span className="size-7 mt-2 border rounded-sm flex items-center justify-center"><FaArrowRight /></span>
              </div>
            </div>


         </div>

        </div>
        </div>
     
         
         </div>
    )
}

export default PlaneFlights







// car_adds_1