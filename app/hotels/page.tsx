
// import FastFactMainHotel from "../(hotelPageoptions)/FastFactMainHotel"
// import HotelNearOwncity from "../(hotelPageoptions)/HotelNearOwnCity"
// import HotelPlace from "../(hotelPageoptions)/HotelPlace"
// import ShowCurrentPageHotel from "../(hotelPageoptions)/ShowCurrentPageHotels"
// import CustomHotelsLogo from "../components/CustomHotelsLogo"
import CustomHotelsLogo from "./hotelsComponent/CustomHotelsLogo"
import CustomSearchBarHotel from "./hotelsComponent/CustomSearchBarCar"
import HotelNearOwncity from "./hotelsComponent/HotelNearOwnCity"
import ShowCurrentPageHotel from "./hotelsComponent/ShowCurrentPageHotel"



function MainPageHotel() {
    return (
      
      <div className="w-full h-full flex flex-col space-y-10 items-center  bg-white overflow-y-auto  overflow-x-hidden">
         <div className="bg-[#05203c] flex items-center justify-center w-full"><CustomSearchBarHotel/></div>
      <div className="flex flex-col items-start justify-start space-y-16 w-full p-2   max-w-screen-xl">
     <ShowCurrentPageHotel/>
 
      {/* //! Hotels Logo */}
      <CustomHotelsLogo  />
      </div>
      <div className="p-3 flex flex-col space-y-44 items-center w-full h-full bg-white max-w-screen-xl ">
        
         <div className="w-full "><HotelNearOwncity/></div>
       {/* <div className="w-full "><HotelPlace/></div> */}
       <div className="w-full flex items-center justify-center">
            {/* <FastFactMainHotel/> */}
        </div> 
      </div>
      </div>

    )
}

export default MainPageHotel
