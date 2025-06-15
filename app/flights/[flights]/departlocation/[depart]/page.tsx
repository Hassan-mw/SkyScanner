
import { Jost } from 'next/font/google'
import DepartArray from '@/app/flights/FlightComponents/DepartArray'
import SearchFlights from '@/app/flights/FlightComponents/SearchFlights'
import DepartDetail from '@/app/flights/FlightComponents/DepartDetail'



const page = async({params}) => {

  

  return (
    <div className='w-full   '>
    <SearchFlights/>
    <DepartArray/>
    <DepartDetail/>


    </div>
  )
}

export default page