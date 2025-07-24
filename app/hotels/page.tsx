import { fetchAllHotelsData } from "../API/hotels";
import CustomHotelsLogo from "./hotelsComponent/CustomHotelsLogo";
import CustomSearchBarHotel from "./hotelsComponent/CustomSearchBarhotel";
import FastFactMainHotel from "./hotelsComponent/FastFactMainHotel";
import HotelNearOwncity from "./hotelsComponent/HotelNearOwnCity";
import HotelPlace from "./hotelsComponent/HotelPlace";
import ShowCurrentPageHotel from "./hotelsComponent/ShowCurrentPageHotel";

const Page = async ({params}:{params:URLSearchParams}) => {
  return (
    <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto overflow-x-hidden">
      
      {/* Search Bar */}
      <div className="bg-[#05203c] flex items-center justify-center w-full">
        <CustomSearchBarHotel  params={params}/>
      </div>

      {/* Page Heading Section */}
      <div className="flex flex-col items-start justify-start space-y-16 w-full p-2 max-w-screen-xl">
        <ShowCurrentPageHotel />
        <CustomHotelsLogo />
      </div>
      

      {/* Hotels Content Section */}
      <div className="p-3 flex flex-col space-y-20 items-center w-full h-full bg-white max-w-screen-xl">
        <HotelNearOwncity />
        <HotelPlace />
        <FastFactMainHotel />
      </div>
    </div>
  );
};

export default Page;
