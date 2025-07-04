'use client'
import Image from 'next/image'
import Link from 'next/link'
import  {  useEffect, useState } from 'react'
import { Jost } from 'next/font/google'
import { LuExternalLink } from "react-icons/lu";


const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const FlightsArray = ({countryData}) => {

  const [data,flightData]=useState([])

    useEffect(() => {
      const saved = localStorage.getItem("flgightData");
      if (saved) {
        flightData(JSON.parse(saved));
       }
    }, []);

 console.log(data)
 const [filteroptons,setFileroptions]=useState('')

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

const fileredOptionsArray=[
    {id:1,text:"Cheapest flights"},
    {id:2,text:"Suggested for you"},
    {id:3,text:"Great  food"},
    {id:4,text:"Outdoor advantages"},
]



  let country='India'

  return (
    <div className='w-full   flex items-center justify-center bg-[#eff3f8] p-5'>


    <div className='w-full  max-w-screen-xl flex flex-col space-y-7 py-8 items-center justify-center  '>

       {/* Hero_Section */}
       <div className='w-full flex flex-col items-start justify-start space-y-2'>
       {/* Text */}
       <h1 className={`${jost.className} text-2xl sm:text-3xl w-full font-semibold`}>Explore Iran from Thu 19 to Thu 26 June</h1>
       {/* filtered-array */}
       <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3'>
       {fileredOptionsArray.map((data,index)=>
       <span onClick={()=>setFileroptions(data.text)}  key={index} className={`hover:cursor-pointer px-3 py-2 rounded-md text-xs text-center border ${data.text===filteroptons ? 'text-white bg-[#05203c] border-[#05203c]' :' bg-transparent  border-slate-300'}`}>{data.text}</span>)}
       </div>
       </div>



       {/* Data */}
       <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {/* Countres 1 */}
            {countryData.map((data,index)=>
        <Link href={`${data.fromcountry}/departlocation/${data.tolocation}`}  key={index} className="hover:cursor-pointer h-32 sm:h-80 b  shadow-sm hover:shadow-lg  duration-500   flex sm:flex-col  white items-center justify-center w-full border rounded-md   ">
        
           {/* Image */}
           <Image height={350} width={350} src={`/${data.tolocationimage}`}  className="h-full sm:max-h-[65%] rounded-l-md sm:rounded-bl-none sm:rounded-t-md object-cover w-full max-w-[30%] sm:max-w-full " alt="bbbb" />

        {/* Data */}
        <div className="w-full  h-full max-w-[70%] sm:max-w-full sm:max-h-[35%]  flex flex-col space-y-2 item-center justify-center bg-white p-3 sm:p-5 rounded-r-md sm:rounded-none sm:rounded-b-md  ">
          <span className={`${jost.className} text-lg sm:text-xl font-semibold`}>{data.tolocation}</span>

          <div className='flex flex-col items-center justify-between'>
             {/* flights */}
              <div className="w-full flex item-center justify-between ">
                 {/* Left */}
                 <span className={`${jost.className} text-sm sm:text-lg font-semibold`} >Flights</span>
                 {/* right */}
                 <div className="flex item-center justify-center gap-x-1">
                    <span className={`${jost.className} text-md sm:text-lg font-semibold`}>Rs 120,301</span> <span className='hidden sm:block pt-1'><LuExternalLink /></span>
                 </div>
               </div>

              {/* hotels */}
              <div className="w-full flex item-center justify-between">
                 {/* Left */}
                 <span className={`${jost.className} text-sm  sm:text-lg  font-semibold`}>Hotels</span>
                 {/* right */}                 
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


    </div>
  )
}

export default FlightsArray