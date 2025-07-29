import { fetchAllHotelsData } from "@/app/API/hotels";
import ShowAllHotelsFinal from "../../hotelsComponent/ShowAllHotelsFinal";

// Server component with dynamic route params
const Page = async ({ params ,searchParams}: { params: { country: string; city: string },searchParams:URLSearchParams }) => {
  const { country, city } = params;
  const paramsData=await searchParams;
  // Fetch hotel data based on country and city
  const data = await fetchAllHotelsData({ paramsData,country, city });

  return (
    <div className="w-full h-full overflow-hidden">
      <ShowAllHotelsFinal data={data} country={country} />
    </div>
  );
  
};

export default Page;
