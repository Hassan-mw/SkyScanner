

import PlanePlace from "./FlightComponents/PlanePlace"
import FlightSearchBarSmallSceen from "./FlightComponents/FlightSearchBarSmallSceen"
import FightSearchBarLargeScreens from "./FlightComponents/FightSearchBarLargeScreens"
import ShowDetails from "./FlightComponents/ShowDetails"
import MoreDetails from "./FlightComponents/MoreDetails"
import React from 'react'
import { fetchAllFlightData } from "../API/flightApi"

const page = async() => {
    const data=await fetchAllFlightData()
    console.log(data)
  return (
    <div className="w-full  flex flex-col space-y-10 items-center bg-white  ">

    {/*Search_bar  */}
    <div className="bg-[#05203c] flex items-center justify-center w-full">
     <div className="hidden md:block w-full "> <FightSearchBarLargeScreens/></div>
     <div className="md:hidden w-full "> <FlightSearchBarSmallSceen/></div>
    </div>

    {/* Below_Data */}
    <div className="p-3 flex flex-col space-y-16 items-center w-full h-full bg-white max-w-screen-xl ">
 
     <ShowDetails/>

     <PlanePlace />
    
     <MoreDetails/>
     </div>


    </div>
  )
}

export default page