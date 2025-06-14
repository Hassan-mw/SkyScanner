import { Jost } from 'next/font/google';
import React from 'react'
import { MdError } from "react-icons/md";

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
    <div className='w-full flex flex-col space-y-4 p-3'>

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
      <div className='w-full flex flex-col items-center justify-center bg-[#eff3f8] py-4 px-6 rounded-md'>
        
        {/* Text_Center */}
        <div className='flex flex-col items-center'>
          <h1 className={`${jost.className} text-[#161616] text-3xl text-center`}>Looking for the best flight deals to anywhere in the world?</h1>
          <p className='text-center text-sm'>It’s easy around here. 100 million travellers use us as their go-to tool, comparing flight deals and offers from more than 1,200 airlines and travel providers. With so many options to choose from in one place, you can say hello to savings, and goodbye to stress – here’s how.</p>
        </div>
        
         {/* 1  */}
         <div className='flex flex-col items-center'>
           <Image height={150} width={150} src="/world.svg" alt='world' />
          <div className='flex flex-col text-center'>
            <h1 className={`${jost.className} text-center text-2xl`}>Search ‘Everywhere’, explore anywhere</h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm`}>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</p>
          </div>
         </div>

         {/* 2  */}
         <div className='flex flex-col items-center'>
           <Image height={150} width={150} src="/packet.svg" alt='world' />
          <div className='flex flex-col text-center'>
            <h1 className={`${jost.className} text-center text-2xl`}>Search ‘Everywhere’, explore anywhere</h1>
            <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm`}>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</p>
          </div>
         </div>


      </div>
    </div>
  )
}

export default MoreDetails