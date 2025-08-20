import { Jost } from 'next/font/google'
import React from 'react'


const jost=Jost({
    subsets:['latin'],
    weight:['500']
})




const CarRentaltextDetails = () => {
     const data=[
          {
               title:"",
               subTitle:""
          },
          {
               title:"",
               subTitle:""
          },
     ]
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-3'>
     
     <div className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-2xl md:text-3xl `}>How to book the best car rental deals in Dubai</h1>
          <p className='text-sm'>We’re frequently named as the most trusted travel search site out there. We scan hundreds of trusted travel providers and put it all in one place, allowing you to instantly compare car hire rates and then book with no fees. Here's how to get the most out of your Dubai car rental search.</p>
     </div>

     <div className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-xl `}>Book now, cancel later</h1>
          <p className='text-sm'>We clearly highlight car and van hire options in Dubai that have free cancellation. So you can bag the best deal with total flexibility to change your plans if you need to.</p>
     </div>


     <div className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-xl  `}>Book 2 weeks in advance</h1>
          <p className='text-sm'>We crunched some numbers and found that most travellers bag the lowest daily rate when they book 2 weeks in advance. The cheapest month to hire a car in Dubai is July.</p>
     </div>

     <div className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-xl  `}>Compare fuel policies </h1>
          <p className='text-sm'>To save money on topping up the tank as you take off in Dubai, look out for deals with a 'full to full' fuel policy, as opposed to a 'half-full to full' one.</p>
     </div>

     <div className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-xl  `}>Skip the queues </h1>
          <p className='text-sm'>We call out keyless pick-up when you search for cars with us. No keys to pick up, means no queues. Just turn up at your preferred Dubai car hire location, hop in and hit the road.</p>
     </div>

    </div>
  )
}

export default CarRentaltextDetails