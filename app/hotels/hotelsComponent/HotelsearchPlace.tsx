import { Jost } from "next/font/google";
import { Dispatch, SetStateAction, useState } from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
 

const locationArray = [
  { country: "Pakistan", city: "Lahore", province: "Punjab" },
  { country: "Pakistan", city: "Karachi", province: "Sindh" },
  { country: "Pakistan", city: "Islamabad", province: "Punjab" },
  { country: "Pakistan", city: "Multan", province: "Punjab" },
  { country: "Pakistan", city: "Bahawalpur", province: "Punjab" },
  { country: "Pakistan", city: "Swat", province: "Khyber Pakhtunkhwa" },
  { country: "Pakistan", city: "Skardu", province: "Gilgit-Baltistan" }
];


const jost = Jost({
  weight: ["400"],
  subsets: ["latin"],
});

function HotelsearchPlane({
  value,
  setValue,
  country,
  setCountry
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}) {
  const [selectPlace, setSelectplace] = useState("");

  // Handle input selection
  function handlePlace({data}: {data:{city:string,country:string}}) {
    setValue(data.city);
    setSelectplace(data.city);
    setCountry(data.country)
  }

  // Clear input
  function handleClearValue() {
    setValue("");
  }

  // Filter hotels based on input
  const filteredHotel =
    value === ""
      ? locationArray
      : locationArray.filter((data) =>
          data.city.toLowerCase().includes(value.toLowerCase())
        );

  return (
    <div className="h-[500px] truncate z-30 w-full min-w-[400px] md:max-w-full bg-white flex flex-col items-center justify-start space-y-5 overflow-y-auto">
      {/* Search Input */}
      <div className="bg-white px-4 py-4 rounded-xl w-full flex items-center justify-between space-x-4 max-w-screen-lg">
        <div className="w-full border-b border-slate-700">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full focus:outline-none text-lg"
            type="text"
            placeholder="Search hotel name"
          />
        </div>
      </div>

      {/* Hotel List */}
      <div className="w-full flex flex-col items-start space-y-3">
        {filteredHotel.map((data, index) => (
          <div
            key={index}
            className={`flex w-full space-x-3 p-4 border-b border-slate-300 cursor-pointer `}
            onClick={() => handlePlace({data})}
          >
            <span className="text-[#626971]">
             <PiBuildingApartmentFill />
            </span>
            <div className="flex flex-col">
              <span className={`${jost.className}  h-7 text-xl`}>{data.city}</span>
              <div style={{ fontWeight: 200 }} className="flex items-center text-gray-900 text-[11px]">
                <span className={`${jost.className}`}>
                  {data.province}
                </span>
                ,{" "}
                <span className={`${jost.className} `}>
                  {data.country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelsearchPlane;

