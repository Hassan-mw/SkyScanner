import { Jost } from 'next/font/google'
import React from 'react'


const jost=Jost({
    subsets:['latin'],
    weight:['500']
})




const CarRentaltextDetails = () => {
       const data=[
        
          {
               title:"How to book the best car rental deals in Dubai",
               subTitle:"We’re frequently named as the most trusted travel search site out there. We scan hundreds of trusted travel providers and put it all in one place, allowing you to instantly compare car hire rates and then book with no fees. Here's how to get the most out of your Dubai car rental search."
          },
          {
               title:"Book now, cancel later",
               subTitle:"We clearly highlight car and van hire options in Dubai that have free cancellation. So you can bag the best deal with total flexibility to change your plans if you need to."
          },
          {
               title:"Book 2 weeks in advance",
               subTitle:"We crunched some numbers and found that most travellers bag the lowest daily rate when they book 2 weeks in advance. The cheapest month to hire a car in Dubai is July."
          },
          {
               title:"Compare fuel policies",
               subTitle:"To save money on topping up the tank as you take off in Dubai, look out for deals with a 'full to full' fuel policy, as opposed to a 'half-full to full' one."
          },
          {
               title:"Skip the queues",
               subTitle:"We call out keyless pick-up when you search for cars with us. No keys to pick up, means no queues. Just turn up at your preferred Dubai car hire location, hop in and hit the road."
          }
          
     ]


  return (
    <div className='w-full flex flex-col items-start justify-start space-y-3'>
     {
          data.map((data,index)=>
     <div key={index} className='flex flex-col items-start justify-start space-y-1'>
          <h1 className={`${jost.className} text-2xl md:text-3xl `}>{data.title}</h1>
          <p className='text-sm'>{data.subTitle}</p>
     </div>
     )
    }


    </div>
  )
}

export default CarRentaltextDetails