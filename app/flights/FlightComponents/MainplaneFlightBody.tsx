import { Jost } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { IoMdAirplane } from 'react-icons/io';

const jost = Jost({
  subsets: ['latin'],
  weight: ['500'],
});

const MainplaneFlightBody = ({ data, handleClickSelectFlight }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-3 p-3">
      {data.map((flight, index) => (
        <div
          key={index}
          className="w-full p-2 bg-white shadow-lg rounded-md flex items-center justify-center space-x-4 border"
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center justify-center space-y-1">
            {/* Plane Details */}
            <div className="w-full sm:pr-3 border-b sm:border-b-0 pb-5 lg:max-w-[95%] flex flex-col sm:col-span-2 items-center justify-center space-y-1 md:space-y-0 md:space-x-2">
              <div className="w-full flex md:flex-col md:space-y-4 items-center justify-center gap-x-12">
                {/* Airline Logo + Name */}
                <div className="md:w-full flex items-center justify-start gap-x-6">
                  <span className={`${jost.className} text-xl hidden md:block text-black`}>
                    {flight.planename}
                  </span>
                  <Image
                    height={90}
                    width={90}
                    src={`/${flight.planelogo}`}
                    alt="plane-logo"
                  />
                </div>

                {/* Time & Stop Info */}
                <div className="w-full flex items-center justify-center space-x-3">
                  {/* Start Time */}
                  <div className="flex flex-col items-start space-y-1">
                    <span className="font-semibold">{flight.starttime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                  </div>

                  {/* Route Info */}
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xs">{flight.totaltime} hours</span>
                    <div className="w-full flex items-center justify-center space-x-4">
                      <span className="border-t-2 w-full border-slate-200"></span>
                      <span className="rotate-90">
                        <IoMdAirplane />
                      </span>
                    </div>
                    <span className="text-xs">{flight.stop}</span>
                  </div>

                  {/* End Time */}
                  <div className="flex flex-col items-start space-y-1">
                    <span className="font-semibold">{flight.endtime}</span>
                    <span className="text-slate-400 text-xs">UET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="w-full sm:col-span-1 flex items-end justify-end sm:items-center sm:justify-center sm:border-l border-[#e5e5e5] py-2">
              <div className="w-full flex sm:flex-col items-center justify-between gap-2">
                {/* Price Info */}
                <div className="flex flex-col items-end">
                  <p className="text-[10px] text-slate-500">1 deal</p>
                  <span className="text-xl">Rs {flight.price}</span>
                  <p className="text-[10px] text-slate-500">Rs 1,424 total</p>
                </div>

                {/* Select Button */}
                <div
                  onClick={() => handleClickSelectFlight(flight.airline, flight.id)}
                  className="px-3 py-1 gap-x-2 flex items-center justify-center bg-[#05203c] text-white rounded-md hover:cursor-pointer"
                >
                  <span>Select</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainplaneFlightBody;
