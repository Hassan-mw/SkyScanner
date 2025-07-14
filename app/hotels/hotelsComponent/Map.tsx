'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Static hotel points
const points = [
  { lat: 21.4225, lng: 39.8262 },
  { lat: 21.5423, lng: 39.1732 },
  { lat: 21.5760, lng: 39.1565 },
  { lat: 21.5921, lng: 39.1761 },
  { lat: 21.5757, lng: 39.1793 },
  { lat: 21.5104, lng: 39.1845 },
  { lat: 21.5916, lng: 39.1570 },
  { lat: 21.5400, lng: 39.1495 },
  { lat: 21.5436, lng: 39.1725 }
];

// Custom Leaflet marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({data}) => {
  const center = { lat: 31.5639, lng: 74.3203}; // You can adjust this center
 
      const x = data?.map(item => ({
    lat: parseFloat(item.latitude),
    lng: parseFloat(item.longitude),
  }));
  console.log(x)
  return (
    <div className="w-full h-[500px]">
      <MapContainer center={[center.lat, center.lng]} zoom={13} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {x?.map((data, index) => (
          <Marker key={index} position={[data.lat, data.lng]} icon={customIcon}>
            <Popup>📍 Hotel {index + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
