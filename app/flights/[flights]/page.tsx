'use client'
import React, { useContext, useEffect, useState } from 'react'
import SearchFlights from '../FlightComponents/SearchFlights'
import FlightsArray from '../FlightComponents/FlightsArray'
import FlightDetails from '../FlightComponents/FlightDetails'
import { DataContext } from '@/app/ContextApi/ContextApi'

const page = () => {
  //  const {flightData,setFlightData}=useContext(DataContext)
  //    console.log(flightData)
  const [data,flightData]=useState([])
  useEffect(() => {
  const saved = localStorage.getItem("flgightData");
  if (saved) {
    flightData(JSON.parse(saved));
  }
}, []);

console.log(data,'++++++++++++++++++++++++++++++')
  return (
    <div className=' w-full bg-green-500  '>
      {data.length>0 ? <>
    <SearchFlights data={data} />
    <FlightsArray data={data} />
    <FlightDetails/>
      </>
    :
    <p>No data</p>
  }
    </div>
  )
}

export default page