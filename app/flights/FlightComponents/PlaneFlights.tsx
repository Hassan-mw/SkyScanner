'use client'

import { useEffect, useState } from "react"
import PlaneFilterFlight from  "../FlightComponents/AvalivaleFlights/PlaneFilterFlight"
import FinalPageFilter from  "../FlightComponents/AvalivaleFlights/FinalPageFilter"
import SideBarFilter from  "../FlightComponents/AvalivaleFlights/SideBarFilter"
import MainplaneFlightBody from "./MainplaneFlightBody";
import Filter from "./Filter";
import Sort from "./Sort";
import Adds from "./Adds";
import ShowFlight from "./ShowFlight";
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"




function PlaneFlights({planeData,endCountry,startingCountry,startingCity,endingcity}) {
 
    const [range,setRange]=useState('1.5')
    const [id,setId]=useState('')
    const [totaltime,setTotaltime]=useState('1')
    const [checkStops,setCheckStops]=useState("All")
    const [checkAirline,setCheckAirline]=useState("All")
    const [cabinBag,setCabinBag]=useState(false)
    const [cabinBagChecked,setCabinBagChecked]=useState(false)
    const [checkSort,setCheckSort]=useState("Best")
    const [showSideBar,setShowSideBar]=useState(false)
    const [showSideBarsort,setShowSideBarSort]=useState(false)
    const [showSelectFlight,setShowSelectFlight]=useState(false)
    // const [data,flightData]=useState([])



    const flightsArray=[
        {id:'1',hours:'12.5',startTime:'21.5',endTime:'6',stop:'direct',airline:"Fly Jinnah"},
        {id:'2',hours:'5',startTime:'5',endTime:'12',stop:'1',airline:"Fly Amrrates"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
        {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
   
    ]

    // useEffect(() => {
    // const saved = localStorage.getItem("flgightData");
    // if (saved) {
    //     flightData(JSON.parse(saved));
    // }
    // }, []);


    const mainData=planeData.filter(el=>el.fromcountry===startingCountry  && el.tocountry===endCountry && el.fromlocation===startingCity && el.tolocation===endingcity )
      console.log(mainData)

    console.log(mainData)

     
    const searchParams=useSearchParams()
    const pathName=usePathname()
    const router=useRouter()
   
  
    useEffect(()=>{
      const params=new URLSearchParams(searchParams)
  
      if(totaltime!=='1')  params.set('totaltime',totaltime); else params.delete('totaltime');
      if(checkStops!=='All')  params.set('journey',checkStops); else params.delete('journey');
      if(checkAirline!=='All')  params.set('planename',checkAirline); else params.delete('planename');
      if(cabinBag!==false)  params.set('cabinbag',cabinBag); else params.delete('cabinbag');
      if(cabinBagChecked!==false)  params.set('checkedbag',cabinBagChecked); else params.delete('checkedbag');
    
      router.replace(`${pathName}?${params.toString()}`,{scroll:false})
  
    },[totaltime,checkStops,checkAirline,cabinBag,cabinBagChecked])
  


const filterArray=flightsArray

  function handleClickSelectFlight(data:string,id:string){
   setShowSelectFlight(true)
    setCheckAirline(data)
    setId(id)
 
  }


 
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
        <div className="hidden lg:block min-w-[230px]  "><SideBarFilter cabinBag={cabinBag}  setCabinBag={setCabinBag} cabinBagChecked={cabinBagChecked} setCabinBagChecked={setCabinBagChecked}  checkAirline={checkAirline} setCheckAirline={setCheckAirline} checkStops={checkStops} totaltime={totaltime} setTotaltime={setTotaltime} range={range} setRange={setRange}  setCheckStops={setCheckStops} /> </div>  
        
        {/* //!  Main_body */}
        <div className="w-full h-full  lg:max-w-[650px]  flex flex-col items-center justify-center  max-w-[900px]  ">
          
          
        {/* Top filter show at large */}
        <FinalPageFilter handleShowSidebar={handleShowSidebar} setShowSideBar={setShowSideBar} setShowSideBarSort={setShowSideBarSort}/>

        {
          mainData.length>0 ? 
       <>
         <PlaneFilterFlight/>
        


        {/*//!  Main_Body  */}
         <MainplaneFlightBody  data={mainData}  handleClickSelectFlight={handleClickSelectFlight} /> 
           </>
     :
         <div className='w-full flex items-center justify-center min-h-[200px]'>
             <h1>Sorry,there are't any flights that match your <strong>filters</strong>.</h1>
          </div>
        }
         {/* Show large side bae */}

     
         <Filter range={range} setRange={setRange}   showSideBar={showSideBar} showSideBarsort={showSideBarsort}  setShowSideBar={setShowSideBar} setCheckStops={setCheckStops}  />
        
          <Sort checkSort={checkSort} setCheckSort={setCheckSort} showSideBarsort={showSideBarsort} showSideBar={showSideBar} setShowSideBarSort={setShowSideBarSort} /> 



        
       
          {/* <ShowFlight showSelectFlight={showSelectFlight} id={id} filterArray={filterArray}  checkAirline={checkAirline} country={country} depart={depart} finalcity={finalcity}  setShowSelectFlight={setShowSelectFlight} /> */}
    </div>


           <Adds/>
         
         </div>
    )
}

export default PlaneFlights







// car_adds_1