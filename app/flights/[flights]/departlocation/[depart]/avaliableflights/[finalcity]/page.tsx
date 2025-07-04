import { FetchAllFilterData } from '@/app/API/flightFilterApi'
import { FetchAllPlane, FetchPlaneById } from '@/app/API/PlaneApi'
import AvaliableFlightDataChanger from '@/app/flights/FlightComponents/AvalivaleFlights/AvaliableFlightDataChanger'
import PlaneFlights from '@/app/flights/FlightComponents/PlaneFlights'
import React from 'react'

const page = async({params,searchParams}:{params:{flights:string,depart:String,finalcity:string},searchParams:URLSearchParams}) => {
  const {flights,depart,finalcity}=await params
  const paramsData=await searchParams
  const planeData=await FetchAllFilterData({paramsData})
  

  const [fromcountry,tocounry]=flights.split('-')
  const startingCountry=fromcountry.replace('%20',' ')
  const endCountry=tocounry.replace('%20',' ')
  const startingCity=finalcity
  const endingcity=depart

  
  
  

  return (
    <div className="w-full  min-h-[80vh]  bg-[#eff3f8] flex flex-col items-center justify-start  ">
         <AvaliableFlightDataChanger/>
      <div className="w-full    max-w-screen-xl flex flex-col items-center justify-center  ">
       {/* Params_changer  */}
          <div className="w-full h-full flex  items-center justify-center space-y-5  ">
            <div className="w-full h-full py-8 ">
             <PlaneFlights  planeData={planeData} startingCountry={startingCountry} endCountry={endCountry}  endingcity={endingcity} startingCity={startingCity} />
            </div>
            </div>
        </div>
        </div>
  )
}

export default page