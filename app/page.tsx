import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoBedSharp } from 'react-icons/io5'
import { MdDirectionsCarFilled } from 'react-icons/md'
import { RiPlaneFill } from 'react-icons/ri'
import { json } from 'stream/consumers'
import FightSearchBarLargeScreens from './flights/FlightComponents/FightSearchBarLargeScreens'
import FlightSearchBarSmallSceen from './flights/FlightComponents/FlightSearchBarSmallSceen'
import FightSearchBarLargeHomeScreens from './HomepageComponenets/FightSearchBarLargeHomeScreens'

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white'>
      
        {/*Search_bar  */}
    <div className="bg-[#05203c] flex items-center justify-center w-full">
     <div className="hidden md:block w-full "> <FightSearchBarLargeHomeScreens/></div>
     <div className="md:hidden w-full "> <FlightSearchBarSmallSceen/></div>
    </div>

       <div className='w-full flex flex-col space-y-9 max-w-screen-xl p-5'>
          



          {/* Navigations */}
          <div className='w-full grid grid-cols-3 gap-6'>
              {/* 1 */}
              <div className='flex flex-col  items-center  justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]'>
                 <IoBedSharp size={20} />
                 <span className={`${jost.className} text-lg`}>Hotels</span>
              </div>
              {/* 2 */}
              <div className='flex flex-col   items-center  justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]'>
                 <MdDirectionsCarFilled   size={20}  />
                 <span className={`${jost.className} text-lg`}>Car hire</span>
              </div>
              {/* 3 */}
              <div className='flex flex-col   items-center  justify-center p-2 rounded-md text-white gap-2 bg-[#05203c]'>
                 <RiPlaneFill  size={20}  />
                 <span className={`${jost.className} text-lg`}>flights</span>
              </div>
          </div>
          
          {/* Image */}
          <div className='relative w-full'>
            <Image height={1500} width={1500} className='w-full md:hidden max-h-[800px] md:max-h-[400px] md:object-center object-top object-cover rounded-md'  src="/home_main_image.webp" alt='home_main_image'  />
            <Image height={1500} width={1500} className='w-full hidden md:block  md:object-center object-bottom object-cover rounded-md'  src="/home_main_image_md.webp" alt='home_main_image'  />
             <div className='absolute top-7 left-7 flex flex-col  items-start justify-start text-white'>
               <span style={{fontWeight:300}} className={`${jost.className} text-xl sm:text-2xl md:text-xl`}>Can't decide where to go?</span>
               <h1  className={`${jost.className} text-3xl sm:text-4xl md:text-3xl `}>Explore every destination</h1> 
               <span className={`${jost.className} text-sm p-1 mt-3 rounded-md w-36 text-center text-black bg-white hidden md:block`}>Search flights</span> 
             </div>
          </div>


          {/* Text_details */}
                      {/* Third */}
           <div className="w-full h-full flex flex-col space-y-4 items-start justify-start">
                <h1 className={`${jost.className} text-3xl`}>How does Skyscanner work?</h1>
                 <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="w-full flex items-start justify-start text-md font-semibold border-b pb-3">
                           How does Skyscanner's car hire comparison tool work?
                        </AccordionTrigger>
                    <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
                        We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.
                    </AccordionContent>
                   </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger  className={`${jost.className} w-full flex items-start justify-start text-md font-semibold pb-3 border-b`}>
         How can I find the cheapest flight using Skyscanner? 
        </AccordionTrigger>
                            <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
      Finding flights is easy here – over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Here are a few simple tips on how to get the most out of your flight search.
        </AccordionContent>
        
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-md font-semibold pb-3 border-b`}>
         Where should I book a flight to right now?
        </AccordionTrigger>
                            <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
         If you're looking for inspiration for your next trip, search Everywhere to find a cheap flight ticket anywhere.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-md font-semibold  pb-3 border-b`}>
          Do I book my flight with Skyscanner?
        </AccordionTrigger>
                            <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
          We make planning a breeze with simple search filters, handy hotel reviews and accurate pricing. You can also keep everything in one place by comparing <Link className="text-indigo-600 border-b border-indigo-600" href="flights">flight</Link> and <Link className="text-indigo-600 border-b border-indigo-600" href="carhire">car</Link> hire prices with us.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-md font-semibold pb-3 border-b`}>
          Do I need a credit card in order to rent a car?
        </AccordionTrigger>
                            <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
          The choice overwhelm is real when searching for a hotel, but don’t panic! Get rid of the multiple tabs and windows, and think about what matters most. You may want to find hotels best for families, couples or business trips. Or filter by must-haves, such as spa facilities or parking.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className= {`${jost.className} w-full flex items-start justify-start text-md font-semibold pb-3  border-b`}>
         Can I hire a van?
        </AccordionTrigger>
                    <AccordionContent style={{fontWeight:200}} className={`${jost.className} text-sm`}>
          Possibly. It’s all down to supply and demand. If you’re booking a hotel in a quiet destination at a quiet time of year, there’ll likely be a steady stream of rooms available, so a last-minute booking will be cheaper. If you’re booking somewhere in a busy destination at a busy time of year, booking in advance will likely save you money.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger className={`${jost.className} w-full flex items-start justify-start text-xl font-semibold pb-3 mt-8  border-b`}>
         Our international sites
        </AccordionTrigger>
        <AccordionContent className='w-full grid grid-cols-1 sm:grid-cols-2 gap-2 py-3 '>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/uk_flag.jpg" alt='uk_flag'/> <span style={{fontWeight:200}} className={`${jost.className} text-sm`}>(GB) Cheap flights</span></div>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/uk_flag.jpg" alt='au_flag'/> <span style={{fontWeight:200}} className={`${jost.className}  text-sm `}>(AU) Australia - Cheap flights</span></div>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/uk_flag.jpg" alt='cn_flag'/> <span style={{fontWeight:200}} className={`${jost.className} text-sm `}>(CN) 中国 - 机票</span></div>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/uk_flag.jpg" alt='in_flag'/> <span style={{fontWeight:200}} className={`${jost.className} text-sm `}>(IN) India - Flight tickets</span></div>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/uk_flag.jpg" alt='ru_flag'/> <span style={{fontWeight:200}} className={`${jost.className} text-sm `}>(RU)   Россия - авиабилеты</span></div>
          <div className='flex items-center justify-start gap-x-3'> <Image height={50} width={50}  src="/mx_flag.jpg" alt='ru_flag'/> <span style={{fontWeight:200}} className={`${jost.className} text-sm `}>(MX)   Mexico - ruelos</span></div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
          </div>


       </div>
    </div>
  )
}

export default page