'use client';

import { useState } from "react";
import { Jost } from "next/font/google";

import FilterHotelsShower from "./FilterHotelsShower";
import ShowFinalPAgeHotels from "./ShowFinalPAgeHotels";
import ShowSideBarHotel from "./ShowSideBarHotel";
import Map from "./Map";
import HotelSearchBar from "./HotelSearchBar";

const jost = Jost({
  subsets: ['latin'],
  weight: ['500']
});

function ShowAllHotelsFinal({ country, data }: { country: string; data: any }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#eff3f8] overflow-hidden">
      
      {/* Search Bar */}
      <HotelSearchBar />

      <div className="w-full flex flex-col xl:flex-row max-w-[2000px]">
        
        {/* Sidebar on 2XL screens */}
        <div className="hidden 2xl:block bg-red-400 w-[300px]">
          <ShowSideBarHotel />
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col lg:min-w-[70%] 2xl:min-w-[50%] pb-20 overflow-y-auto">
          <div className="w-full flex flex-col items-center max-w-screen-xl space-y-3 p-2">
            
            {/* Filter Controller */}
            <FilterHotelsShower setShowSideBar={setShowSideBar} />
            
            {/* Mini Map (visible only on certain screens) */}
            <div className="w-full border-4 rounded-md border-slate-200 h-[300px] hidden sm:block xl:hidden">
              <Map data={data} country={country} />
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="lg:min-w-[60%] 2xl:min-w-[50%] max-w-screen-xl py-2 px-2">
            <div className="flex flex-col w-full space-y-10 pr-3">

              {/* Informational Text */}
              <div className="p-2 bg-white rounded-sm w-full flex items-center justify-start gap-x-1">
                <span style={{ fontWeight: 300 }} className={`${jost.className} text-xs`}>
                  We search for prices from hundreds of providers — what they pay us may affect our sort order.{" "}
                  <span className="text-blue-500">
                    Learn how Skyscanner works
                  </span>
                </span>
              </div>

              {/* Hotels Display Component */}
              <ShowFinalPAgeHotels data={data} />
            </div>
          </div>
        </div>

        {/* Large Screen Map */}
        <div className="lg:min-w-[30%] 2xl:min-w-[30%] w-full h-[90vh] overflow-hidden hidden xl:block rounded-none p-1 xl:p-0">
          <Map country={country} />
        </div>
      </div>
    </div>
  );
}

export default ShowAllHotelsFinal;
