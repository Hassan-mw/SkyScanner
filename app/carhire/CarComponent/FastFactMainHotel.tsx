import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
   
import { Jost } from 'next/font/google'
import { IoMdPricetag } from "react-icons/io"
import { FaCarSide, FaHeart } from "react-icons/fa6"


const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


function FastFactMainHotel() {
    return (
        <div className="w-full h-full flex flex-col space-y-10 items-center justify-center max-w-screen-xl px-3 ">
          
            {/* First */}
            <div className="w-full h-full flex flex-col space-y-7 items-center justify-center">
                {/* Upper text */}
               <div className="flex flex-col w-full items-start space-y-1">
                   <h1 className={`${jost.className} text-3xl md:text-3xl font-semibold`}>Car hire fast facts</h1>
                   <span style={{fontWeight:200}} className={`${jost.className} text-sm text-slate-900`}>Everything you need to know to hit the road happy.</span>
               </div>
               <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* 1 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold  mb-2"><IoMdPricetag /></div>
                   <span className="text-sm text-slate-600">Hotel brands to choose from</span>
                   <span className="font-semibold text-xl border-b border-black">Rs17,774</span>
               </div>
                {/* 2 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold  mb-2"><FaCarSide /></div>         
                   <span className="text-sm text-slate-600">Cheapest provider</span>
                   <span className="font-semibold text-xl border-b border-black">Hertz</span>
               </div>
                {/* 3 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold mb-2"><FaHeart size={20} /></div> 
                   <span className="text-sm text-slate-600">Highest rated provider</span>
                   <span className="font-semibold text-xl border-b border-black">Europcar</span>
               </div>
               </div>
              
              
            </div>
            {/* Second */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8 w-full bg-[#eff3f8] px-4 rounded-xl">
            {/* Tag-1 */}
            <div className="flex flex-col items-center justify-center space-y-3  w-full ">
             <div className="h-40"><img className="size-28 h-32" src="/car_tag_1.svg"/></div>
             <div className="text-xl font-semibold">Step 1: Search</div>
             <div className="max-w-[400px]">Enter your location and see what's available. From family-friendly SUVs to luxury convertibles, you’ll get a great price on every type of hire car.</div>
            </div>
            {/* Tag-2 */}
            <div className="flex flex-col items-center justify-center space-y-3  w-full ">
             <div className="h-40"><img className="size-28 h-32" src="/car_tag_2.svg"/></div>
             <div className="text-xl font-semibold">Step 2: Compare</div>
             <div className="max-w-[400px]">Compare rental cars on fuel policy, mileage, provider rating, flexible booking, cleanliness, customer service and more.</div>
            </div>
            {/* Tag-3 */}
            <div className="flex flex-col items-center justify-center space-y-3  w-full ">
             <div className="h-40"><img className="size-28 h-32" src="/car_tag_3.svg"/></div>
             <div className="text-xl font-semibold">Step 3: Book</div>
             <div className="max-w-[400px]">We compare car rental prices on 100s of sites for you, so once you've found your ride, you'll be redirected to book with the provider, with no extra fees.</div>
            </div>
        
          
            </div>
            {/* Third */}
            <div className="w-full h-full flex flex-col space-y-7 items-center justify-center">
                <div className="w-full flex items-start text-3xl  font-semibold">FAQs</div>
            <Accordion type="single" collapsible className="w-full p-3">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold">How does Skyscanner rank hotels?</AccordionTrigger>
        <AccordionContent>
        There’s no secret recipe – just a stellar search operation. We scan all the top hotel provider sites, including Booking.com, Agoda and Trip.com to name a few. From there, we compare prices and show you the best options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold">Do I  book my horel directly through Skyscanner?</AccordionTrigger>
        <AccordionContent>
        No – as a travel search engine, we’ll show you a range of hotel deals, but we don’t take bookings or payments. Once you’ve chosen a hotel, we’ll transfer you to the hotel provider’s site to complete your booking.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold">How do i'm getting price that reflect the best value?</AccordionTrigger>
        <AccordionContent>
        We always show the best-value price we can find from the hotel suppliers we offer, and give you the most up-to-date price overview.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-semibold">How Skyscanner help me plan my trip?</AccordionTrigger>
        <AccordionContent>
        We make planning a breeze with simple search filters, handy hotel reviews and accurate pricing. You can also keep everything in one place by comparing <Link className="text-indigo-600 border-b border-indigo-600" href="flights">flight</Link> and <Link className="text-indigo-600 border-b border-indigo-600" href="carhire">car</Link>  hire prices with us.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-semibold">Help! I have too many options.How can I decide ehich hotel to choose?</AccordionTrigger>
        <AccordionContent>
        The choice overwhelm is real when searching for a hotel, but don’t panic! Get rid of the multiple tabs and windows, and think about what matters most. You may want to find hotels best for families, couples or business trips. Or filter by must-haves, such as spa facilities or parking.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-semibold">Will booking the gotel at last minute be cheaper?</AccordionTrigger>
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
