import { fetAllCountry } from "@/app/API/countryApi"
import CustomHotelsLogo from "../hotelsComponent/CustomHotelsLogo"
import CustomSearchBarHotel from "../hotelsComponent/CustomSearchBarhotel"
import FastFactCountryHotel from "./../hotelsComponent/FastFactCountryHotel"
import ShowCurrentPage from "./../hotelsComponent/ShowCurrentPage"
import ShowHotelHomeFilter from "./../hotelsComponent/ShowHotelHomeFilter"
import ShowHotelsArray from "./../hotelsComponent/ShowHotelsArray"
import ShowMapOption from "./../hotelsComponent/ShowMapOption"

 const page = async({params}:{params:{country:string}})=> {
   const {country}=await params
   const countryData = await fetAllCountry({ flights: country });

    return (


    <div className="w-full h-full flex flex-col space-y-10 items-center bg-white overflow-y-auto  overflow-x-hidden">
   {/* <CustomSearchBarHotel/> */}
   
    <div className=" w-full max-w-screen-xl flex flex-col   space-y-16 p-3  ">
      
    {/*//! Hottels Logo */}
    <ShowCurrentPage country={country}/>
    <CustomHotelsLogo  />
      


  
   <ShowMapOption country={country}/> 
   <ShowHotelHomeFilter/>
   {/*//! Hotels all */}
       <div className="flex  flex-col items-center justify-center w-full space-y-10">

       
       <ShowHotelsArray cities={countryData.citynames} country={country}  />
       {/* <ShowHotelsArray text="Visit hotel" country={country}/> */}
         </div> 
      

        <FastFactCountryHotel/>
            </div>
        </div>
   
     
 

    )
}

export default page








