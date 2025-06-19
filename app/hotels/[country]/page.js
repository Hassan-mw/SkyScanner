// import ShowCarFlight from "@/app/(hotelPageoptions)/ShowCarFlight"
// import ShowHotelHomeFilter from "@/app/(hotelPageoptions)/ShowHotelHomeFilter"
// import ShowHotelsArray from "@/app/(hotelPageoptions)/ShowHotelsArray"
// import ShowMapOption from "@/app/(hotelPageoptions)/ShowMapOption"
// import PlaneContenents from "../(flightpageOptions)/PlaneContenents"
// import PlanePlace from "../(flightpageOptions)/PlanePlace"
// import BelowHotel from "../(hotelPageoptions)/BelowHotel"
// import HotelNearOwncity from "../(hotelPageoptions)/HotelNearOwnCity"
// import HotelPlace from "../(hotelPageoptions)/HotelPlace"
// import CustomSearchBar from "../components/CustomSearchBar"
// import CustomSearchBarHotel from "../components/CustomSearchBarHotel"
// import CustomShowDetails from "../utils/CustomShowDetails"

import FastFactCountryHotel from "@/app/(hotelPageoptions)/FastFactCountryHotel"
import ShowCarFlight from "@/app/(hotelPageoptions)/ShowCarFlight"
import ShowCurrentPage from "@/app/(hotelPageoptions)/ShowCurrentPage"
import ShowCurrentPageHotel from "@/app/(hotelPageoptions)/ShowCurrentPageHotels"
import ShowHotelHomeFilter from "@/app/(hotelPageoptions)/ShowHotelHomeFilter"
import ShowHotelsArray from "@/app/(hotelPageoptions)/ShowHotelsArray"
import ShowMapOption from "@/app/(hotelPageoptions)/ShowMapOption"
import CustomHotelsLogo from "@/app/components/CustomHotelsLogo"
import CustomSearchBarHotel from "@/app/components/CustomSearchBarHotel"
import CustomShowDetails from "@/app/utils/CustomShowDetails"
import { Link } from "lucide-react"

 async function page({params}) {
   const {country}=await params
const arr=[,1,1,1,11,1,1,1,1,1,1]
//    var map = L.map('map').setView([51.505, -0.09], 13);
    return (


    <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
    <div className="bg-blue-950 flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
   
    <div className="flex flex-col items-center justify-center  space-y-16 w-full px-4 max-w-screen-xl">
     
  {/*//! Hottels Logo */}
 <div className="w-full flex items-center justify-center"> <ShowCurrentPage country={country}/></div>
   <div className="w-full"> <CustomHotelsLogo text={`Trust  ${country} hotel providers `} /></div>
      </div>


  {/*//! Hotels all */}
   
  <div className="w-full h-full flex flex-col items-center  space-y-5 py-14  max-w-screen-xl px-4">
  <div className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in {country}</div>
    
    <div className="w-full h-[300px]">
        <ShowMapOption country={country}/> 
        </div> 
   <ShowHotelHomeFilter/>
       <div className="flex  flex-col items-center justify-center w-full space-y-10">

          {  arr.map((data,index)=>
         <div key={index} className="w-full" >
       <ShowHotelsArray text="Visit hotel" country={country}/>
         </div> 
        )}

                <FastFactCountryHotel/>
            </div>
        </div>
   
     
      </div>

    )
}

export default page









// import ShowCarFlight from "@/app/(hotelPageoptions)/ShowCarFlight"
// import ShowHotelHomeFilter from "@/app/(hotelPageoptions)/ShowHotelHomeFilter"
// import ShowHotelsArray from "@/app/(hotelPageoptions)/ShowHotelsArray"
// import ShowMapOption from "@/app/(hotelPageoptions)/ShowMapOption"

//  async function page({params}) {
//    const {country}=await params
// const arr=[,1,1,1,11,1,1,1,1,1,1]
// //    var map = L.map('map').setView([51.505, -0.09], 13);
//     return (
// <div className="w-full h-full flex flex-col items-center justify-centerspace-y-5 py-14  max-w-screen-xl p-5">
//    <ShowMapOption country={country}/>
//    <ShowHotelHomeFilter/>
//             <div className="flex flex-col items-center justify-center w-full space-y-10">
           
//              {/* Hotels */}
         
//                {/* SinglrHotel */}
//           {  arr.map((data,index)=>
//          <ShowHotelsArray/>
        
//         )   }
           
//    <ShowCarFlight/>
              
//             </div>
//         </div>
//     )
// }

// export default page
