'use client'

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
 


function HotelNearOwncity() {
  const [selectedRegin,setSelectedRegion]=useState('Islambad')
  //  console.log(params,"Inside showing plane place")
   const cityArray=[
    {id:1,city:'Islambad'},
    {id:2,city:'Karachi'},
    {id:3,city:'Lahore'},
    {id:4,city:'Murre'},
    {id:5,city:'Gilgit'},
   ]
    return (
    
        <div className="w-full flex-col space-y-7 flex items-center justify-center ">
       {/* Text */}
       <div className="flex flex-col space-y-2 w-full items-start justify-start">
      <div className="text-3xl font-semibold sm:text-4xl">Hotels in your home country</div>
     <div className="text-slate-800 text-md">Your next adventure may be closer than you think. Discover hotels just beyond your doorstep.</div>
       <div className="w-full flex space-x-3 ">
        {
          cityArray.map((data)=>
        <div key={data.id} onClick={()=>setSelectedRegion(data.city)} className={`border rounded-lg  px-3 py-1 text-md font-medium hover:cursor-pointer ${selectedRegin===data.city &&  'bg-[#05203c] text-white'}`}>{data.city}</div>
          
          )
        }
       </div>
       </div>
       {/* City Slide */}
      <div className="w-full flex items-center justify-center ">
  <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-white "
    >
      <CarouselContent  className="w-full  ">
        {Array.from({ length: 20}).map((_, index) => (
          <CarouselItem key={index}  className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             <Card className="border-none ">
             <Link href={`hotels/${'Pakistan'}`} className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl   ">
             <div className=" w-full h-full bg-blue-600"><img className="w-full object-cover   h-[300px] md:h-[200px]" src="/m1.webp"/></div>
            <div className="flex items-center justify-between w-full  py-2 px-3  ">
                 
            
                 <div className="flex flex-col items-start justify-start w-full h-full bg-white">
                    <div className="  font-semibold text-base">Manchester</div>
                    <div className=" text-xs font-thin">united Kingdom</div>
               </div>
                    <div className="flex flex-col items-center justify-center  text-xl font-medium min-w-[100px]">
                         {/* <div className="text-xs text-slate-500">From</div>  */}
                         <div  className="text-sm text-black font-semibold">Rs 12,000 </div> 
                         <div className="text-xs text-slate-700">per night</div> 
                     </div>
                     </div>
         </Link>
               {/* <Link href={`flights/country/${'Pakistan'} className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border shadow-xl  "`}>
             <div className=" w-full"><img className="w-full object-fill rounded-t-3xl " src="/m1.webp"/></div>
             <div className="flex items-center justify-between w-full px-5   border">
                 
            
             <div className="flex flex-col items-start justify-start w-full h-full">
                <div className=" text-xl font-semibold">Manchester</div>
                <div className=" text-xs font-thin">united Kingdom</div>
           </div>
                <div className="flex flex-col items-center justify-center  text-xl font-medium min-w-[100px]">
                     <div className="text-sm text-slate-500">From</div> 
                     <div  className="text-xl text-slate-900 font-semibold">Rs 12,000 </div> 
                     <div className="text-sm text-slate-500">a night</div> 
                 </div>
                 </div>
          </Link> */}
             </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>
  
    
        </div>
    


    
    )
}

export default HotelNearOwncity
