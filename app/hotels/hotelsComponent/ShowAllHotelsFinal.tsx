'use client';

import { useState } from "react"
import FilterHotelsShower from "./FilterHotelsShower";
import ShowHotelsArray from "./ShowHotelsArray";
import ShowMapOption from "./ShowMapOption";
import ShowSideBarHotel from "./ShowSideBarHotel";
import { Jost } from "next/font/google";
import Map from "./Map";
import CustomSearchBarHotel from "./CustomSearchBarhotel";
import HotelSearchBar from "./HotelSearchBar";
import ShowFinalPAgeHotels from "./ShowFinalPAgeHotels";

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

function ShowAllHotelsFinal({country,data}:{country:string}) {
const arr=[,1,1,1,11,1,1,1,1,1,1]
const [showSideBae,setShowSideBar]=useState(false)
return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#eff3f8] overflow-hidden">

        <HotelSearchBar/>
        <div className="w-full flex flex-col    xl:flex-row  max-w-[2000px]">
           
            {/* //! SIDEBAR AT LARGE SCREENS */}
            <div className="hidden 2xl:block bg-red-400 wxl:w-[300px]"><ShowSideBarHotel /></div>
          
            
            {/* //! MIDDLE BOX */}
            <div className="w-full  flex flex-col lg:min-w-[70%] 2xl:min-w-[50%] pb-20 overflow-y-auto">
                <div className=" w-full flex flex-col items-center    max-w-screen-xl space-y-3 p-2">
                  <FilterHotelsShower setShowSideBar={setShowSideBar}/>
                  <div className="w-full border-4 rounded-md border-slate-200 h-[300px] hidden sm:block xl:hidden ">
                    <Map data={data} country={country}/>
                  </div>
                </div>

                {/* //! HOTELS ARRAY */}
                <div className="lg:min-w-[60%] 2xl:min-w-[50%] max-w-screen-xl h-full  py-2 p-2 ">
                  <div className="flex flex-col w-full space-y-10 pr-3"> 
                
                  {/* Text */}
                  <div className="p-2 bg-white rounded-sm w-full flex items-center justify-start gap-x-1 ">
                      <span style={{fontWeight:300}} className={`${jost.className} text-xs  `}>  We search for prices from hundreds of providers — what they pay us may affect our sort order . <span  style={{fontWeight:300}} className={`${jost.className} text-blue-500  text-xs  `}>Learn how Skyscanner works</span></span>              
                  </div>

                 
                    <ShowFinalPAgeHotels data={data}/>


                      
                  </div>
                </div>
            </div>
           
            {/* //! MAP */}
            <div className=" lg:min-w-[30%] 2xl:min-w-[30%] w-full h-[90vh]  overflow-hidden   hidden xl:block rounded-none p-1 xl:p-0 ">
               <Map country={country}/>
            </div>
      
        </div>         
    </div>
    )
}

export default ShowAllHotelsFinal
