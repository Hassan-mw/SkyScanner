import React from 'react'
import ShowSelectedFlightFinal from './AvalivaleFlights/ShowSelectedFlightFinal'

const ShowFlight = ({showSelectFlight,id,filterArray,checkAirline,country,depart,finalcity,setShowSelectFlight}) => {
  return (
    <div className={`${  showSelectFlight  && 'w-full h-full flex items-center justify-center  ' }`}>
        <div className={`w-full   flex flex-col transform transition-transform  fixed bg-[#eff3f8] z-50 ease-in-out duration-500 ${showSelectFlight ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] top-0 left-0` }>
          <ShowSelectedFlightFinal id={id} data={filterArray} checkAirline={checkAirline}  country={country} depart={depart} finalcity={finalcity} setShowSelectFlight={setShowSelectFlight}  /> 
        </div>
   </div>
  )
}

export default ShowFlight