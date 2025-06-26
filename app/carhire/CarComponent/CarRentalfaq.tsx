import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'

const CarRentalfaq = () => {
  return (
      <div className="w-full h-full flex flex-col space-y-4 items-center justify-center">
    <h1 className="w-full flex items-start text-3xl font-semibold">Frequently asked questions</h1>
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold pb-3">
         How does Skyscanner's car hire comparison tool work?
        </AccordionTrigger>
        <AccordionContent>
          There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites, including Booking.com, Agoda and Trip.com to name a few. From there, we compare prices and show you the best options.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          Are there any extra fees added to the price advertised?
        </AccordionTrigger>
        <AccordionContent>
          No – as a travel search engine, we’ll show you a range of hotel deals, but we don’t take bookings or payments. Once you’ve chosen a hotel, we’ll transfer you to the hotel provider’s site to complete your booking.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold pb-3">
         Can I return my hire car to a different location?
        </AccordionTrigger>
        <AccordionContent>
          We always show the best-value price we can find from the hotel suppliers we offer, and give you the most up-to-date price overview.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold">
          Where in the world can I find car hire with Skyscanner?
        </AccordionTrigger>
        <AccordionContent>
          We make planning a breeze with simple search filters, handy hotel reviews and accurate pricing. You can also keep everything in one place by comparing <Link className="text-indigo-600 border-b border-indigo-600" href="flights">flight</Link> and <Link className="text-indigo-600 border-b border-indigo-600" href="carhire">car</Link> hire prices with us.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          Do I need a credit card in order to rent a car?
        </AccordionTrigger>
        <AccordionContent>
          The choice overwhelm is real when searching for a hotel, but don’t panic! Get rid of the multiple tabs and windows, and think about what matters most. You may want to find hotels best for families, couples or business trips. Or filter by must-haves, such as spa facilities or parking.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-semibold pb-3">
         Can I hire a van?
        </AccordionTrigger>
        <AccordionContent>
          Possibly. It’s all down to supply and demand. If you’re booking a hotel in a quiet destination at a quiet time of year, there’ll likely be a steady stream of rooms available, so a last-minute booking will be cheaper. If you’re booking somewhere in a busy destination at a busy time of year, booking in advance will likely save you money.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  )
}

export default CarRentalfaq