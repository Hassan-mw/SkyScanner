import DepartArray from '@/app/flights/FlightComponents/DepartArray';
import SearchFlights from '@/app/flights/FlightComponents/SearchFlights';
import DepartDetail from '@/app/flights/FlightComponents/DepartDetail';
import { fetAllCountry } from '@/app/API/countryApi';

const page = async ({ params }: { params: { flights: string; depart: string } }) => {
  const { flights, depart } = params;

  const [fromcountry, tocountry] = flights.split('-');
  const startingCountry = decodeURIComponent(fromcountry);
  const endCountry = decodeURIComponent(tocountry);

  const countryData = await fetAllCountry({ flights: startingCountry });

  return (
    <div className="w-full bg-red-600">
      <SearchFlights />
      <DepartArray
        flights={flights}
        startingCountry={startingCountry}
        depart={depart}
        cities={countryData.citynames}
      />
      <DepartDetail />
    </div>
  );
};

export default page;
