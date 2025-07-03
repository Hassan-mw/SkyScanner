import { FetchAllPlane, FetchPlaneById } from '@/app/API/PlaneApi'
import AvaliableFlightDataChanger from '@/app/flights/FlightComponents/AvalivaleFlights/AvaliableFlightDataChanger'
import PlaneFlights from '@/app/flights/FlightComponents/PlaneFlights'
import React from 'react'

const page = async({params}) => {
  const {flights,depart,finalcity}=await params
  
  const id=16
  const planeData=await FetchAllPlane()
  // console.log(data)
    const country='p'
// const depart='dep'
// const finalcity='g'
  return (
    <div className="w-full    bg-[#eff3f8] flex flex-col items-center justify-center  ">
         <AvaliableFlightDataChanger/>
      <div className="w-full    max-w-screen-xl flex flex-col items-center justify-center  ">
       {/* Params_changer  */}
          <div className="w-full h-full flex  items-center justify-center space-y-5  ">
            <div className="w-full h-full pb-8 ">
             <PlaneFlights country={flights} depart={depart} finalcity={finalcity}/>
            </div>
            </div>
        </div>
        </div>
  )
}

export default page