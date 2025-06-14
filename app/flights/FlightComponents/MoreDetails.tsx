import { Jost } from 'next/font/google';
import React from 'react'
import { MdError } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const jost=Jost({
    weight:['500'],
    subsets:['latin']
})



const MoreDetails = () => {
  return (
    <div className='w-full flex flex-col space-y-4'>

       {/* 1 */}
       <div className='w-full flex items-center justify-start gap-x-2 border rounded-md p-2 border-[#c1c7cf]'>
         <span className='text-[#626971]'><MdError /></span>
         <p className={`${jost.className}  text-md`}> <span className={`font-semibold  text-md `}>  How did we find these deals?</span> We looked at every economy class flight from Pakistan leaving in the next three months. These fares have the biggest savings when compared to the average price. They were found in the last four days and prices are subject to change.</p>
       </div>

       {/* 2 */}
       <div className='flex flex-col items-start justify-start'>
       <h1  className={`${jost.className} text-3xl`}>Finding flight deals: frequently asked questions</h1>
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
       </div> 


    </div>
  )
}

export default MoreDetails