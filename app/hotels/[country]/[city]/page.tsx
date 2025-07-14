import { fetchAllHotelsData } from "@/app/API/hotels";
import ShowAllHotelsFinal from "../../hotelsComponent/ShowAllHotelsFinal";

// Server component with dynamic route params
const Page = async ({ params }: { params: { country: string; city: string } }) => {
  const { country, city } = params;

  // Fetch hotel data based on country and city
  const data = await fetchAllHotelsData({ country, city });

  return (
    <div className="w-full h-full overflow-hidden">
      <ShowAllHotelsFinal data={data} country={country} />
    </div>
  );
};

export default Page;
