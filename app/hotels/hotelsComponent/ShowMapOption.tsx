'use client'
// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import {MapContainer,TileLayer}  from "react-leaflet"
import "leaflet/dist/leaflet.css"
import Image from 'next/image';
import { CiMap } from 'react-icons/ci';
import { FaMap } from 'react-icons/fa6';

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
      <div className='w-full  h-[400px]  space-y-3'>
        
   <h1 className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in {country}</h1>   
    <div className='w-full relative  h-[300px]  space-y-3'>
    <Image height={1200} width={1200} className='w-full bg-green-500 rounded-md h-[300px] object-cover' src="/google_map_image.webp" alt='map_image'/>
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center '>

    <div className=' flex items-center justify-center gap-x-2 bg-[#05203c] p-3 rounded-md w-42 text-white '><FaMap/><span>Explore map</span></div>
    </div>
    </div>

   
   
     
            </div>
            
    )
}

export default ShowMapOption


// 'use client'
// // components/Map.js
// import React from 'react';
// import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
// import {MapContainer,TileLayer}  from "react-leaflet"
// import "leaflet/dist/leaflet.css"

// const containerStyle = {
//   width: '100%',
//   height: '100%'
// };

// const centerDefault = {
  
//   lat: 21.5400,  
//   lng: 39.1495
// };
// const points = [
//   { 
//     lat: 21.4225,  
//     lng: 39.8262,  // Jeddah by Elef
//   },
//   { 
//     lat: 21.5423,  
//     lng: 39.1732,  // Velvet Hotel, Jeddah
//   },
//   { 
//     lat: 21.5760,  
//     lng: 39.1565,  // WA Hotel, Jeddah
//   },
//   { 
//     lat: 21.5921,  
//     lng: 39.1761,  // Movenpick Hotel Jeddah
//   },
//   { 
//     lat: 21.5757,  
//     lng: 39.1793,  // InterContinental Jeddah
//   },
//   { 
//     lat: 21.5104,  
//     lng: 39.1845,  // Radisson Blu Hotel, Jeddah
//   },
//   { 
//     lat: 21.5916,  
//     lng: 39.1570,  // The Ritz-Carlton, Jeddah
//   },
//   { 
//     lat: 21.5400,  
//     lng: 39.1495,  // Hilton Jeddah
//   },
//   { 
//     lat: 21.5436,  
//     lng: 39.1725,  // Jeddah Marriott Hotel
//   }
// ];


// // function ShowMapOption({country}:{country:string}) {
// //     return (
// //       <div className='w-full h-[400px]  space-y-3'>
        
// //    <h1 className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in {country}</h1>   
// //    <MapContainer className='h-[1200px] ' center={[48.8566,2.3522]} zoom={13}>
// //       <TileLayer 
        
// //          attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //           url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// //       />


   
// //    </MapContainer>
 
// //        </div>

            
// //     )
// // }

// // export default ShowMapOption
