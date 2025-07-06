'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Jost } from 'next/font/google';
import { LuExternalLink } from 'react-icons/lu';

const jost = Jost({
  weight: ['500'],
  subsets: ['latin'],
});

const DepartArray = ({
  startingCountry,
  flights,
  depart,
  cities,
}: {
  startingCountry: string;
  depart: string;
  flights: string;
  cities: string[];
}) => {
  return (
    <div className="w-full flex items-center justify-center bg-[#eff3f8] p-5">
      <div className="w-full max-w-screen-xl flex flex-col space-y-7 py-8 items-center justify-center">
        {/* Hero Section */}
        <div className="w-full flex flex-col items-start justify-start space-y-2">
          <div className="flex flex-col items-start justify-start space-y-1">
            <h1 className={`${jost.className} text-2xl sm:text-3xl w-full font-semibold`}>
              Select Depart Location
            </h1>
            <p
              style={{ fontWeight: 300 }}
              className={`${jost.className} text-sm text-gray-600`}
            >
              Choose your preferred departure city in {startingCountry} for flights to {depart}.
            </p>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link
              key={index}
              href={`/flights/${flights}/departlocation/${depart}/avaliableflights/${city}`}
              className="hover:cursor-pointer h-32 sm:h-72 shadow-sm hover:shadow-lg duration-500 flex sm:flex-col items-center justify-center w-full border rounded-md"
            >
              {/* Image */}
              <Image
                height={1000}
                width={1000}
                src={`/${city}.jpeg`}
                className="h-full sm:max-h-[75%] rounded-l-md sm:rounded-bl-none sm:rounded-t-md object-cover w-full max-w-[70%] sm:max-w-full"
                alt={city}
              />

              {/* City Name */}
              <div className="w-[30%] sm:w-full h-full sm:max-h-[25%] flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-between bg-white p-3 rounded-r-md sm:rounded-none sm:rounded-b-md">
                <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>
                  {startingCountry}
                </span>
                <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>
                  {city}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartArray;
