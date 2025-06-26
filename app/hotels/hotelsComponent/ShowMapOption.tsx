'use client'
import Image from 'next/image';
import { FaMap } from 'react-icons/fa6';



function ShowMapOption({country}:{country:string}) {
  return (
  <div className='w-full  h-[400px]  space-y-3'>
    
     <h1 className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">See all hotel in {country}</h1>   
    <div className='w-full relative  h-[300px]  space-y-3'>
      <Image height={1200} width={1200} className='w-full bg-green-500 rounded-md h-[300px] object-cover' src="/google_map_image.webp" alt='map_image'/>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center '>
         <div className=' flex items-center justify-center gap-x-2 bg-[#05203c] p-3 rounded-md w-42 text-white '><FaMap/><span>Explore map</span></div>
      </div>
    </div>
    
  </div>
            
    )
}

export default ShowMapOption
