'use client'
// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import {MapContainer,TileLayer}  from "react-leaflet"
import "leaflet/dist/leaflet.css"

const containerStyle = {
  width: '100%',
  height: '100%'
};

const centerDefault = {
  
  lat: 21.5400,  
  lng: 39.1495
};
const points = [
  { 
    lat: 21.4225,  
    lng: 39.8262,  // Jeddah by Elef
  },
  { 
    lat: 21.5423,  
    lng: 39.1732,  // Velvet Hotel, Jeddah
  },
  { 
    lat: 21.5760,  
    lng: 39.1565,  // WA Hotel, Jeddah
  },
  { 
    lat: 21.5921,  
    lng: 39.1761,  // Movenpick Hotel Jeddah
  },
  { 
    lat: 21.5757,  
    lng: 39.1793,  // InterContinental Jeddah
  },
  { 
    lat: 21.5104,  
    lng: 39.1845,  // Radisson Blu Hotel, Jeddah
  },
  { 
    lat: 21.5916,  
    lng: 39.1570,  // The Ritz-Carlton, Jeddah
  },
  { 
    lat: 21.5400,  
    lng: 39.1495,  // Hilton Jeddah
  },
  { 
    lat: 21.5436,  
    lng: 39.1725,  // Jeddah Marriott Hotel
  }
];


function ShowMapOption({country}:{country:string}) {
    return (
      <div className='w-full h-[360px]  space-y-3'>
        
   <h1 className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in {country}</h1>   
   <MapContainer className='h-[300px] ' center={[48.8566,2.3522]} zoom={13}>
      <TileLayer 
        
         attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />


   
   </MapContainer>
 
  <div id="map" className='h-[500px] w-[500px]'></div>




   {/* <LoadScript googleMapsApiKey="AIzaSyAGzV9Dsxun971k4mu6QMfG3yF1Fbar9gE">
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={centerDefault}
        zoom={11}
      >
        
      {points.map((data,index)=>  <MarkerF key={index} position={data} ></MarkerF> )}
      </GoogleMap>
    </LoadScript> */}
       </div>
        // <div className="w-full h-full ">
      //   <div className="w-full h-full   overflow-hidden  rounded-2xl flex flex-col justify-between"> {/* Increased height */}
       
      // {/* <div className=" w-full overflow-hidden  min-h-[100vh] "><Map/></div> */}

      //   <div>
     
      //   </div>
      //   {/* <div className=" absolute  top-1/2  left-1/2">
      // <div className="bg-slate-800 p-2 max-w-[300px] rounded-sm hover:bg-slate-700 flex items-center hover:cursor-pointer justify-center space-x-3 " > 
      //     <div className=" text-white text-base">Explore map</div> 
      //      <div className="text-xl -rotate-45 text-white "><ion-icon name="log-out-outline"></ion-icon></div>
            
      //       </div>
      // </div> */}
      
      //       </div>
            // </div>
            
    )
}

export default ShowMapOption
