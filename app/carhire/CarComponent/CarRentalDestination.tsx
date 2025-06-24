 


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
import { Jost } from "next/font/google"
 

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


function CarRentalDestination() {
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
       <div className="flex  w-full items-start justify-start">
      <h1 className="text-3xl font-semibold sm:text-4xl">Popular car rental destinations</h1>
       </div>


       {/* City Slide */}
      <div className="w-full flex items-center justify-center ">
      <Carousel
      opts={{ align: "start"}}
      className="w-full bg-white "
       >
      <CarouselContent  className="w-full  ">
      

          <CarouselItem   className="basis-full sm:basis-1/2 lg:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/car_rental_destination.webp"
              alt="image"
              className="w-full object-cover  rounded-t-md  "
             />


            <div className="flex items-center flex-col space-y-2 bg-white rounded-b-md   border  w-full ">
              
               <div className="flex  w-full items-start justify-between border-b pb-3 border-slate-300 p-3  ">
                   {/* Hotel_detail */}
                  <div className="felx flex-col items-start justify-start space-y-0 ">
                     <h1 className={`${jost.className} font-semibold text-xl sm:text-md `}>Hotel Bilal</h1>
                     <span style={{fontWeight:300}} className={`${jost.className} text-xs`}>3.54 km from city center</span>
                     <div  className="flex items-center justify-start gap-x-1 pt-2">
                     <div  className="flex items-end justify-end  ">
                        <span className={`${jost.className} font-semibold text-sm text-black `}>4.2</span>
                        <span  style={{fontWeight:200}} className={`${jost.className} text-[11px] text-slate-500`}>/5</span> 
                     </div>
                        <span className={`${jost.className} font-semibold text-sm text-black `}>Very good</span>
                        <span style={{fontWeight:200}} className={`${jost.className} pt-1  text-[12px] text-slate-400`}>1 review</span>
                     </div>
                  </div>
                  {/* Hotel_review */}
                  <div className="text-xs">⭐⭐⭐⭐⭐</div>

               </div>

               <div className="flex flex-col items-end justify-end    w-full p-3 ">
                  <h1 className={`${jost.className} text-lg  text-black`}>Rs 3,643</h1>
                  <p className="text-[11px] text-slate-600">Per night</p>
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


         

          <CarouselItem   className="basis-full sm:basis-1/2 lg:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/hotel_2.jpg"
              alt="image"
              className="w-full object-cover  rounded-t-md  "
             />


            <div className="flex items-center flex-col space-y-2 bg-white rounded-b-md   border  w-full ">
              
               <div className="flex  w-full items-start justify-between border-b pb-3 border-slate-300 p-3  ">
                   {/* Hotel_detail */}
                  <div className="felx flex-col items-start justify-start space-y-0 ">
                     <h1 className={`${jost.className} font-semibold text-xl sm:text-md `}>Hotel Bilal</h1>
                     <span style={{fontWeight:300}} className={`${jost.className} text-xs`}>3.54 km from city center</span>
                     <div  className="flex items-center justify-start gap-x-1 pt-2">
                     <div  className="flex items-end justify-end  ">
                        <span className={`${jost.className} font-semibold text-sm text-black `}>4.2</span>
                        <span  style={{fontWeight:200}} className={`${jost.className} text-[11px] text-slate-500`}>/5</span> 
                     </div>
                        <span className={`${jost.className} font-semibold text-sm text-black `}>Very good</span>
                        <span style={{fontWeight:200}} className={`${jost.className} pt-1  text-[12px] text-slate-400`}>1 review</span>
                     </div>
                  </div>
                  {/* Hotel_review */}
                  <div className="text-xs">⭐⭐⭐⭐⭐</div>

               </div>

               <div className="flex flex-col items-end justify-end    w-full p-3 ">
                  <h1 className={`${jost.className} text-lg  text-black`}>Rs 3,643</h1>
                  <p className="text-[11px] text-slate-600">Per night</p>
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


          <CarouselItem   className="basis-full sm:basis-1/2 lg:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/hotel_3.jpg"
              alt="image"
              className="w-full object-cover  rounded-t-md  "
             />


            <div className="flex items-center flex-col space-y-2 bg-white rounded-b-md   border  w-full ">
              
               <div className="flex  w-full items-start justify-between border-b pb-3 border-slate-300 p-3  ">
                   {/* Hotel_detail */}
                  <div className="felx flex-col items-start justify-start space-y-0 ">
                     <h1 className={`${jost.className} font-semibold text-xl sm:text-md `}>Hotel Bilal</h1>
                     <span style={{fontWeight:300}} className={`${jost.className} text-xs`}>3.54 km from city center</span>
                     <div  className="flex items-center justify-start gap-x-1 pt-2">
                     <div  className="flex items-end justify-end  ">
                        <span className={`${jost.className} font-semibold text-sm text-black `}>4.2</span>
                        <span  style={{fontWeight:200}} className={`${jost.className} text-[11px] text-slate-500`}>/5</span> 
                     </div>
                        <span className={`${jost.className} font-semibold text-sm text-black `}>Very good</span>
                        <span style={{fontWeight:200}} className={`${jost.className} pt-1  text-[12px] text-slate-400`}>1 review</span>
                     </div>
                  </div>
                  {/* Hotel_review */}
                  <div className="text-xs">⭐⭐⭐⭐⭐</div>

               </div>

               <div className="flex flex-col items-end justify-end    w-full p-3 ">
                  <h1 className={`${jost.className} text-lg  text-black`}>Rs 3,643</h1>
                  <p className="text-[11px] text-slate-600">Per night</p>
               </div>
            </div>
          </Link>  


           
      
             {/* </Card> */}
            </div>
          </CarouselItem>


         

          <CarouselItem   className="basis-full sm:basis-1/2 lg:basis-1/3 " >
            <div className=" ">
             {/* <Card className="border-none bg-blue-600 gap-4"> */}

            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/hotel_4.jpg"
              alt="image"
              className="w-full object-cover  rounded-t-md  "
             />


            <div className="flex items-center flex-col space-y-2 bg-white rounded-b-md   border  w-full ">
              
               <div className="flex  w-full items-start justify-between border-b pb-3 border-slate-300 p-3  ">
                   {/* Hotel_detail */}
                  <div className="felx flex-col items-start justify-start space-y-0 ">
                     <h1 className={`${jost.className} font-semibold text-xl sm:text-md `}>Hotel Bilal</h1>
                     <span style={{fontWeight:300}} className={`${jost.className} text-xs`}>3.54 km from city center</span>
                     <div  className="flex items-center justify-start gap-x-1 pt-2">
                     <div  className="flex items-end justify-end  ">
                        <span className={`${jost.className} font-semibold text-sm text-black `}>4.2</span>
                        <span  style={{fontWeight:200}} className={`${jost.className} text-[11px] text-slate-500`}>/5</span> 
                     </div>
                        <span className={`${jost.className} font-semibold text-sm text-black `}>Very good</span>
                        <span style={{fontWeight:200}} className={`${jost.className} pt-1  text-[12px] text-slate-400`}>1 review</span>
                     </div>
                  </div>
                  {/* Hotel_review */}
                  <div className="text-xs">⭐⭐⭐⭐⭐</div>

               </div>

               <div className="flex flex-col items-end justify-end    w-full p-3 ">
                  <h1 className={`${jost.className} text-lg  text-black`}>Rs 3,643</h1>
                  <p className="text-[11px] text-slate-600">Per night</p>
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

export default CarRentalDestination
