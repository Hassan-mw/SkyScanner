'use client'

import Link from "next/link"

function HotelPlace({params}:{params:URLSearchParams}) {
   console.log(params,"Inside showing plane place")
    return (
      <div className="flex flex-col w-full space-y-3">
{/* Text */}
<div className="flex flex-col space-y-2 w-full items-start justify-start">
<div className="text-3xl font-semibold sm:text-4xl">Hotels for fab city breaks</div>
<div className="text-slate-800 text-md">The key to a great city break? A perfectly-placed base. Check out the best city centre hotels.</div>
</div>
         {/* City Shows */}
<div className="w-full  grid grid-cols-1 gap-5 sm:gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3   ">
            <Link href={`hotels/${'Pakistan'}`} className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl hover:shadow-sm  ">
            <div className=" w-full h-full bg-blue-600"><img className="w-full object-cover   h-[300px] md:h-[200px]" alt="image" src="/POstcard_London-TM.webp"/></div>
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
          {/* Countres 1 */}
         <Link href={`hotels/${'Pakistan'}`} className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl hover:shadow-sm  ">
         <div className=" w-full h-full bg-blue-600"><img className="w-full object-cover   h-[300px] md:h-[200px]" alt="image" src="/7691.webp"/></div>
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
      
         <Link href={`hotels/${'Pakistan'}`} className="hover:cursor-pointer hover:shadow-slate-400 duration-300 flex flex-col overflow-hidden  items-center justify-center w-full border rounded-xl hover:shadow-sm  ">
            <div className=" w-full h-full bg-blue-600"><img className="w-full object-cover   h-[300px] md:h-[200px]" alt="image" src="/m1.webp"/></div>
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
      
            {/* Countres 2*/}
      
         
       
         


        </div>
      </div>
        
    )
}

export default HotelPlace
