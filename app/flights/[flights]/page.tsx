import React from 'react'
import SearchFlights from '../FlightComponents/SearchFlights'
import FlightsArray from '../FlightComponents/FlightsArray'

const page = () => {
  return (
    <div className=' w-full   '>
    <SearchFlights/>
    <FlightsArray/>
    </div>
  )
}

export default page