import React from 'react';
import { FetchAllFilterData } from '@/app/API/flightFilterApi';
import { FetchAllPlane, FetchPlaneById } from '@/app/API/PlaneApi';
import AvaliableFlightDataChanger from '@/app/flights/FlightComponents/AvalivaleFlights/AvaliableFlightDataChanger';
import PlaneFlights from '@/app/flights/FlightComponents/PlaneFlights';

interface PageProps {
  params: {
    flights: string;
    depart: string;
    finalcity: string;
  };
  searchParams: URLSearchParams;
}

const Page = async ({ params, searchParams }: PageProps) => {
  const { flights, depart, finalcity } = params;

  const [fromCountry, toCountry] = flights.split('-');
  const startingCountry = decodeURIComponent(fromCountry);
  const endCountry = decodeURIComponent(toCountry);
  const startingCity = finalcity;
  const endingCity = depart;
  const paramsData=await searchParams

  const planeData = await FetchAllFilterData({ paramsData});
  console.log(planeData,'=+++++++++++++')
  return (
    <div className="w-full min-h-[80vh] bg-[#eff3f8] flex flex-col items-center justify-start">
      {/* Flight Search Filter Header */}
      <AvaliableFlightDataChanger />

      {/* Main Content Container */}
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center space-y-5">
          <div className="w-full h-full py-8">
            <PlaneFlights
              planeData={planeData}
              startingCountry={startingCountry}
              endCountry={endCountry}
              startingCity={startingCity}
              endingcity={endingCity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
