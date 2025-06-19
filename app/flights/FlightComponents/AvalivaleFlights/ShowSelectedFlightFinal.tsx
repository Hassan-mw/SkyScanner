'use client'
import Image from "next/image";
import Link from "next/link"
import { Jost } from 'next/font/google'
 const jost=Jost({
   subsets:['latin'],
   weight:['500']
 })
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";

function ShowSelectedFlightFinal({id,checkAirline,country,depart,finalcity,setShowSelectFlight,data}) {
    const filterArray=data.filter((data)=>data.id===id)
    return (
 <div className="w-full flex items-start justify-center ">

  <div className="w-full flex flex-col items-center justify-center bg-[#05203c]">
    
    {/* Navbar */}
    <div className="max-w-screen-xl flex flex-col items-center justify-center w-full py-6">
      
      {/* top */}
      <div className="relative w-full flex items-center justify-center p-2">
        <div onClick={() => setShowSelectFlight(false)} className="text-white absolute top-3 left-3 hover:cursor-pointer w-44 flex items-center justify-start gap-x-2">
          <FaArrowLeft size={12} />
          <p className="text-sm">Back to result</p>
        </div>
        <div className="w-full flex items-center justify-center text-white gap-x-1">
          <Link href="/">
            <Image height={30} width={30} src="/skyscanner.gif" alt="main_logo" />
          </Link>
          <span className="pt-1">SkyScanner</span>
        </div>
      </div>

      {/* bottom */}
      <div className="flex flex-col space-y-1 text-white w-full items-start px-2">
        <span className={`${jost.className} text-5xl font-semibold`}>{depart}</span>
        <span className={`${jost.className} text-sm font-semibold`}>1 traveller - Economy class</span>
      </div>
    </div>

   {/* Show real data */}
   <div className=" w-full  flex items-center justify-center bg-[#eff3f8] p-3">
     <div className=" w-full max-w-[900px] flex flex-col items-center justify-center space-y-5">

        {/* Outbonding -- Return */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-x-1 border-b border-slate-950">
            <span className={`${jost.className} text-md`}>Outbonding :</span>
            <span style={{ fontWeight: 300 }} className={`${jost.className} text-slate-600 text-md`}>1 Feb,2025</span>
          </div>
          <div className="flex items-center justify-center gap-x-1 border-b border-slate-950">
            <span className={`${jost.className} text-md`}>Return :</span>
            <span style={{ fontWeight: 300 }} className={`${jost.className} text-slate-600 text-md`}>25 Feb,2025</span>
          </div>
        </div>

      <div className="flex flex-col sm:flex-row w-full  gap-3 ">
     
        {/* flightData */}
        <div className="w-full h-full grid grid-cols-1 gap-3">
          {filterArray.map((data, index) => (
            <div key={index} className="w-full h-[200px] bg-white p-5 rounded-md flex items-center justify-center space-x-4 border">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-2">
                
                {/* Plane_Depart_Return */}
                <div className="w-full pl-2 flex flex-col sm:col-span-2 items-center justify-center space-y-1 md:space-y-0 md:space-x-2">
                  
                  {/* 1 */}
                  <div className="w-full flex items-center justify-between gap-x-12">
                    <div>
                      <Image height={110} width={110} src="/pia.png" alt="pia-logo" />
                    </div>
                    <div className="w-full flex items-center justify-center space-x-3">
                      {/* Plane_start */}
                      <div className="flex flex-col items-start justify-center space-y-1">
                        <span className="font-semibold">{data.startTime}</span>
                        <span className="text-slate-400 text-xs">UET</span>
                      </div>

                      {/* Middle_body */}
                      <div className="w-full flex flex-col items-center">
                        <span className="text-xs">{data.hours} hours</span>
                        <div className="w-full flex items-center justify-center space-x-4">
                          <span className="border-t-2 w-full border-slate-200"></span>
                          <span className="rotate-90"><IoMdAirplane /></span>
                        </div>
                        <span className="text-xs">{data.stop}</span>
                      </div>

                      {/* Plane_End */}
                      <div className="flex flex-col items-start justify-center space-y-1">
                        <span className="font-semibold">{data.endTime}:00</span>
                        <span className="text-slate-400 text-xs">UET</span>
                      </div>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="w-full flex items-center justify-between border-b pb-2 border-slate-300 sm:border-none gap-x-12">
                    <div>
                      <Image height={110} width={110} src="/pia.png" alt="pia-logo" />
                    </div>
                    <div className="w-full flex items-center justify-center space-x-3">
                      <div className="flex flex-col items-start justify-center space-y-1">
                        <span className="font-semibold">{data.startTime}</span>
                        <span className="text-slate-400 text-xs">UET</span>
                      </div>
                      <div className="w-full flex flex-col items-center">
                        <span className="text-xs">{data.hours} hours</span>
                        <div className="w-full flex items-center justify-center space-x-4">
                          <span className="border-t-2 w-full border-slate-200"></span>
                          <span className="rotate-90"><IoMdAirplane /></span>
                        </div>
                        <span className="text-xs">{data.stop}</span>
                      </div>
                      <div className="flex flex-col items-start justify-center space-y-1">
                        <span className="font-semibold">{data.endTime}:00</span>
                        <span className="text-slate-400 text-xs">UET</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>🖤</div>
            </div>
          ))}
        </div>

        {/* Select pricing */}
        <div className="w-full border bg-white sm:text-center sm:w-1/3 flex sm:flex-col items-center sm:items-start justify-between sm:space-y-5 sm:py-5  p-3 rounded-md">
          <div className=" sm:w-full flex flex-col items-start sm:items-center space-y-1">
              <span className="text-sm">Self-transfer</span>
              <span className="text-sm">Transfer protection</span>
          </div>
          <div className="sm:w-full flex flex-col  space-y-2">
              <span className="text-xl">Rs 63,500</span>                      
              <div className="w-20 sm:w-full flex items-center justify-center  p-1 rounded-sm bg-slate-800 text-white hover:bg-[#05203c] hover:cursor-pointer">Select</div>
          </div>
        </div>

      </div>
     </div>
   </div>

  </div>


</div>

    )
}

export default ShowSelectedFlightFinal
