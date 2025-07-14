// import ShowAllHotelsFinal from "@/app/ShowAllHotelsFinal"

import { fetchAllHotelsData } from "@/app/API/hotels"
import ShowAllHotelsFinal from "../../hotelsComponent/ShowAllHotelsFinal"

const  page=async({params})=> {
const x=await params
console.log(x)
const country='Pakistan'
const city='Lahore'
const data=await fetchAllHotelsData({country,city})
console.log(data,'++++++++++++++++++++++++++++++++')
    return (
        <div className="w-full h-full overflow-hidden">
            <ShowAllHotelsFinal data={data}  country={country}/>
        </div>
       
    )
}

export default page





































// 'use client'

// import { useState } from "react"


// import PlaneFilterFlight from  "@/app/(flightpageOptions)/PlaneFilterFlight"
// import FinalPageFilter from  "@/app/(flightpageOptions)/FinalPageFilters"
// // import SideBarFilter from "../"
// // import SideBarSort from "./SideBarSort"
// import ShowSelectedFlightFinal from "@/app/(flightpageOptions)//ShowSelectedFlightFinal"
// import SideBarFilter from "@/app/(flightpageOptions)/SideBarFilter"
// import SideBarSort from "@/app/(flightpageOptions)/SideBarSort"

// function PlaneFlights({country,depart,finalcity}) {
 
//     const [range,setRange]=useState('1.5')
//     const [id,setId]=useState('')
//     const [checkStops,setCheckStops]=useState("")
//     const [checkAirline,setCheckAirline]=useState("")
//     const [checkSort,setCheckSort]=useState("Best")
//     const [showSideBar,setShowSideBar]=useState(false)
//     const [showSideBarsort,setShowSideBarSort]=useState(false)
//     const [showSelectFlight,setShowSelectFlight]=useState(false)
//     const flightsArray=[
//         {id:'1',hours:'12.5',startTime:'21.5',endTime:'6',stop:'direct',airline:"Fly Jinnah"},
//         {id:'2',hours:'5',startTime:'5',endTime:'12',stop:'1',airline:"Fly Amrrates"},
//         {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
//         {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
//         {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
//         {id:'3',hours:'20',startTime:'5',endTime:'8',stop:'2',airline:"Pia"},
   
//     ]
// // console.log(checkStops)

// const filterArray=flightsArray

//   function handleClickSelectFlight(data,id){
//    setShowSelectFlight(true)
//     setCheckAirline(data)
//     setId(id)
 
//   }
// //   handle side bars function
// function handleShowSidebar(data){
// console.log(data)
// if(data==="Filter"){
//     setShowSideBar(true)
//     setShowSideBarSort(false)
//     return;
// }else{
//     setShowSideBar(false)
//     setShowSideBarSort(true)
//     return ;
// }
// setShowSideBar(false)
//     setShowSideBarSort(false)
// }
//     return (
//         <div className="w-full flex  min-h-full lg:flex  lg:space-x-10 bg-slate-200 py-5  ">
// {/* Show sidebar at alarge */}
// <div className="hidden lg:block min-w-[300px] "><SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} /> </div>  
// {/* Whole flights body */}
//               <div className="w-full h-full  flex flex-col items-center justify-center  max-w-screen-lg ">
          
//  {/* Top filter show at large */}
//               <FinalPageFilter handleShowSidebar={handleShowSidebar} setShowSideBar={setShowSideBar} setShowSideBarSort={setShowSideBarSort}/>
// {/* Plane fliters  */}
//                 <div className="w-full flex items-center  justify-center px-5">
//                 <div className=" w-full"> <PlaneFilterFlight/></div>  
//                 </div>
// {/* plane pricing Array*/}
//                <div className="w-full h-full grid grid-cols-1  gap-3 p-3 ">
//             {filterArray.map((data,index)=>
//              <div key={index} className=" w-full h-[200px] bg-white p-5  rounded-2xl flex items-center justify-center space-x-4 border ">
//               <div className="w-full flex flex-col sm:flex-row  items-center justify-center space-y-3 md:space-y-0 md:space-x-2  ">
//                <div className="w-full flex items-center justify-between border-b sm:border-none   p-3 0 ">
//                 <div><img className="h-6" src="/pia.jpeg" alt="pia-logo"/></div>
//                 <div className="flex  items-center justify-center space-x-3">
//                     <div className="flex flex-col items-start justify-center space-y-5">  
//                        <div className="font-semibold">{data.startTime}</div>
//                        <div>UET</div>
//                     </div>
//                     <div className="flex flex-col  ">
//                        <div className="text-xs">{data.hours} hours</div>
//                        <div className="flex items-center justify-center space-x-4 ">
//                         <div className="border-t-2 pb-2 min-w-[60px] border-slate-400"></div><div className=""><ion-icon name="airplane-outline"></ion-icon></div>
//                        </div>
//                         <div>{data.stop}</div>
//                     </div>
//                     <div className="flex flex-col items-start justify-center space-y-5">
//                        <div  className="font-semibold">{data.endTime}</div>
//                        <div>UET</div>
//                     </div>
//                 </div>
//                </div>
//                <div className="w-full sm:w-[40%] flex items-center justify-center  md:border-l border-slate-900 ">
//                 <div className="flex sm:flex-col items-center justify-center space-x-8">
//                     <div className="text-xl ">Rs 63,500</div>
//                     <div onClick={()=>handleClickSelectFlight(data.airline,data.id)} className="border px-6 py-1 rounded-xl  bg-slate-800 text-white hover:bg-slate-700 hover:cursor-pointer">Select</div>
//                 </div>
//                 </div>
//               </div>
//                <div>🖤</div>
//              </div>
//             )}
            
           
          
//                  </div>


// {/* Show large side bae */}

// {/* Filter */}
//  <div className={`${  showSideBar &&  !showSideBarsort && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

//         <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBar ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>

// <div  onClick={()=>setShowSideBar(false)} className="text-2xl p-1  hover:cursor-pointer"> <ion-icon name="arrow-back-outline"></ion-icon> </div>
// <SideBarFilter range={range} setRange={setRange}  setCheckStops={setCheckStops} />
//         </div>
//      </div>
//      {/* SORT */}
//  <div className={`${  showSideBarsort && !showSideBar  && 'w-full h-full flex items-center justify-center bg-white lg:hidden' }`}>

//         <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSideBarsort ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] sm:w-[400px] top-0 right-0` }>

// <div  onClick={()=>setShowSideBarSort(false)} className="text-2xl p-1  hover:cursor-pointer"> <ion-icon name="arrow-back-outline"></ion-icon> </div>
// <SideBarSort checkSort={checkSort}  setCheckSort={setCheckSort} />
//         </div>
//      </div>



        
//         {/* Show flight */}
// <div className={`${  showSelectFlight  && 'w-full h-full flex items-center justify-center bg-white ' }`}>
// <div className={`flex flex-col transform transition-transform  fixed bg-white z-50 ease-in-out duration-500 ${showSelectFlight ? 'translate-x-0' :'translate-x-full' } shadow-2xl    h-[100vh] w-[100vw] top-0 left-0` }>

//                  <ShowSelectedFlightFinal id={id} data={filterArray} checkAirline={checkAirline}  country={country} depart={depart} finalcity={finalcity} setShowSelectFlight={setShowSelectFlight}  /> 
//                  </div>
//         </div>
//          </div></div>
//     )
// }

// export default PlaneFlights
