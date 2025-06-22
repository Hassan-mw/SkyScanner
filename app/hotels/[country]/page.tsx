import CustomHotelsLogo from "../hotelsComponent/CustomHotelsLogo"
import CustomSearchBarHotel from "../hotelsComponent/CustomSearchBarCar"
import FastFactCountryHotel from "./../hotelsComponent/FastFactCountryHotel"
import ShowCurrentPage from "./../hotelsComponent/ShowCurrentPage"
import ShowHotelHomeFilter from "./../hotelsComponent/ShowHotelHomeFilter"
import ShowHotelsArray from "./../hotelsComponent/ShowHotelsArray"
import ShowMapOption from "./../hotelsComponent/ShowMapOption"

 async function page() {
  //  const {country}=await params
const arr=[,1,1,1,11,1,1,1,1,1,1]
//    var map = L.map('map').setView([51.505, -0.09], 13);
const country="Paksitan"
    return (


    <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
    <div className="bg-blue-950 flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
   
    <div className="flex flex-col items-center justify-center  space-y-16 w-full px-4 max-w-screen-xl">
     
  {/*//! Hottels Logo */}
 <div className="w-full flex items-center justify-center"> <ShowCurrentPage country={country}/></div>
   <div className="w-full"> <CustomHotelsLogo  /></div>
      </div>


  {/*//! Hotels all */}
   
  <div className="w-full h-full flex flex-col items-center  space-y-5 py-14  max-w-screen-xl px-4">
  <div className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in ++</div>
    
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
