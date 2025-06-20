import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6"
import { IoBed } from "react-icons/io5"
import { LuBuilding2 } from "react-icons/lu"
   
function FastFactMainHotel() {
    return (
 <div className="w-full flex flex-col space-y-10 items-center justify-center max-w-screen-xl px-3">
  {/* First */}
  <div className="w-full flex flex-col space-y-7 items-center justify-center">
    {/* Upper text */}
    <div className="flex flex-col w-full items-start space-y-3">
      <h1 className="text-2xl md:text-3xl font-semibold">Fast facts</h1>
      <span className="text-sm text-slate-600">
        Sleep easy, armed with the stuff that's good to know before you go.
      </span>
    </div>

    {/* Fast facts */}
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
      {/* 1 */}
      <div className="flex flex-col w-full items-start space-y-2">
        <div className="text-2xl font-semibold"><LuBuilding2 /></div>
        <h1 className="text-sm text-slate-600">Hotel brands to choose from</h1>
        <span className="font-semibold">60+</span>
      </div>

      {/* 2 */}
      <div className="flex flex-col w-full items-start space-y-2">
        <div className="text-2xl font-semibold"><FaLocationDot /></div>
        <h1 className="text-sm text-slate-600">Hotel destinations to explore</h1>
        <span className="font-semibold">5,000+</span>
      </div>

      {/* 3 */}
      <div className="flex flex-col w-full items-start space-y-2">
        <div className="text-2xl font-semibold"><IoBed /></div>
        <h1 className="text-sm text-slate-600">Hotels available worldwide</h1>
        <span className="font-semibold">3.2 million</span>
      </div>
    </div>
  </div>
 
   {/* Second */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-8 w-full bg-[#eff3f8] px-4 rounded-xl">
    {/* Tag-1 */}
    <div className="flex flex-col items-center justify-center space-y-3 text-center w-full">
      <Image height={200} width={200} src="/tag.svg" alt="tags" />
      <span className="text-xl font-semibold">Great hotel deals</span>
      <span className="text-sm">
        We search for deals with the world’s leading hotels, and share our findings with you
      </span>
    </div>

    {/* Tag-2 */}
    <div className="flex flex-col items-center justify-center space-y-3 text-center w-full">
      <Image height={200} width={200} src="/Illustration_hotel_bell.svg" alt="tags" />
      <span className="text-xl font-semibold">Up-to-date pricing</span>
      <span className="text-sm">
        We always show you the most recent pricing overview we can find, so you know exactly what to expect
      </span>
    </div>

    {/* Tag-3 */}
    <div className="flex flex-col items-center justify-center space-y-3 text-center w-full">
      <Image height={200} width={200} src="/Illustration_hotel_compare_scales.svg" alt="tags" />
      <span className="text-xl font-semibold">Precise searching</span>
      <span className="text-sm">
        Find hotels with swimming pools, free cancellation, and flexible booking. Or whatever matters most to you
      </span>
    </div>
  </div>

  {/* Third */}
  <div className="w-full h-full flex flex-col space-y-4 items-center justify-center">
    <h1 className="w-full flex items-start text-3xl font-semibold">FAQs</h1>
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          How does Skyscanner rank hotels?
        </AccordionTrigger>
        <AccordionContent>
          There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites, including Booking.com, Agoda and Trip.com to name a few. From there, we compare prices and show you the best options.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          Do I book my hotel directly through Skyscanner?
        </AccordionTrigger>
        <AccordionContent>
          No – as a travel search engine, we’ll show you a range of hotel deals, but we don’t take bookings or payments. Once you’ve chosen a hotel, we’ll transfer you to the hotel provider’s site to complete your booking.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          How do I get prices that reflect the best value?
        </AccordionTrigger>
        <AccordionContent>
          We always show the best-value price we can find from the hotel suppliers we offer, and give you the most up-to-date price overview.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold">
          How does Skyscanner help me plan my trip?
        </AccordionTrigger>
        <AccordionContent>
          We make planning a breeze with simple search filters, handy hotel reviews and accurate pricing. You can also keep everything in one place by comparing <Link className="text-indigo-600 border-b border-indigo-600" href="flights">flight</Link> and <Link className="text-indigo-600 border-b border-indigo-600" href="carhire">car</Link> hire prices with us.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          Help! I have too many options. How can I decide which hotel to choose?
        </AccordionTrigger>
        <AccordionContent>
          The choice overwhelm is real when searching for a hotel, but don’t panic! Get rid of the multiple tabs and windows, and think about what matters most. You may want to find hotels best for families, couples or business trips. Or filter by must-haves, such as spa facilities or parking.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-semibold pb-3">
          Will booking the hotel at the last minute be cheaper?
        </AccordionTrigger>
        <AccordionContent>
          Possibly. It’s all down to supply and demand. If you’re booking a hotel in a quiet destination at a quiet time of year, there’ll likely be a steady stream of rooms available, so a last-minute booking will be cheaper. If you’re booking somewhere in a busy destination at a busy time of year, booking in advance will likely save you money.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</div>

    )
}

export default FastFactMainHotel
