import React from 'react'
import SearchFlights from '../FlightComponents/SearchFlights'
import FlightsArray from '../FlightComponents/FlightsArray'
import FlightDetails from '../FlightComponents/FlightDetails'

const page = () => {
  return (
    <div className=' w-full   '>
    <SearchFlights/>
    <FlightsArray/>
    <FlightDetails/>
    </div>
  )
}

export default page