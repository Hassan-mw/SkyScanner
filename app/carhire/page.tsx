
import FastFactMainHotel from "./CarComponent/FastFactMainHotel"
import CarSearchbarLargeScreen from "./CarComponent/CarSearchbarLargeScreen"
import CarSearchbarSmallScreen from "./CarComponent/CarSearchbarSmallScreen"
import ShowCurrentPageHotel from "./CarComponent/ShowCurrentPageHotels"
import CarRentalDestination from "./CarComponent/CarRentalDestination"
import CarRentalByCity from "./CarComponent/CarRentalByCity"


import React from 'react'
import { fetchAllCarHire } from "../API/carhireApi"

const page = async() => {
  const data=await fetchAllCarHire();
  console.log(data)
  return (
     
  <div className="w-full  flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
    
    {/*Search_bar  */}
    <div className="bg-[#05203c] flex items-center justify-center w-full">
       <div className="hidden md:block w-full "> <CarSearchbarLargeScreen/></div>
       <div className="md:hidden w-full "> <CarSearchbarSmallScreen/></div>
    </div>


    <div className="flex flex-col items-center justify-center space-y-16 w-full p-6   max-w-screen-xl">
      <ShowCurrentPageHotel/>
      <CarRentalDestination/>

      <CarRentalByCity/>
      <FastFactMainHotel/>

      </div>
      
      </div>
  )
}

export default page