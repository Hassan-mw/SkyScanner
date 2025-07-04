import { FetchAllFilterData } from '@/app/API/flightFilterApi'
import { FetchAllPlane, FetchPlaneById } from '@/app/API/PlaneApi'
import AvaliableFlightDataChanger from '@/app/flights/FlightComponents/AvalivaleFlights/AvaliableFlightDataChanger'
import PlaneFlights from '@/app/flights/FlightComponents/PlaneFlights'
import React from 'react'

const page = async({params,searchParams}:{params:{flights:string,depart:String,finalcity:string}}) => {
  const {flights,depart,finalcity}=await params
  const paramsData=await searchParams
  const data=await FetchAllFilterData({paramsData})
  console.log(data,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

  const [fromcountry,tocounry]=flights.split('-')
  const startingCountry=fromcountry.replace('%20',' ')
  const endCountry=tocounry.replace('%20',' ')
  const startingCity=finalcity
  const endingcity=depart

  console.log(startingCity,endCountry,startingCity,endingcity,'++++++++++++_____________++++++++++++++')
  
  

  return (
    <div className="w-full    bg-[#eff3f8] flex flex-col items-center justify-center  ">
         <AvaliableFlightDataChanger/>
      <div className="w-full    max-w-screen-xl flex flex-col items-center justify-center  ">
       {/* Params_changer  */}
          <div className="w-full h-full flex  items-center justify-center space-y-5  ">
            <div className="w-full h-full pb-8 ">
             <PlaneFlights  startingCountry={startingCountry} endCountry={endCountry}  endingcity={endingcity} startingCity={startingCity} />
            </div>
            </div>
        </div>
        </div>
  )
}

export default page