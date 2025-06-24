// import PlaneContenents from "../(flightpageOptions)/PlaneContenents"
// import PlanePlace from "../(flightpageOptions)/PlanePlace"

import FastFactMainHotel from "./CarComponent/FastFactMainHotel"
import HotelNearOwncity from "./CarComponent/HotelNearOwnCity"
import HotelPlace from "../(hotelPageoptions)/HotelPlace"
// import CustomSearchBar from "../components/CustomSearchBar"
import CustomSearchBarHotel from "../components//CustomSearchBarCar"
// import CustomShowDetails from "../utils/CustomShowDetails"
import ShowCurrentPageHotel from "../(hotelPageoptions)/ShowCurrentPageHotels"
import CustomHotelsLogo from "../components/CustomHotelsLogo"

function MainPageCar() {
    return (
  //     <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
  //     <div className="bg-blue-950 flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
  //     <div className="flex flex-col items-center justify-center space-y-16 w-full p-4   max-w-screen-xl">
  //     <CustomShowDetails curPage={"Car"}  mainPage={"Home"}> 
  //    <div className="flex sm:flex-col space-x-3 lg:flex-row ">
  //    <div className="text-lg "><ion-icon name="search-outline"></ion-icon></div>
  //     <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
  //     </div>
  //     <div className="flex sm:flex-col space-x-3 lg:flex-row ">
  //     <div className="text-lg"><ion-icon name="pricetag-outline"></ion-icon></div>
  //   <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
  //      </div>
  //         <div className="flex sm:flex-col space-x-3 lg:flex-row ">
  //     <div className="text-lg"><ion-icon name="bed-outline"></ion-icon></div>
  //     <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
  //       </div>
  // </CustomShowDetails>
  // {/* Hottels Logo */}
  // <div className="flex flex-col space-y-3 items-center justify-center w-full  max-w-screen-xl">
  //     <div className="w-full flex items-start  text-xl sm:text-2xl md:text-3xl font-semibold">Compare hotels across your favourite brands</div>
     
  //        <div className="flex  items-center justify-between w-full">
  //      <div className=" bg-white"><img className="w-28" src="/travigo1.jpeg"/></div>
  //    <div className=" bg-white"><img className="w-36" src="/accord1.jpeg"/></div>
  //    <div className=" "><img className="w-36" src="/Lufthansa.jpeg"/></div>
  //      </div>
  //      <div className="flex items-center justify-between w-full">
  //     <div className=" bg-white"><img className="w-36" src="/hyaat.jpeg"/></div>
  //    <div className=" bg-white"><img className="w-36 h-24" src="/Expedia.jpeg"/></div>
  //    <div className=" bg-white"><img className="w-36" src="/bookingLogo1.jpeg"/></div>
  //       </div>
    
  //  </div>
  //     </div>
  //     <div className="p-3 flex flex-col space-y-44 items-center w-full h-full bg-white max-w-screen-xl ">
        
  //        <div className="w-full "><HotelNearOwncity/></div>
  //      <div className="w-full "><HotelPlace/></div>
  //      {/* <div className="border p-5 w-full bg-green-400 flex">
  //        <div>lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</div>
  //         <div className="float-right p-4 rounded-full bg-red-700">h</div>
  //     </div>*/}
  //      <div className="w-full flex items-center justify-center"> 
  //           <FastFactMainHotel/>
  //       </div> 
  //     </div>
    
  //     </div>
  <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
         <div className="bg-[#05203c] flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
      <div className="flex flex-col items-center justify-center space-y-16 w-full p-2   max-w-screen-xl">
     <ShowCurrentPageHotel/>
 
      {/* //! Hotels Logo */}
      <CustomHotelsLogo text='Compare hotels across your favourite brands' />
      </div>
      <div className="p-3 flex flex-col space-y-44 items-center w-full h-full bg-white max-w-screen-xl ">
        
         <div className="w-full "><HotelNearOwncity/></div>
       <div className="w-full "><HotelPlace/></div>
       <div className="w-full flex items-center justify-center">
            <FastFactMainHotel/>
        </div> 
      </div>
      </div>

    )
}

export default MainPageCar
    //     <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto overflow-x-hidden ">
    //     <div className="bg-blue-950 flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
    //     <div className="flex flex-col items-center justify-center space-y-16 w-full p-4   max-w-screen-xl">
    //     <CustomShowDetails curPage={"Hotels"} mainPage={"Home"}> 
    //    <div className="flex sm:flex-col space-x-3 lg:flex-row">
    //    <div className="text-lg "><ion-icon name="search-outline"></ion-icon></div>
    //     <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
    //     </div>
    //     <div className="flex sm:flex-col space-x-3 lg:flex-row ">
    //     <div className="text-lg"><ion-icon name="pricetag-outline"></ion-icon></div>
    //   <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
    //      </div>
    //         <div className="flex sm:flex-col space-x-3 lg:flex-row ">
    //     <div className="text-lg"><ion-icon name="bed-outline"></ion-icon></div>
    //     <div className="">Find the best-value hotel for your dates, search by price or preferences</div>
    //       </div>
    // </CustomShowDetails>
    // {/* Hottels Logo */}
    // <div className="flex flex-col space-y-3 items-center justify-center w-full  max-w-screen-md">
    //     <div className="w-full flex items-start text-xl sm:text-2xl md:text-3xl font-semibold">Compare hotels across your favourite brands</div>
       
    //        <div className="flex  items-center justify-between w-full">
    //      <div className=" bg-white"><img className="w-28" src="travigo1.jpeg"/></div>
    //    <div className=" bg-white"><img className="w-36" src="accord1.jpeg"/></div>
    //    <div className=" "><img className="w-36" src="Lufthansa.jpeg"/></div>
    //      </div>
    //      <div className="flex items-center justify-between w-full">
    //     <div className=" bg-white"><img className="w-36" src="hyaat.jpeg"/></div>
    //    <div className=" bg-white"><img className="w-36 h-24" src="Expedia.jpeg"/></div>
    //    <div className=" bg-white"><img className="w-36" src="bookingLogo1.jpeg"/></div>
    //       </div>
      
    //  </div>
    //     </div>
    //     {/* Hotels all */}
    //     <div className="p-3 flex flex-col space-y-44 items-center w-full h-full bg-white max-w-screen-xl ">

    //    <div className="w-full "><HotelNearOwncity/></div>
    //    <div className="w-full "><HotelPlace/></div>
    //     {/* Below Hotels */}
    //     <div className="w-full flex items-center justify-center">
    //         <BelowHotel/>
    //     </div> 
    //     </div>
       
    //     </div>