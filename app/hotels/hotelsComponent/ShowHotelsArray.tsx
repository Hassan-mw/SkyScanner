'use client';
import Link from "next/link"

  import { Jost } from "next/font/google"
import Image from "next/image";
  

const jost=Jost({
  subsets:['latin'],
  weight:['500']
})


// function ShowHotelsArray({country,text}:{country:string,text:string}) {
function ShowHotelsArray( {cities,country}:{cities:string[],country:string}) {


  return (
      <div className="w-full flex items-center justify-center ">
      <div className="w-full max-w-screen-xl flex flex-col space-y-7 py-8 items-center justify-center">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-start justify-start space-y-2">
          <div className="flex flex-col items-start justify-start space-y-1">
            <h1 className={`${jost.className} text-2xl sm:text-3xl w-full font-semibold`}>
             Where do you want to stay?
            </h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-sm text-gray-600`}>
            Discover top hotels, cozy stays, and luxury options across {country}.
            </p>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities?.map((city, index) => (
            <Link
              href={`/hotels/${country}/${city}`}
              key={index}
              className="hover:cursor-pointer h-32 sm:h-56 shadow-lg hover:shadow-2xl duration-500 flex sm:flex-col items-center justify-center w-full border rounded-md"
            >
              {/* Image */}
              <Image
                height={1000}
                width={1000}
                src={`/${city}.jpeg`}
                className="h-full sm:max-h-[80%] rounded-l-md sm:rounded-bl-none sm:rounded-t-md object-cover w-full  max-w-[65%] sm:max-w-full"
                alt={city}
              />

              {/* City Name */}
              <div className="w-[30%]  sm:w-full h-full sm:max-h-[25%] flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-between bg-white p-3  rounded-r-md sm:rounded-none sm:rounded-b-md">
                <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>
                  {/* {tocountry} */}
                </span>
                <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>
                  {city}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    
    )
}

export default ShowHotelsArray

import React from 'react'

// const ShowHotelsArray = ({}) => {
//   return (
//     <div>ShowHotelsArray</div>
//   )
// }

// export default ShowHotelsArray