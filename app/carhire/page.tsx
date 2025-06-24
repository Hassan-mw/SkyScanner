
import FastFactMainHotel from "./CarComponent/FastFactMainHotel"
import HotelNearOwncity from "./CarComponent/HotelNearOwnCity"
import HotelPlace from "./CarComponent/HotelPlace"
import CustomSearchBarHotel from "./CarComponent/CustomSearchBarCar"
import ShowCurrentPageHotel from "./CarComponent/FastFactMainHotel"
import CustomHotelsLogo from "./CarComponent/CustomHotelsLogo"
import FightSearchBarLargeScreens from "../flights/FlightComponents/FightSearchBarLargeScreens"
import CarSearchbarLargeScreen from "./CarComponent/CarSearchbarLargeScreen"
import FlightSearchBarSmallSceen from "../flights/FlightComponents/FlightSearchBarSmallSceen"

function MainPageCar() {
    return (
  
  
  <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
         {/* <div className="bg-[#05203c] flex items-center justify-center w-full"><CustomSearchBarHotel/></div> */}
    
    {/*Search_bar  */}
    <div className="bg-[#05203c] flex items-center justify-center w-full">
     <div className="hidden md:block w-full "> <CarSearchbarLargeScreen/></div>
     <div className="md:hidden w-full "> <FlightSearchBarSmallSceen/></div>
    </div>

      <div className="flex flex-col items-center justify-center space-y-16 w-full p-2   max-w-screen-xl">
 
      {/* //! Hotels Logo */}
      <CustomHotelsLogo text='Compare hotels across your favourite brands' />
      </div>
      <div className="p-3 flex flex-col space-y-44 items-center w-full h-full bg-white max-w-screen-xl ">
        
         {/* <div className="w-full "><HotelNearOwncity/></div> */}
       {/* <div className="w-full "><HotelPlace/></div> */}
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