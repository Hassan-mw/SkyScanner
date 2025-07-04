
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
  const startingCountry=fromcountry.replace('%20',' ')
  const endCountry=tocounry.replace('%20',' ')
  const countryData=await fetAllCountry({flights:endCountry})

// 

  return (
    <div className=' w-full bg-green-500  '>
 
    <SearchFlights  />
    <FlightsArray fromcountry={startingCountry} tocounry={endCountry} countryData={countryData.citynames}  />
    <FlightDetails/>

    </div>
  )
}

export default page