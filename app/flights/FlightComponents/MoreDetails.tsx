import { Jost } from 'next/font/google';
import React from 'react'
import { MdError } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';


const jost=Jost({
    weight:['500'],
    subsets:['latin']
})



const MoreDetails = () => {
  return (
    <div className='w-full flex flex-col space-y-12 p-3 py-10'>

      {/* 1 */}
       <div className='w-full flex items-center justify-start gap-x-2 border rounded-md p-2 border-[#c1c7cf]'>
         <span className='text-[#626971]'><MdError /></span>
         <p className={`${jost.className}  text-md`}> <span className={`font-semibold  text-md `}>  How did we find these deals?</span> We looked at every economy class flight from Pakistan leaving in the next three months. These fares have the biggest savings when compared to the average price. They were found in the last four days and prices are subject to change.</p>
       </div>

      {/* 2 */}
       <div className='flex flex-col items-start justify-start space-y-4'>
       <h1  className={`${jost.className} text-3xl`}>Finding flight deals: frequently asked questions</h1>
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-md'>How can I find best flight deals?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus facilis velit dolore corrupti, maiores expedita dolores deleniti? Dolorum, quidem, temporibus rem doloribus ratione corporis nostrum quasi similique totam eos pariatur deleniti odio delectus.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-md'>How can I find the best last minute flight deals?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus facilis velit dolore corrupti, maiores expedita dolores deleniti? Dolorum, quidem, temporibus rem doloribus ratione corporis nostrum quasi similique totam eos pariatur deleniti odio delectus.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-md'>How can I stay updated on flight deals and low fares?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus facilis velit dolore corrupti, maiores expedita dolores deleniti? Dolorum, quidem, temporibus rem doloribus ratione corporis nostrum quasi similique totam eos pariatur deleniti odio delectus.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='text-md'>What happens after I've booked my flight?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus facilis velit dolore corrupti, maiores expedita dolores deleniti? Dolorum, quidem, temporibus rem doloribus ratione corporis nostrum quasi similique totam eos pariatur deleniti odio delectus.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className='text-md'>Where should I book a flight to right now?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus facilis velit dolore corrupti, maiores expedita dolores deleniti? Dolorum, quidem, temporibus rem doloribus ratione corporis nostrum quasi similique totam eos pariatur deleniti odio delectus.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
       </div> 
        
      {/* 3 */}
      <div className='w-full flex flex-col items-center justify-center space-y-9 bg-[#eff3f8] p-7 rounded-md'>
        
        {/* Text_Center */}
        <div className='flex flex-col items-center'>
          <h1 className={`${jost.className} text-[#161616] text-3xl text-center`}>Looking for the best flight deals to anywhere in the world?</h1>
          <p className='text-center text-sm'>It’s easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here’s how.</p>
        </div>
        
        {/* text_box */}
        <div className='w-full grid grid-cols-1 items-center md:grid-cols-3 gap-12 '>
         {/* 1  */}
         <div className='flex flex-col items-center space-y-3'>
           <Image height={150} width={150} className='  md:h-52' src="/world.svg" alt='world' />
          <div className='flex flex-col text-center space-y-1   md:h-52'>
            <h1 className={`${jost.className} text-center text-2xl`}>Search ‘Everywhere’, explore anywhere</h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</p>
          </div>
         </div>

         {/* 2  */}
         <div className='flex flex-col items-center space-y-3'>
           <Image height={150} width={150}  className=' md:h-52'  src="/packet.svg" alt='world' />
          <div className='flex flex-col text-center space-y-1  md:h-52'>
            <h1 className={`${jost.className} text-center text-2xl`}>Pay less and go further with clear prices</h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>The cheapest flight deals. No hidden fees. No funny business. With us, the price you see when you search is what you’ll pay.</p>
          </div>
         </div>

         {/* 3  */}
         <div className='flex flex-col items-center space-y-3'>
           <Image height={150} width={150}  className='md:h-52'  src="/clock.svg" alt='world' />
          <div className='flex flex-col text-center space-y-1  md:h-52'>
            <h1 className={`${jost.className} text-center text-2xl`}>Book smart with instant price alerts</h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>Found your flight, but not quite ready to book? Set up Price Alerts and we’ll let you know when your flight price goes up or down.</p>
          </div>
         </div>
        </div>

      </div>

      {/* 4 */}
      <div className='flex flex-col items-start justify-start space-y-1'>
        <h1 className={`${jost.className} text-3xl`}>Plan your journey with peace of mind</h1>
        <p className={`${jost.className} text-sm text-slate-700`}>We've made it our mission to help you travel with confidence and make your journey as smooth as possible.</p>
      </div>

      {/* 5 */}
      <div className='w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 '>

      {/* 1 */}
      <div className='flex items-start justify-start gap-x-5'> 
      <MdChangeCircle className='' size={30}  />
      <div className='flex flex-col items-start'>
      <h1 className={`${jost.className} text-lg `}>Find flexible flight deals</h1>
      <p className={`${jost.className} text-sm text-[#626b71]`}>Explore flexible flight ticket deals so you won't lose out if your flight is changed or cancelled</p>
      </div>
      </div>

      {/* 2 */}
      <div className='flex items-start justify-start gap-x-5'> 
      <MdChangeCircle className='' size={30}  />
      <div className='flex flex-col items-start'>
      <h1 className={`${jost.className} text-lg `}>Add hotels and car hire</h1>
      <p className={`${jost.className} text-sm text-[#626b71]`}>Plan your journey with hotels and car hire, and keep your bookings all in one place</p>
      </div>

      </div>

     


      </div> 

    </div>
  )
}

export default MoreDetails