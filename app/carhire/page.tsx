
import FastFactMainHotel from "./CarComponent/FastFactMainHotel"
import HotelNearOwncity from "./CarComponent/HotelNearOwnCity"
import HotelPlace from "./CarComponent/HotelPlace"
import ShowCurrentPageHotel from "./CarComponent/FastFactMainHotel"
import CustomHotelsLogo from "./CarComponent/CustomHotelsLogo"
import FightSearchBarLargeScreens from "../flights/FlightComponents/FightSearchBarLargeScreens"
import CarSearchbarLargeScreen from "./CarComponent/CarSearchbarLargeScreen"
import FlightSearchBarSmallSceen from "../flights/FlightComponents/FlightSearchBarSmallSceen"
import CarSearchbarSmallScreen from "./CarComponent/CarSearchbarSmallScreen"

// import CustomSearchBarHotel from "./CarComponent/CustomSearchBarCar"




function MainPageCar() {
    return (
  
  
  <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
         {/* <div className="bg-[#05203c] flex items-center justify-center w-full"><CustomSearchBarHotel/></div> */}
    
    {/*Search_bar  */}
    <div className="bg-[#05203c] flex items-center justify-center w-full">
     <div className="hidden md:block w-full "> <CarSearchbarLargeScreen/></div>
     <div className="md:hidden w-full "> <CarSearchbarSmallScreen/></div>
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
    