'use client'

import { useState } from "react"
import PlaneFilterFlight from  "../FlightComponents/AvalivaleFlights/PlaneFilterFlight"
import FinalPageFilter from  "../FlightComponents/AvalivaleFlights/FinalPageFilter"
import SideBarFilter from  "../FlightComponents/AvalivaleFlights/SideBarFilter"
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
        <div className="hidden lg:block min-w-[230px]  "><SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} /> </div>  
        
        {/* //!  Main_body */}
        <div className="w-full h-full  lg:max-w-[650px]  flex flex-col items-center justify-center  max-w-[900px]  ">
          
          
        {/* Top filter show at large */}
        <FinalPageFilter handleShowSidebar={handleShowSidebar} setShowSideBar={setShowSideBar} setShowSideBarSort={setShowSideBarSort}/>

      
         <PlaneFilterFlight/>
       


        {/*//!  Main_Body  */}
         <MainplaneFlightBody  filterArray={filterArray}  handleClickSelectFlight={handleClickSelectFlight} /> 


         {/* Show large side bae */}

     
         <Filter range={range} setRange={setRange}  showSideBar={showSideBar} showSideBarsort={showSideBarsort}  setShowSideBar={setShowSideBar} setCheckStops={setCheckStops}  />
        
          <Sort checkSort={checkSort} setCheckSort={setCheckSort} showSideBarsort={showSideBarsort} showSideBar={showSideBar} setShowSideBarSort={setShowSideBarSort} /> 



        
       
          <ShowFlight showSelectFlight={showSelectFlight} id={id} filterArray={filterArray}  checkAirline={checkAirline} country={country} depart={depart} finalcity={finalcity}  setShowSelectFlight={setShowSelectFlight} />
    </div>


           <Adds/>
         
         </div>
    )
}

export default PlaneFlights







// car_adds_1