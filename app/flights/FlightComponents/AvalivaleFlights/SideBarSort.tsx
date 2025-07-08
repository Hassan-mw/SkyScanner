'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dispatch, SetStateAction } from "react";

interface DataTypeSortt {
   checkSort:string;
   setCheckSort:Dispatch<SetStateAction<string>>;

}

function SideBarSort({ checkSort, setCheckSort }:DataTypeSortt) {
  const handleChangeSort = (e:any) => {
    setCheckSort(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start space-y-2">
      <div className="text-2xl font-semibold lg:text-3xl lg:border-b border-slate-900">
        Sort by
      </div>

      <div className="flex flex-col items-start justify-center w-full px-4 space-y-3">
        {/* Accordion explanation */}
        <Accordion type="single" collapsible className="w-full py-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>What does this mean?</AccordionTrigger>
            <AccordionContent className="text-slate-500">
              We think these flights offer the best combination of price and speed.
              We may also consider factors like number of stops and amount of hassle.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* All */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="sort"
            value=""
            checked={checkSort === ""}
            onChange={handleChangeSort}
            className="size-4 border-4"
          />
          <div className="pb-1">All</div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="sort"
            value="price"
            onChange={handleChangeSort}
            className="size-4 border-4"
          />
          <div className="flex flex-col items-start justify-center">
            <div>Price</div>
            <div className="text-[11px] text-slate-500">Cheapest first</div>
          </div>
        </div>

        {/* Total journey time */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="sort"
            value="totaltime"
            onChange={handleChangeSort}
            className="size-4 border-4"
          />
          <div className="flex flex-col items-start justify-center">
            <div>Total journey time</div>
            <div className="text-[11px] text-slate-500">Fastest first</div>
          </div>
        </div>

        {/* Person */}
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            name="sort"
            value="person"
            onChange={handleChangeSort}
            className="size-4 border-4"
          />
          <div className="flex flex-col items-start justify-center">
            <div>Person</div>
            <div className="text-[11px] text-slate-500">Number of persons</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarSort;
