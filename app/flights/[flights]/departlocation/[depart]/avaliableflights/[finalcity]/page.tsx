import PlaneFlights from '@/app/flights/FlightComponents/PlaneFlights'
import React from 'react'

const page = () => {
    const country='p'
const depart='dep'
const finalcity='g'
  return (
    <div className="w-full   px-2 py-8 bg-slate-300   overflow-y-auto">
            
            <div className="w-full h-full flex  items-center justify-center space-y-5  ">
            <div className="w-full h-full ">
             <PlaneFlights country={country} depart={depart} finalcity={finalcity}/>
            </div>
            </div>
        </div>
  )
}

export default page