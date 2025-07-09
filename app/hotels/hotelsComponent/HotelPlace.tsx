'use client'

import Image from "next/image"
import Link from "next/link"

function HotelPlace() {

return (
<div className="flex flex-col w-full space-y-3 p-3">
     {/* Text */}
     <div className="flex flex-col space-y-2 w-full items-start justify-start">
          <h1 className="text-3xl font-semibold sm:text-4xl">Hotels for fab city breaks</h1>
          <p className="text-slate-800 text-md">The key to a great city break? A perfectly-placed base. Check out the best city centre hotels.</p>
     </div>

     {/* City Shows */}
     <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-5 ">
            
        

          <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden hover:shadow items-center justify-center w-full border rounded-xl  "
            >
            <Image 
              height={300} 
              width={300} 
              src="/Islamabad.jpeg"
              alt="image"
              className="w-full h-full max-h-52 object-cover"
             />

            <div className="flex items-center justify-start w-full bg-white  p-3  ">
                  <h1 className="  font-semibold text-xl ">Pakistan</h1>
            </div>
          </Link>  




          <Link
            href={`hotels/${'India'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-md hover:shadow-sm "
            >

            <Image 
              height={300} 
              width={300} 
              src="/Delhi.jpeg"
              alt="image"
              className="w-full h-full max-h-52 object-cover"
             />
            <div className="flex items-center justify-start w-full bg-white  p-3  ">
                  <h1 className="  font-semibold text-xl ">India</h1>
            </div>
          </Link>  





          <Link
            href={`hotels/${'Afganistan'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-md hover:shadow "
            >

            <Image 
              height={300} 
              width={300} 
              src="/Kabul.jpeg"
              alt="image"
              className="w-full h-full max-h-52 object-cover"
             />
            <div className="flex items-center justify-start w-full bg-white  p-3  ">
                  <h1 className="  font-semibold text-xl ">Afganistan</h1>
            </div>
          </Link>  

         
      
        
           
      
         
       
         


        </div>
      </div>
        
    )
}

export default HotelPlace
