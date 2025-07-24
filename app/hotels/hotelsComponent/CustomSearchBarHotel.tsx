'use client'

import {  useState } from "react"
import Image from "next/image"
import { Jost } from "next/font/google"
import { FaArrowRight } from "react-icons/fa6"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar"

import CustomDatePicker from "../../Components_Custom/CustomDatePicker"
import Hotelsearchplace from "./HotelsearchPlace"
import RoomPerson from "./RoomPerson"
import { fetchAllHotelsData } from "@/app/API/hotels"
import { redirect } from "next/navigation"

const jost = Jost({
  weight: ['400'],
  subsets: ['latin']
})

const CustomSearchBarHotel = ({params}:{params:URLSearchParams}) => {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [person, setPerson] = useState(2)
  const [room, setRoom] = useState(1)

  const searchHotelsHandle = async () => {
    const startDate = checkInDate?.toDateString() || '15/07/25'
    const endDate = returnDate?.toDateString() || '18/07/25'
    const data = await fetchAllHotelsData({ paramsData:params,country,city})
    if (data.length > 0) {
      redirect(`/hotels/${country}/${city}?abc='af'`)
    }
    else
    {
      alert(`No hotels found with country ${country} and city ${city}`)
    }
  }

  return (
    <div className="flex justify-center items-center min-w-full bg-[#05203c]">
      <div className="relative h-[300px] 2xl:h-[450px] w-full">
        <Image
          className="hidden 2xl:block object-cover w-[100vw]"
          fill
          src="/hotel_main_image.webp"
          alt="large_screen_bg_image"
        />

        {/* Data */}
        <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-[#05203c] lg:bg-transparent 2xl:p-6 2xl:rounded-lg flex flex-col items-center justify-center gap-y-[3px] xl:gap-y-4 w-full px-2 pb-5 max-w-screen-xl space-y-3 lg:space-y-1">
            
            {/* Header Text */}
            <div className="w-full flex items-start">
              <h1 style={{ fontWeight: 700 }} className={`${jost.className} text-2xl lg:text-4xl text-white px-3`}>
                Find the right hotel today
              </h1>
            </div>

            {/* Form */}
            <div className="w-full bg-[#05203c] p-2 rounded-sm flex flex-col space-y-2">
              <Menubar className="w-full bg-[#05203c] h-32 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 border-[#05203c]">

                {/* Hotel Name */}
                <MenubarMenu>
                  <MenubarTrigger className="w-full flex flex-col space-y-1 items-start justify-start rounded-md p-0">
                    <span className="text-[9px] text-white">Where do you want to stay?</span>
                    <div className="bg-white p-2 rounded-md md:rounded-r-none md:rounded-l-md w-full ">
                      <span  className="w-full text-sm placeholder:text-gray-400 focus:outline-none flex items-start" >{city || "Enter the destination or hotel name"}</span>
                    </div> 
                  </MenubarTrigger>
                  <MenubarContent>
                    <Hotelsearchplace value={city} setValue={setCity} country={country} setCountry={setCountry} />
                  </MenubarContent>
                </MenubarMenu>

                {/* Dates and Guests */}
                <div className="w-full flex items-center justify-between gap-2 md:gap-0">

                  {/* Check-in Date */}
                  <MenubarMenu>
                    <MenubarTrigger className="w-1/2 flex flex-col space-y-1 items-start justify-start rounded-md p-0">
                      <div className="text-[9px] text-white">Check-in</div>
                      <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm md:rounded-none border-r">
                        <span className={`${jost.className} text-slate-800 truncate text-sm`}>
                          {checkInDate ? checkInDate.toLocaleDateString() : '15/07/25'}
                        </span>
                      </div>
                    </MenubarTrigger>
                    <MenubarContent>
                      <CustomDatePicker date={checkInDate} setDateSelect={setCheckInDate} />
                    </MenubarContent>
                  </MenubarMenu>

                  {/* Check-out Date */}
                  <MenubarMenu>
                    <MenubarTrigger className="w-1/2 flex flex-col space-y-1 items-start justify-start rounded-md p-0">
                      <div className="text-[9px] text-white">Check-out</div>
                      <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm md:rounded-none border-r">
                        <span className={`${jost.className} text-slate-800 truncate text-sm`}>
                          {returnDate ? returnDate.toLocaleDateString() : '18/07/25'}
                        </span>
                      </div>
                    </MenubarTrigger>
                    <MenubarContent>
                      <CustomDatePicker date={returnDate} setDateSelect={setReturnDate} />
                    </MenubarContent>
                  </MenubarMenu>

                  {/* Guests and Rooms */}
                  <MenubarMenu>
                    <MenubarTrigger className="w-full flex flex-col space-y-1 items-start justify-start rounded-md p-0">
                      <span className="text-white text-[9px]">Guests and rooms</span>
                      <div className="bg-white w-full flex items-start justify-start p-2 rounded-sm md:rounded-none md:rounded-r-md">
                        <span className={`${jost.className} text-sm`}>
                          {`${person} Person, ${room} room`}
                        </span>
                      </div>
                    </MenubarTrigger>
                    <MenubarContent>
                      <RoomPerson person={person} room={room} setperson={setPerson} setRoom={setRoom} />
                    </MenubarContent>
                  </MenubarMenu>

                </div>
              </Menubar>

              {/* Filter and Search */}
              <div className="w-full flex items-start justify-between">
                <div className="justify-start gap-1 lg:gap-3 grid grid-cols-2 lg:grid-cols-4">
                  <h2 className={`${jost.className} text-white text-xs`}>Popular filters:</h2>

                  <div className="flex items-start lg:items-center gap-x-2 text-white">
                    <input className="size-3" type="checkbox" />
                    <p className={`${jost.className} text-xs`}>Free cancellation</p>
                  </div>

                  <div className="flex items-start lg:items-center gap-x-2 text-white">
                    <input className="size-3" type="checkbox" />
                    <p className={`${jost.className} text-xs`}>4 stars</p>
                  </div>

                  <div className="flex items-start lg:items-center gap-x-2 text-white">
                    <input className="size-3" type="checkbox" />
                    <p className={`${jost.className} text-xs`}>5 stars</p>
                  </div>
                </div>

                <div
                  onClick={searchHotelsHandle}
                  className="w-32 cursor-pointer flex items-center py-2 justify-center h-full text-white gap-x-2 rounded-sm bg-blue-600 hover:bg-blue-700 duration-900"
                >
                  <h2 className={`${jost.className} text-sm`}>Search hotels</h2>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSearchBarHotel
