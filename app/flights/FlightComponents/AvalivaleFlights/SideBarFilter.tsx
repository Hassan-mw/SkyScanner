'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Jost } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { CiFilter } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";

const jost = Jost({
  subsets: ['latin'],
  weight: ['500'],
});

interface    DataTypeSideBarFilter {
  cabinBag:boolean;
  setCabinBag:Dispatch<SetStateAction<boolean>>;
  checkStops:string;
  setCheckStops:Dispatch<SetStateAction<string>>;
  cabinBagChecked:boolean;
  setCabinBagChecked:Dispatch<SetStateAction<boolean>>;
  checkAirline:string
  setCheckAirline:Dispatch<SetStateAction<string>>;
  totaltime:string;
  setTotaltime:Dispatch<SetStateAction<string>>;
}


function SideBarFilter({
  cabinBag,
  setCabinBag,
  checkStops,
  setCheckStops,
  cabinBagChecked,
  setCabinBagChecked,
  checkAirline,
  setCheckAirline,
  totaltime,
  setTotaltime,
 
}:DataTypeSideBarFilter) {

  function handleChangeStop(data:string) {
    setCheckStops(data);
  }

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start space-y-2 pt-2 lg:border-r-2 lg:p-4">
      <div className={`${jost.className} w-full flex items-center lg:justify-start justify-center gap-x-2 lg:border-b border-gray-400`}>
        <CiFilter size={20} />
        <span className="text-xl">Filters</span>
      </div>

      {/* Results */}
      <div className="bg-[#05203c] flex items-center justify-between w-full lg:hidden p-3">
        <span className={`${jost.className} text-md font-medium text-white`} style={{ fontWeight: 300 }}>
          Result: 3 / 9
        </span>
        <span className={`${jost.className} text-md font-medium text-white`} style={{ fontWeight: 300 }}>
          Reset all filters
        </span>
      </div>

      <Accordion type="single" collapsible className="w-full p-3 space-y-4">
        {/* Stop Filter */}
        <AccordionItem value="item-1">
          <AccordionTrigger className={`${jost.className} text-lg pb-1 hover:ring-0`}>Stop</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3 p-3 w-full">
              {['All', 'Direct', '1 Stop', '2 Stop'].map((stop, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <input
                    className="size-3"
                    name="stops"
                    type="radio"
                    checked={checkStops === stop}
                    value={stop}
                    onChange={(e) => handleChangeStop(e.target.value)}
                  />
                  <span className="font-medium text-xs">{stop === '2 Stop' ? '2+ Stop' : stop}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Duration Filter */}
        <AccordionItem value="item-2">
          <AccordionTrigger className={`${jost.className} text-lg pb-1`}>Duration</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 w-full">
              <span className="text-xs">{totaltime} hours</span>
              <input
                className="w-full"
                type="range"
                min="1"
                max="12"
                value={totaltime}
                onChange={(e) => setTotaltime(e.target.value)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Airline Filter */}
        <AccordionItem value="item-3">
          <AccordionTrigger className={`${jost.className} text-lg`}>Airlines</AccordionTrigger>
          <AccordionContent className="pb-1 border-b">
            <div className="flex flex-col space-y-2 p-3 w-full">
              {[
                { name: 'All', price: 'All Prices' },
                { name: 'Fly Jinnah', price: 'from Rs 34,000' },
                { name: 'PIA', price: 'from Rs 37,000' },
              ].map((airline, idx) => (
                <div key={idx} className="flex items-center space-x-5">
                  <input
                    className="size-5"
                    name="airline"
                    type="radio"
                    value={airline.name}
                    checked={checkAirline === airline.name}
                    onChange={(e) => setCheckAirline(e.target.value)}
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-xs">{airline.name}</span>
                    <span className="text-[9px] text-slate-500">{airline.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Baggage Filter */}
        <AccordionItem value="item-4">
          <AccordionTrigger className={`${jost.className} text-lg`}>Baggage</AccordionTrigger>
          <AccordionContent className="pb-1 border-b">
            <div className="flex flex-col space-y-2 p-3 w-full">
              <div className="flex items-center justify-start gap-x-4">
                <input
                  className="size-3"
                  type="checkbox"
                  checked={cabinBag}
                  onChange={(e) => setCabinBag(e.target.checked)}
                />
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">Cabin bag</span>
                  <IoLockClosed />
                </div>
              </div>
              <div className="flex items-center justify-start gap-x-4">
                <input
                  className="size-3"
                  type="checkbox"
                  checked={cabinBagChecked}
                  onChange={(e) => setCabinBagChecked(e.target.checked)}
                />
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">Checked bag</span>
                  <IoLockClosed />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SideBarFilter;
