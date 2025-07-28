import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const ShowFinalPAgeHotels = ({data}) => {

  

  return (
    
   <div className="flex  flex-col items-center justify-center w-full space-y-10">
          {  data.map((data,index)=>
         <div key={index} className="w-full" >
        <div className="w-full h-full flex flex-col   sm:flex-row  ">

        {/* IMAGE */}
         <div className="w-full bg-blue-500 max-h-60 sm:w-[40%]  overflow-hidden rounded-t-sm sm:rounded-none sm:rounded-l-sm">
          <img className="object-cover w-full  sm:h-full  " src={`/${data.image}`} />
          </div>
        {/* CONTENT */}
         <div className="flex max-h-60 flex-col py-2 sm:justify-center md:flex-row bg-white overflow-hidden w-full  border rounded-b-sm sm:rounded-none sm:rounded-r-sm  ">
          {/* Details*/}
         <div className="flex flex-col w-full items-start justify-center  md:justify-start md:pt-6 p-2 md:px-7 space-y-2 md:border-r  border-slate-300  ">
          <div className="flex  items-center  md:space-x-9 justify-between w-full space-x-3">
            <span className={`${jost.className} text-sm  md:text-lg lg:text-xl font-semibold`}>{data.name}</span><span className="text-sm">⭐⭐⭐⭐⭐</span></div>
          <span style={{fontWeight:300}} className={`${jost.className}  text-sm text-gray-700`}>{data.distancecity} km from city centre</span>
            <div  className="flex items-center justify-start gap-x-1 ">
                     <div  className="flex items-end justify-end  ">
                        <span className={`${jost.className} font-semibold text-sm text-black `}>{data.rating}</span>
                        <span  className={`text-thin text-[11px] text-gray-700`}>/5</span> 
                     </div>
                        <span className={`${jost.className} font-semibold text-sm text-black `}>Very good</span>
                        <span className={`font-thin pt-1  text-[12px] text-slate-600`}>124 review</span>
                     </div>
         {/* <div className="flex items-start justify-start space-x-3 "><span className="font-semibold">4.5</span> <span className="text-2xl "><ion-icon name="infinite-outline"></ion-icon></span></div>  */}
          </div>
          {/* Pricing */}
          <div className="flex  md:flex-col md:justify-center md:space-y-7 md:w-[40%] items-center justify-between w-full  p-2 space-y-2 ">
       <div className="flex flex-col items-center justify-end md:w-full md:items-end ">
      <div className="text-xs font-semibold hidden md:block"> Lowest price </div>
      <div className="text-xs hidden md:block">we found for this hotel </div>
      <div className=" bg-white hidden md:block">{data.websitename}</div>
        
        <div className=" flex flex-col items-start justify-start md:items-end md:justify-end">
        <span className="text-xs text-gray-700">From</span>
        <span className="text-md font-semibold ">Rs {data.price}</span>
        <span className="text-xs text-gray-700">a night</span>
        </div>
          </div>
          {/* <Link  href={`/hotels/${country}/${hotelname}`} className={`${jost.className} lg:w-full flex items-center justify-center border bg-[#05203c] hover:bg-blue-900 rounded-sm font-semibold hover:cursor-pointer text-white px-3 lg:px-5 py-2`}>{text}</Link> */}
          </div>
         
         </div>
      </div>
     
      
      </div>
        )}
      </div>
  )
}

export default ShowFinalPAgeHotels