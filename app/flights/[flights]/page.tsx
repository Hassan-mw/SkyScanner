
import React, { useContext, useEffect, useState } from 'react'
import SearchFlights from '../FlightComponents/SearchFlights'
import FlightsArray from '../FlightComponents/FlightsArray'
import FlightDetails from '../FlightComponents/FlightDetails'
import { DataContext } from '@/app/ContextApi/ContextApi'
import { fetAllCountry } from '@/app/API/countryApi'

const page = async({params}) => {
  const {flights}=await params
  // const {citynames}=countryData.data
  console.log(flights)
  const [fromcountry,tocounry]=flights.split('-')
  const countryData=await fetAllCountry({flights:fromcountry})
  //  const {flightData,setFlightData}=useContext(DataContext)
     console.log(fromcountry,tocounry)

// 

  return (
    <div className=' w-full bg-green-500  '>
 
    <SearchFlights  />
    <FlightsArray fromcountry={fromcountry} tocounry countryData={countryData}  />
    <FlightDetails/>

    </div>
  )
}

export default page