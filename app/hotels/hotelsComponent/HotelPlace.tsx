'use client'

import Image from "next/image"
import Link from "next/link"

function HotelPlace() {

return (
<div className="flex flex-col w-full space-y-3">
     {/* Text */}
     <div className="flex flex-col space-y-2 w-full items-start justify-start">
          <h1 className="text-3xl font-semibold sm:text-4xl">Hotels for fab city breaks</h1>
          <p className="text-slate-800 text-md">The key to a great city break? A perfectly-placed base. Check out the best city centre hotels.</p>
     </div>

     {/* City Shows */}
     <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-5 ">
            
          <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col   items-center justify-center w-full   hover:shadow-sm "
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
            


          <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl hover:shadow-sm "
            >

            <Image 
              height={400} 
              width={400} 
              src="/7691.webp"
              alt="image"
              className="w-full object-cover"
             />


            <div className="flex items-center justify-between w-full bg-white  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <h1 className="  font-semibold text-xl sm:text-md">Manchester</h1>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  

          <Link
            href={`hotels/${'Pakistan'}`} 
            className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl hover:shadow-sm "
            >

            <Image 
              height={400} 
              width={400} 
              src="/7691.webp"
              alt="image"
              className="w-full object-cover"
             />


            <div className="flex items-center justify-between w-full bg-white  p-3  ">
               <div className="flex flex-col items-start justify-start   ">
                  <h1 className="  font-semibold text-xl sm:text-md">Manchester</h1>
                  <p className=" text-xs font-thin">united Kingdom</p>
               </div>
               <div className="flex flex-col items-end justify-end    ">
                  <p className="text-xs text-slate-700">From</p> 
                  <h1  className="text-lg text-black font-semibold sm:text-sm">Rs 12,000 </h1> 
                  <p className="text-xs text-slate-700">per night</p> 
               </div>
            </div>
          </Link>  

         
      
        
           
      
         
       
         


        </div>
      </div>
        
    )
}

export default HotelPlace
