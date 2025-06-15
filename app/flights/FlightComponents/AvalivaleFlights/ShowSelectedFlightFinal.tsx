'use client'
import Link from "next/link"

function ShowSelectedFlightFinal({id,checkAirline,country,depart,finalcity,setShowSelectFlight,data}) {
    const filterArray=data.filter((data)=>data.id===id)
    return (
        <div className="min-w-full h-full flex items-start justify-center  bg-slate-300 p-5 ">
          <div className="w-full flex flex-col items-center justify-center max-w-screen-xl ">
          {/* Back btton */}
          <div className="flex flex-col items-center justify-center w-full p-3 rounded-2xl  bg-blue-800">
               <div className="flex items-center justify-center w-full">
               <div   onClick={()=>setShowSelectFlight(false)} className="cursor-pointer text-2xl text-white p-3">
                 {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                 </div>
                <div className="w-full flex items-center justify-center text-xl font-semibold">
                 <Link  href="/"><img className="w-36" src="/logomain.png" /></Link>
                  </div>
                </div>
         {/* Show depart city */}
         <div className="flex flex-col text-white  w-full  items-start ">

            <div className="text-5xl font-semibold ">
             {depart}
            </div>
            <div>1 traveller - Economy class</div>
         </div>
            
            </div>
            {/* Show real data */}
         <div className="flex items-center justify-center w-full bg-slate-300 ">
         <div className="flex flex-col w-full  p-3 space-y-3  max-w-screen-lg">
       {/* Outbonding -- Return */}
       <div className="flex items-center justify-between w-full px-3">
        <div className="text-slate-900 font-semibold">Outbonding <span className="text-slate-500 font-thin"> 1 Feb,2025 </span></div>
        <div className="text-slate-900 font-semibold">Return <span className="text-slate-500 font-thin">25 Feb,2025 </span></div>
       
       </div>
       {/* fligthData */}
         <div className="w-full h-full grid grid-cols-1  gap-3 ">
            {filterArray.map((data,index)=>
             <div key={index} className=" w-full h-[200px] bg-white p-5  rounded-2xl flex items-center justify-center space-x-4 border ">
              <div className="w-full flex flex-col sm:flex-row  items-center justify-center space-y-3 md:space-y-0 md:space-x-2  ">
               <div className="w-full flex items-center justify-between  ">
                <div><img className="h-6" src="/pia.jpeg" alt="pia-logo"/></div>
                <div className="flex  items-center justify-center space-x-3">
                    <div className="flex flex-col items-start justify-center space-y-5">  
                       <div className="font-semibold">{data.startTime}</div>
                       <div>UET</div>
                    </div>
                    <div className="flex flex-col  ">
                       <div className="text-xs">{data.hours} hours</div>
                       <div className="flex items-center justify-center space-x-4 ">
                        <div className="border-t-2 pb-2 min-w-[60px] border-slate-400"></div><div className=""><ion-icon name="airplane-outline"></ion-icon></div>
                       </div>
                        <div>{data.stop}</div>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-5">
                       <div  className="font-semibold">{data.endTime}</div>
                       <div>UET</div>
                    </div>
                </div>
               </div>
            
              </div>
               <div>🖤</div>
             </div>
            )}
            
           
          
                 </div>
        {/* Select prising */}
        <div className="w-full flex items-center justify-between   bg-white p-3 rounded-2xl">
            <div className="flex flex-col items-start space-y-1">
                    {/* Self transfer */}
                <div className="flex items-center justify-center space-x-2">
                    {/* <ion-icon name="alert-circle-outline"></ion-icon> */}
                    <div className="text-sm">Self-transfer </div>
                </div>
                    {/* Protection transfer */}
                <div className="flex items-center justify-center space-x-2">
                    {/* <ion-icon name="checkmark-outline"></ion-icon> */}
                    <div className="text-sm">Transfer protection </div>
                </div>
                    {/* Self transfer */}
                <div className="flex items-center justify-center space-x-2">
                {/* <ion-icon name="bag-check-outline"></ion-icon> */}
                {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                </div>
            </div>
                <div className="flex flex-col  items-center justify-start space-y-2 ">
                    <div className="border px-6 py-1 rounded-xl  bg-slate-800 text-white hover:bg-slate-700 hover:cursor-pointer">Select</div>
                    <div className="text-xl ">Rs 63,500</div>
                </div>
                </div>
         </div>
         </div>
         </div>
        
        </div>
    )
}

export default ShowSelectedFlightFinal
