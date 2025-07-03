// 'use client'
import { Jost } from 'next/font/google'
import DepartArray from '@/app/flights/FlightComponents/DepartArray'
import SearchFlights from '@/app/flights/FlightComponents/SearchFlights'
import DepartDetail from '@/app/flights/FlightComponents/DepartDetail'
import { useEffect, useState } from 'react'



const page = async({params}) => {
  const {flights,depart}=await params


  //  const {flightData,setFlightData}=useContext(DataContext)
    //  const {flightData,setFlightData}=useContext(DataContext)
    //    console.log(flightData)
  //   const [data,flightData]=useState([])
  //   useEffect(() => {
  //   const saved = localStorage.getItem("flgightData");
  //   if (saved) {
  //     flightData(JSON.parse(saved));
  //   }
  // }, []);
 
  return (
    <div className='w-full bg-red-600   '>
      
    <SearchFlights />
    <DepartArray flights={flights} depart={depart} />
    <DepartDetail/>
    
    </div>
  )
}

export default page