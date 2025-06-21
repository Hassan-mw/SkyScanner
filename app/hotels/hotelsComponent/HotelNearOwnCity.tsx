'use client'

import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"
import Image from "next/image"
 


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
    
        <div className="w-full flex-col space-y-7 flex items-center justify-center p-3">
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
      

          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


         
          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>

         
          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>
          
          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


         
          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>

         
          <CarouselItem   className="basis-full md:basis-1/2 xl:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

             <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer  hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/POstcard_London-TM.webp"
              alt="image"
              className="w-full object-cover rounded-t-sm"
             />


            <div className="flex items-center justify-between w-full border bg-white rounded-b-sm  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <span className="  font-semibold text-xl sm:text-md">Manchester</span>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


         
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>
  
    
        </div>
    


    
    )
}

export default HotelNearOwncity
