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
   <CustomSearchBarHotel/>
   
    <div className=" w-full max-w-screen-xl flex flex-col   space-y-16 p-3  ">
      
    {/*//! Hottels Logo */}
    <ShowCurrentPage country={country}/>
    <CustomHotelsLogo  />
      


  
   <ShowMapOption country={country}/> 
   <ShowHotelHomeFilter/>
   {/*//! Hotels all */}
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
