import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import image from "../../public/Pakistan.jpg"
import { Jost } from 'next/font/google'
import { LuExternalLink } from "react-icons/lu";

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const FlightsArray = () => {


 const areas = [
  {
    city: "Islamabad",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Faisal Mosque", description: "The largest mosque in South Asia." },
      { name: "Daman-e-Koh", description: "A viewpoint offering panoramic views of Islamabad." }
    ]
  },
  {
    city: "Lahore",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Badshahi Mosque", description: "A magnificent Mughal mosque and one of the largest in the world." },
      { name: "Lahore Fort", description: "A UNESCO World Heritage site with rich history." }
    ]
  },
  {
    city: "Karachi",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Clifton Beach", description: "A popular beach for relaxation and picnics." },
      { name: "Quaid-e-Azam's Mausoleum", description: "The tomb of Pakistan's founder, Muhammad Ali Jinnah." }
    ]
  },
  {
    city: "Murree",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Pindi Point", description: "A popular hilltop with beautiful views of the surrounding area." },
      { name: "Patriata", description: "A scenic spot known for chair lifts and panoramic views." }
    ]
  },
  {
    city: "Skardu",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Deosai National Park", description: "A high-altitude plateau, known for its wildlife and vast landscapes." },
      { name: "Shangrila Resort", description: "A famous resort by Lower Kachura Lake, often called 'Heaven on Earth'." }
    ]
  },
  {
    city: "Hunza",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Baltit Fort", description: "An ancient fort offering stunning views of the Hunza Valley." },
      { name: "Khunjerab Pass", description: "The highest paved international border crossing, between Pakistan and China." }
    ]
  },
  {
    city: "Peshawar",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Bala Hisar Fort", description: "A historic fort built by the Mughals to protect the region." },
      { name: "Qissa Khawani Bazaar", description: "An ancient market known for its history and vibrant culture." }
    ]
  },
  {
    city: "Gilgit",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Hunza Valley", description: "A breathtaking valley known for its beauty and serene landscapes." },
      { name: "Naltar Valley", description: "Famous for its colorful lakes and skiing spots." }
    ]
  },
  {
    city: "Multan",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Shah Rukn-e-Alam Shrine", description: "A famous Sufi shrine and one of the largest tombs in South Asia." },
      { name: "Tomb of Bahauddin Zakariya", description: "A historic Sufi tomb dating back to the 13th century." }
    ]
  },
  {
    city: "Swat Valley",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Malam Jabba", description: "A popular ski resort in the Swat Valley." },
      { name: "Kalam Valley", description: "A beautiful valley known for its lush green landscape and trekking routes." }
    ]
  },
  {
    city: "Fairy Meadows",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Nanga Parbat Base Camp", description: "A starting point for treks to the second-highest mountain in the world." },
      { name: "Rakaposhi Viewpoint", description: "An incredible viewpoint offering stunning views of Rakaposhi peak." }
    ]
  },
  {
    city: "Naran-Kaghan Valley",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Saif-ul-Malook Lake", description: "A crystal-clear alpine lake surrounded by snow-capped mountains." },
      { name: "Ansoo Lake", description: "A tear-shaped lake known for its stunning beauty." }
    ]
  },
  {
    city: "Chitral",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Kalash Valley", description: "A culturally unique valley home to the Kalash people." },
      { name: "Shandur Pass", description: "Known for the famous Shandur Polo Festival, the world's highest polo ground." }
    ]
  },
  {
    city: "Rawalpindi",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Ayub National Park", description: "A large park offering picnic spots and outdoor activities." },
      { name: "Rawalpindi Cricket Stadium", description: "A major venue for cricket matches and events in Pakistan." }
    ]
  },
  {
    city: "Ziarat",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Ziarat Residency", description: "The historic residence of Pakistan's founder, Muhammad Ali Jinnah." },
      { name: "Juniper Forest", description: "One of the highest juniper forests in the world." }
    ]
  },
  {
    city: "Muzaffarabad",
    image: "/f-16.webp",
    majorAreas: [
      { name: "Pir Chinasi Shrine", description: "A revered shrine situated on a hilltop with panoramic views." },
      { name: "Neelum Valley", description: "A picturesque valley with stunning lakes, waterfalls, and hiking routes." }
    ]
  }
];



  let country='India'

  return (
    <div className='w-full flex flex-col space-y-7 items-center justify-center bg-[#eff3f8] p-5'>
       {/* Text */}
       <h1 className={`${jost.className} text-xl w-full font-semibold`}>Explore Iran from Thu 19 to Thu 26 June</h1>
       
       {/* Data */}
       <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {/* Countres 1 */}
            {areas.map((data,index)=>
        <Link href={`${country}/selectDepart/${data.city}`}  key={index} className="hover:cursor-pointer h-32 sm:h-80 b  shadow-sm hover:shadow-lg  duration-500   flex sm:flex-col  white items-center justify-center w-full border rounded-md   ">
        
      
        {/* Image */}
         <Image height={350} width={350} src={image} className="h-full sm:max-h-[65%] rounded-l-md sm:rounded-bl-none sm:rounded-t-md object-cover w-full max-w-[30%] sm:max-w-full " alt="bbbb" />

        {/* Data */}
        <div className="w-full  h-full max-w-[70%] sm:max-w-full sm:max-h-[35%]  flex flex-col space-y-2 item-center justify-center bg-white p-3 sm:p-5 rounded-r-md sm:rounded-none sm:rounded-b-md  ">
          <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>Tehran</span>

          {/* flights */}
          <div className='flex flex-col items-center justify-between'>
          <div className="w-full flex item-center justify-between ">
            <span className={`${jost.className} text-sm sm:text-lg font-semibold`} >Flights</span>
            <div className="flex item-center justify-center gap-x-1">
              <span className={`${jost.className} text-md sm:text-lg font-semibold`}>Rs 120,301</span> <span className='hidden sm:block pt-1'><LuExternalLink /></span>
            </div>
          </div>

          {/* hotels */}
          <div className="w-full flex item-center justify-between">
            <span className={`${jost.className} text-sm  sm:text-lg  font-semibold`}>Hotels</span>
            <div className="flex item-center justify-center gap-x-1">
              <span className={`${jost.className} text-md sm:text-lg font-semibold`}>Rs 19,964</span>  <span className='hidden sm:block pt-1'><LuExternalLink /></span>
            </div>
          </div>
          </div>
        </div>
         </Link>
   )}


        </div>
    </div>
  )
}

export default FlightsArray