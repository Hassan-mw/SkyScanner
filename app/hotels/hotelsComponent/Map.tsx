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


const Map = ({country}:{country:string}) => {
  return (
      <div className='w-full h-full  space-y-3 p-1 border-4 border-white rounded-md'>
        
    
    <MapContainer className='h-full' center={[48.8566,2.3522]} zoom={13}>
       <TileLayer 
        
          attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
       />


   
    </MapContainer>
 
        </div>

            
  )
}

export default Map