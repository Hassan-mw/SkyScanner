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
import Filter from "./Filter";
import Sort from "./Sort";
import Adds from "./Adds";
import ShowFlight from "./ShowFlight";




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
       <Filter range={range} setRange={setRange}  showSideBar={showSideBar} showSideBarsort={showSideBarsort}  setShowSideBar={setShowSideBar} setCheckStops={setCheckStops}  />
     {/* SORT */}
       <Sort checkSort={checkSort} setCheckSort={setCheckSort} showSideBarsort={showSideBarsort} showSideBar={showSideBar} setShowSideBarSort={setShowSideBarSort} /> 



        
        {/* Show flight */}
        <ShowFlight showSelectFlight={showSelectFlight} id={id} filterArray={filterArray}  checkAirline={checkAirline} country={country} depart={depart} finalcity={finalcity}  setShowSelectFlight={setShowSelectFlight} />
         </div>

        {/* Adds */}
         <Adds/>
         
         </div>
    )
}

export default PlaneFlights







// car_adds_1