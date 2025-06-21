'use client';
import Link from "next/link"

function ShowHotelsArray({country,text}) {
  const hotelname='hotel123'  
  return (
        <div className="w-full h-full flex flex-col   sm:flex-row  ">

        {/* IMAGE */}
         <div className="w-full max-h-60 sm:w-[40%]  overflow-hidden rounded-t-2xl sm:rounded-none sm:rounded-l-2xl">
          <img className="object-cover w-full  sm:h-full  " src="/hotel.webp"/>
          </div>
        {/* CONTENT */}
         <div className="flex max-h-60 flex-col py-2 sm:justify-center md:flex-row bg-white overflow-hidden w-full  border rounded-b-2xl sm:rounded-none sm:rounded-r-2xl  ">
          {/* Details*/}
         <div className="flex flex-col w-full items-start justify-center  md:justify-start md:pt-6 p-2 md:px-7 space-y-2 md:border-r  border-slate-300  ">
          <div className="flex  items-center  md:space-x-9 justify-between w-full space-x-3">
            <span className="text-sm  md:text-lg lg:text-2xl font-semibold">JOUDYAN Red Sea Mall Jeddah By Elaf</span><span className="text-sm">⭐⭐⭐⭐⭐</span></div>
          <div className="text-sm text-slate-800">12.10 km from city centre</div>
          <div className=" space-x-1"><span className="text-sm text-slate-800 font-semibold">4.5 </span><span className="text-base font-semibold">Very good</span><span className="text-xs font-mono text-slate-500">120 review</span></div>
         {/* <div className="flex items-start justify-start space-x-3 "><span className="font-semibold">4.5</span> <span className="text-2xl "><ion-icon name="infinite-outline"></ion-icon></span></div>  */}
          </div>
          {/* Pricing */}
          <div className="flex md:flex-col md:justify-center md:space-y-7 md:w-[40%] items-center justify-between w-full  p-2 space-y-2 ">
       <div className="flex flex-col items-center justify-end md:w-full md:items-end ">
      <div className="text-xs font-semibold hidden md:block"> Lowest price </div>
      <div className="text-xs hidden md:block">we found for this hotel </div>
      <div className=" bg-white hidden md:block"><img className="w-16 " src="/d_ct.png"/></div>
       
        <div className="text-xs text-slate-500">From</div>
        <div className="text-2xl font-semibold ">Rs 15,517</div>
        <div className="text-xs text-slate-500">a night</div>
          </div>
          <Link  href={`/hotels/${country}/${hotelname}`} className="border bg-[#05203c] hover:bg-blue-900 rounded-lg font-semibold hover:cursor-pointer text-white px-3 lg:px-5 py-2 lg:w-full flex items-center justify-center">{text}</Link>
          </div>
         
         </div>
      </div>
    )
}

export default ShowHotelsArray
