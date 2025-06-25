import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
   
import { Jost } from 'next/font/google'
import { IoIosArrowForward, IoIosBatteryCharging, IoMdKey, IoMdPricetag } from "react-icons/io"
import { FaCarSide, FaGasPump, FaHeart } from "react-icons/fa6"
import Image from "next/image"
import { IoBedSharp } from "react-icons/io5"
import { RiPlaneLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa"

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


function FastFactMainHotel() {
    return (
        <div className="w-full h-full flex flex-col space-y-16 items-center justify-center max-w-screen-xl py-6  ">
          
         <div className="w-full flex flex-col space-y-2 items-start justify-start ">
           <h1 className={`${jost.className} text-2xl`}>Your trusted car hire companies, all in one place</h1>
           <div className="flex items-center space-x-5">
               <Image height={100} width={100} className="rounded-md" src="/euro_car.png" alt="euro_car" />
               <Image height={100} width={100} className="border shadow rounded-md" src="/hertx_car.png" alt="euro_car" />
           </div>
         </div>

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
              {/* 3 */}
                  <div className='w-full flex flex-col items-center justify-center space-y-9 bg-[#eff3f8] p-7 rounded-md'>
                    
                    {/* Text_Center */}
                    <div className='flex  items-center'>
                      <h1 className={`${jost.className} text-[#161616] text-3xl text-center`}>Booking car hire in three simple steps</h1>
                    </div>
                    
                    {/* text_box */}
                    <div className='w-full grid grid-cols-1 items-center md:grid-cols-3 gap-12 '>

                     {/* 1  */}
                     <div className='flex flex-col items-center space-y-3'>
                       <Image height={150} width={150} className='  md:h-52' src="/car_tag_1.svg" alt='world' />
                      <div className='flex flex-col text-center space-y-1   md:h-52'>
                        <h1 className={`${jost.className} text-center text-2xl`}>Step 1: Search</h1>
                        <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>Enter your location and see what's available. From family-friendly SUVs to luxury convertibles, you’ll get a great price on every type of hire car.</p>
                      </div>
                     </div>
            
                     {/* 2  */}
                     <div className='flex flex-col items-center space-y-3'>
                       <Image height={150} width={150}  className=' md:h-52'  src="/car_tag_2.svg" alt='world' />
                      <div className='flex flex-col text-center space-y-1  md:h-52'>
                        <h1 className={`${jost.className} text-center text-2xl`}>Step 2: Compare</h1>
                        <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>Compare rental cars on fuel policy, mileage, provider rating, flexible booking, cleanliness, customer service and more.</p>
                      </div>
                     </div>
            
                     {/* 3  */}
                     <div className='flex flex-col items-center space-y-3'>
                       <Image height={150} width={150}  className='md:h-52'  src="/car_tag_3.svg" alt='world' />
                      <div className='flex flex-col text-center space-y-1  md:h-52'>
                        <h1 className={`${jost.className} text-center text-2xl`}>Step 3: Book</h1>
                        <p style={{fontWeight:300}} className={`${jost.className} text-center text-[#161616] text-sm md:text-md`}>We compare car rental prices on 100s of sites for you, so once you've found your ride, you'll be redirected to book with the provider, with no extra fees.</p>
                      </div>
                     </div>
                    </div>
            
                  </div>


            <div className="w-full flex flex-col space-y-4 items-start justify-start"> 
                {/* Text_Center */}
                <div className='flex flex-col items-start justify-start'>
                  <h1 className={`${jost.className} text-[#161616] text-xl text-center`}>How to find the best car hire deal</h1>
                  <span className="text-sm">We’re frequently named as the most trusted travel search site out there. We're free to use, and we’ll do the hard work for you by searching hundreds of car hire companies, allowing you to instantly compare prices and then book. Here's how to get the most out of your car rental search.</span> 
                </div>
                
                {/* box */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* 1 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><FaCarSide /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Book now, cancel later</h2>
                        <span className="text-sm">There are many car and van hire options with flexible booking policies and free cancellation. So you can bag the best deal with total flexibility to change your plans last-minute if you need to.</span>
                     </div>
                  </div>

                  {/* 3 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><FaCalendarAlt /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Compare fuel policies</h2>
                        <span className="text-sm">To save money on topping up the tank before you take off, look out for deals with a 'full to full' fuel tank policy.</span>
                     </div>
                  </div>

                  {/* 4 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><IoIosBatteryCharging /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Skip the queues</h2>
                        <span className="text-sm">We call out keyless or self-service pick-up when you search with us. No keys to pick up or paperwork to fill in means no queues. Just turn up at your preferred car hire location, hop in and hit the road.</span>
                     </div>
                  </div>

                  {/* 5 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><FaGasPump /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Go greener</h2>
                        <span className="text-sm">Limit your impact on this beautiful planet while you explore it. Filter by electric vehicles, which will be charged up and ready to go when you pick them up, meaning no worries about fuel policies, either.</span>
                     </div>
                  </div>

                  {/* 1 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><IoMdKey /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Look further afield</h2>
                        <span className="text-sm">If you're on a budget, it's often cheaper to hop on public transport to a car rental pick-up location a little further away.</span>
                     </div>
                  </div>

               
                  {/* 1 */}
                  <div className="flex  items-start gap-x-3 justify-start ">
                     <div className="text-2xl font-semibold  mb-2"><IoMdKey /></div>         
                     <div className="flex flex-col items-start justify-start">
                        <h2 className="font-medium">Compare fuel policies</h2>
                        <span className="text-sm">To save money on topping up the tank before you take off, look out for deals with a 'full to full' fuel tank policy.</span>
                     </div>
                  </div>

               



                  </div> 


            </div>
            
     <div className="w-full relative ">
       <Image height={1000} width={1000} className="w-full rounded-md h-96 object-cover " src="/car_girl_booking.webp" alt="car_girl_booking"/>
       <div className="flex flex-col space-y-4 absolute items-center text-center sm:text-start sm:max-w-[75%] md:max-w-[40%] justify-center sm:items-start sm:justify-start top-0 md:top-[10%] md:left-5 p-4 sm:left-0 text-white">
        <h1 className="font-semibold text-3xl lg:text-5xl">Boor car hire on our app</h1>
        <p className="font-normal text-sm lg:text-md">Find and compare the best deals on car hire and van rental anywhere in the world, from wherever you are in seconds.</p>
        <div className="hidden md:block font-medium bg-white text-black py-2 px-4 rounded-md">
           Download the app
        </div>
        </div> 
     </div>
        

          
            {/* Third */}
  <div className="w-full h-full flex flex-col space-y-4 items-center justify-center">
    <h1 className="w-full flex items-start text-3xl font-semibold">Finding your ride with us: FAQs</h1>
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

      
      <div className="w-full flex flex-col items-start justify-start space-y-3">
        
            <h1 className="w-full flex items-start text-3xl font-semibold">Ready to plan a trip?</h1>

            <div className="w-full flex  items-center justify-between border-b border-black pb-2">
              <div className="flex items-center justify-center gap-x-3">
                <IoBedSharp size={20} />
                 <span className="text-2xl font-medium pb-1">Hotes</span>
              </div>
              <IoIosArrowForward />   
            </div>

            <div className="w-full flex  items-center justify-between border-b border-black pb-2">
              <div className="flex items-center justify-center gap-x-3">
                 <div className="rotate-45"> <RiPlaneLine  size={20} /> </div>
                 <span className="text-2xl font-medium pb-1">Flights</span>
              </div>
              <IoIosArrowForward />   
            </div>
         
      </div>

        </div>
    )
}

export default FastFactMainHotel
