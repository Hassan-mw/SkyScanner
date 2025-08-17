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
import { IoAlertCircle } from "react-icons/io5"
 

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


function CarRentalDestination() {
  const [selectedRegin,setSelectedRegion]=useState('Islambad')

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
      

         <CarouselItem   className="basis-full  flex items-center justify-center sm:basis-1/2 lg:basis-1/3 " >
            <Link
            href={`carhire/hirelocation/${'dubai'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/car_rental_destination.webp"
              alt="image"
              className="w-full object-cover object-bottom h-48 rounded-t-md  "
             />
             
             <div className="w-full bg-white flex items-center justify-between p-3   rounded-b-md  border">
                  <div className="flex flex-col items-start justify-start space-y-0">
                    <h1  className={`${jost.className} text-lg`}>Car hire in Dubai</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-sm`}>Most popular car type: Economy</span>
                  </div>

                  <div className="flex flex-col items-end justify-end">
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>From</span>
                    <h1 className={`${jost.className} text-lg`}>Rs3,958</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>per day</span>                  
                  </div>
                  
             </div>

           
          </Link>  


           
      
         
          </CarouselItem>


        
      

         <CarouselItem   className="basis-full  flex items-center justify-center sm:basis-1/2 lg:basis-1/3 " >
            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/car_rental_destination1.webp"
              alt="image"
              className="w-full object-cover object-bottom h-48 rounded-t-md  "
             />
             
             <div className="w-full bg-white flex items-center justify-between p-3  rounded-b-md  border">
                  <div className="flex flex-col items-start justify-start space-y-0">
                    <h1  className={`${jost.className} text-lg`}>Car hire in Dubai</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-sm`}>Most popular car type: Economy</span>
                  </div>

                  <div className="flex flex-col items-end justify-end">
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>From</span>
                    <h1 className={`${jost.className} text-lg`}>Rs3,958</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>per day</span>                  
                  </div>
                  
             </div>

           
          </Link>  


           
      
         
          </CarouselItem>


        

         <CarouselItem   className="basis-full  flex items-center justify-center sm:basis-1/2 lg:basis-1/3 " >
            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/car_rental_destination2.webp"
              alt="image"
              className="w-full object-cover object-bottom h-48 rounded-t-md  "
             />
             
             <div className="w-full bg-white flex items-center justify-between p-3  rounded-b-md  border">
                  <div className="flex flex-col items-start justify-start space-y-0">
                    <h1  className={`${jost.className} text-lg`}>Car hire in Dubai</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-sm`}>Most popular car type: Economy</span>
                  </div>

                  <div className="flex flex-col items-end justify-end">
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>From</span>
                    <h1 className={`${jost.className} text-lg`}>Rs3,958</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>per day</span>                  
                  </div>
                  
             </div>

           
          </Link>  


           
      
         
          </CarouselItem>


        

         <CarouselItem   className="basis-full  flex items-center justify-center sm:basis-1/2 lg:basis-1/3 " >
            <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer    flex flex-col  items-center justify-center w-full    "
            >

            <Image 
              height={300} 
              width={300} 
              src="/car_rental_destination3.webp"
              alt="image"
              className="w-full object-cover object-bottom h-48 rounded-t-md  "
             />
             
             <div className="w-full bg-white flex items-center justify-between p-3  rounded-b-md  border">
                  <div className="flex flex-col items-start justify-start space-y-0">
                    <h1  className={`${jost.className} text-lg`}>Car hire in Dubai</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-sm`}>Most popular car type: Economy</span>
                  </div>

                  <div className="flex flex-col items-end justify-end">
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>From</span>
                    <h1 className={`${jost.className} text-lg`}>Rs3,958</h1>
                    <span style={{fontWeight:200}} className={`${jost.className} text-slate-700 text-xs`}>per day</span>                  
                  </div>
                  
             </div>

           
          </Link>  


           
      
         
          </CarouselItem>


        

         

         
       
         
        
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>



      <div className="w-full  flex items-start justify-start bg-[#eff3f8] gap-x-2 rounded-sm p-3 mt-14">
          <div className="text-[#747a82]"><IoAlertCircle /></div>
          <span style={{fontWeight:200}} className={`${jost.className} text-sm`}>These are estimated prices to help you choose from a large number of options. Each is an average based on the lowest <strong>car rental </strong> prices found for each destination over the last 15 days.</span> 
      </div>
  
    
        </div>
    


    
    )
}

export default CarRentalDestination
