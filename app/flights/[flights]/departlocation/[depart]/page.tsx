// 'use client'
import { Jost } from 'next/font/google'
import DepartArray from '@/app/flights/FlightComponents/DepartArray'
import SearchFlights from '@/app/flights/FlightComponents/SearchFlights'
import DepartDetail from '@/app/flights/FlightComponents/DepartDetail'
import { useEffect, useState } from 'react'
import { fetAllCountry } from '@/app/API/countryApi'



const page = async({params}) => {
  const {flights,depart}=await params



  const [fromcountry,tocounry]=flights.split('-')
  const startingCountry=fromcountry.replace('%20',' ')
  const endCountry=tocounry.replace('%20',' ')
  const countryData=await fetAllCountry({flights:startingCountry})
  console.log(countryData,'+++++++++++')


 
  return (
    <div className='w-full bg-red-600   '>
      
    <SearchFlights />
    <DepartArray flights={flights} depart={depart} countryData={countryData.citynames}  />
    <DepartDetail/>
    
    </div>
  )
}

export default page