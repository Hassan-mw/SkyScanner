import React from 'react';
import SearchFlights from '../FlightComponents/SearchFlights';
import FlightsArray from '../FlightComponents/FlightsArray';
import FlightDetails from '../FlightComponents/FlightDetails';
import { fetAllCountry } from '@/app/API/countryApi';

const page = async ({ params }:{params:{flights:string}}) => {
  const { flights } = params;

  // Split and decode country names
  const [fromcountry, tocounry] = flights.split('-');
  const startingCountry = decodeURIComponent(fromcountry);
  const endCountry = decodeURIComponent(tocounry);

  // Fetch country data (e.g., city names)
  const countryData = await fetAllCountry({ flights: endCountry });

  return (
    <div className="w-full b">
      <SearchFlights />
      <FlightsArray
        fromcountry={startingCountry}
        tocountry={endCountry}
        cities={countryData.citynames}
      />
      <FlightDetails />
    </div>
  );
};

export default page;
