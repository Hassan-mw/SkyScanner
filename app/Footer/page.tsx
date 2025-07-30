import { Jost } from 'next/font/google'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { FaMobile } from "react-icons/fa";

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const page = () => {
  return (
    <div className='w-full  bg-[#05203c]  flex items-center justify-center  '>
    <div className='w-full max-w-screen-xl bg-[#05203c]  py-8 px-4 flex flex-col items-start justify-start md:items-center space-y-10 md:space-y-16 '>
   
    <div className='w-full bg-[#05203c] grid grid-cols-1 md:grid-cols-4 gap-9'>
    
    {/* 0 */}
    <div className='w-full flex items-center h-9 justify-start bg-[#1e3750] text-white gap-x-2 rounded-md p-2'>
    <FaMobile /> 
    <p className={`${jost.className} text-sm`}>Get our App</p>
    </div>

    {/* 1 */}
    <div className=' flex flex-col  space-y-2 text-white'>
    <span className={`${jost.className} text-sm `}>Help</span>
    <span className={`${jost.className} text-sm `}>Privacy Settings</span>
    <span className={`${jost.className} text-sm `}>Log in</span>
    </div> 

    {/* 2 */}
    <div className=' flex flex-col  space-y-2 text-white'>
    <span className={`${jost.className} text-sm `}>Cookie policy</span>
    <span className={`${jost.className} text-sm `}>Privacy policy</span>
    <span className={`${jost.className} text-sm `}>Terms of service</span>
    <span className={`${jost.className} text-sm `}>Company Details</span>
    </div> 


    {/* 3 */}
    <div className='w-full flex flex-col   text-white'>
      <Accordion
      type="single"
      collapsible
      className="w-full space-y-0"
      defaultValue="item-1"
    >

      <AccordionItem className='border-b-0 ' value="item-1">
        <AccordionTrigger className='py-2'>Explore</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>1</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-b-0 b' value="item-2">
        <AccordionTrigger className='py-2'>Company</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>2</p>

        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-b-0' value="item-3">
        <AccordionTrigger className='py-2'>Partners</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>3</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem className='border-b-0' value="item-4">
        <AccordionTrigger className='py-2'>Tips</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>4</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div> 
    </div>


    {/*  Copy_right  */}
    <span style={{fontWeight:300}} className={`${jost.className} text-md text-white`}>© Skyscanner Ltd 2002 – 2025</span> 
    </div>
    </div>
  )
}

export default page