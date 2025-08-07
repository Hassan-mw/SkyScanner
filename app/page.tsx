import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Jost } from 'next/font/google'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { IoBedSharp } from 'react-icons/io5'
import { MdDirectionsCarFilled } from 'react-icons/md'
import { RiPlaneFill } from 'react-icons/ri'
import FlightSearchBarSmallSceen from './flights/FlightComponents/FlightSearchBarSmallSceen'
import FightSearchBarLargeHomeScreens from './HomepageComponenets/FightSearchBarLargeHomeScreens'

const jost = Jost({
  subsets: ['latin'],
  weight: ['500']
})

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      
      {/* Search Bar */}
      <div className="bg-[#05203c] flex items-center justify-center w-full">
        <div className="hidden md:block w-full">
          <FightSearchBarLargeHomeScreens />
        </div>
        <div className="md:hidden w-full">
          <FlightSearchBarSmallSceen />
        </div>
      </div>

      <div className="w-full flex flex-col space-y-9 max-w-screen-xl p-5">
        
        {/* Navigation Options */}
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]">
            <IoBedSharp size={20} />
            <span className={`${jost.className} text-lg`}>Hotels</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]">
            <MdDirectionsCarFilled size={20} />
            <span className={`${jost.className} text-lg`}>Car hire</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]">
            <RiPlaneFill size={20} />
            <span className={`${jost.className} text-lg`}>Flights</span>
          </div>
        </div>

        {/* Main Image with Text Overlay */}
        <div className="relative w-full">
          <Image
            height={1500}
            width={1500}
            className="w-full md:hidden max-h-[800px] object-top object-cover rounded-md"
            src="/home_main_image.webp"
            alt="home_main_image"
          />
          <Image
            height={1500}
            width={1500}
            className="w-full hidden md:block max-h-[400px] object-bottom object-cover rounded-md"
            src="/home_main_image_md.webp"
            alt="home_main_image"
          />
          <div className="absolute top-7 left-7 flex flex-col items-start justify-start text-white">
            <span style={{ fontWeight: 300 }} className={`${jost.className} text-xl sm:text-2xl md:text-xl`}>
              Can't decide where to go?
            </span>
            <h1 className={`${jost.className} text-3xl sm:text-4xl md:text-3xl`}>
              Explore every destination
            </h1>
            <span className={`${jost.className} text-sm p-1 mt-3 rounded-md w-36 text-center text-black bg-white hidden md:block`}>
              Search flights
            </span>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="w-full h-full flex flex-col space-y-4 items-start justify-start">
          <h1 className={`${jost.className} text-3xl`}>How does Skyscanner work?</h1>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                value: "item-1",
                question: "How does Skyscanner's car hire comparison tool work?",
                answer: "We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider."
              },
              {
                value: "item-2",
                question: "How can I find the cheapest flight using Skyscanner?",
                answer: "Finding flights is easy here – over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Here are a few simple tips on how to get the most out of your flight search."
              },
              {
                value: "item-3",
                question: "Where should I book a flight to right now?",
                answer: "If you're looking for inspiration for your next trip, search Everywhere to find a cheap flight ticket anywhere."
              },
              {
                value: "item-4",
                question: "Do I book my flight with Skyscanner?",
                answer: <>We make planning a breeze with simple search filters, handy hotel reviews and accurate pricing. You can also keep everything in one place by comparing <Link className="text-indigo-600 border-b border-indigo-600" href="flights">flight</Link> and <Link className="text-indigo-600 border-b border-indigo-600" href="carhire">car</Link> hire prices with us.</>
              },
              {
                value: "item-5",
                question: "Do I need a credit card in order to rent a car?",
                answer: "The choice overwhelm is real when searching for a hotel, but don’t panic! Get rid of the multiple tabs and windows, and think about what matters most. You may want to find hotels best for families, couples or business trips. Or filter by must-haves, such as spa facilities or parking."
              },
              {
                value: "item-6",
                question: "Can I hire a van?",
                answer: "Possibly. It’s all down to supply and demand. If you’re booking a hotel in a quiet destination at a quiet time of year, there’ll likely be a steady stream of rooms available, so a last-minute booking will be cheaper. If you’re booking somewhere in a busy destination at a busy time of year, booking in advance will likely save you money."
              },
            ].map(({ value, question, answer }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-md font-semibold border-b pb-3`}>
                  {question}
                </AccordionTrigger>
                <AccordionContent style={{ fontWeight: 200 }} className={`${jost.className} text-sm`}>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* International Sites Section */}
            <AccordionItem value="item-7">
              <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-xl font-semibold pb-3 mt-8 border-b`}>
                Our international sites
              </AccordionTrigger>
              <AccordionContent className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 py-3">
                {[
                  { country: "(GB) Cheap flights", src: "/uk_flag.jpg" },
                  { country: "(AU) Australia - Cheap flights", src: "/uk_flag.jpg" },
                  { country: "(CN) 中国 - 机票", src: "/uk_flag.jpg" },
                  { country: "(IN) India - Flight tickets", src: "/uk_flag.jpg" },
                  { country: "(RU) Россия - авиабилеты", src: "/uk_flag.jpg" },
                  { country: "(MX) Mexico - vuelos", src: "/mx_flag.jpg" },
                ].map(({ country, src }, i) => (
                  <div key={i} className="flex items-center justify-start gap-x-3">
                    <Image height={50} width={50} src={src} alt="flag" />
                    <span style={{ fontWeight: 200 }} className={`${jost.className} text-sm`}>
                      {country}
                    </span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default page
