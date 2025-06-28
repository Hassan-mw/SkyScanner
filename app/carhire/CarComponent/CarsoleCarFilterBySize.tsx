import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import { Jost } from 'next/font/google';

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

const CarsoleCarFilterBySize = () => {

      const carFilterSizeArray=[
             {id:1,url:'/car_image1.png',size:'Small'},
             {id:2,url:'/car_image2.png',size:'Big'},
             {id:3,url:'/car_image3.png',size:'large'},
             {id:4,url:'/car_image4.png',size:'Small'},
             {id:5,url:'/car_image5.png',size:'SUV'},
             {id:6,url:'/car_image6.png',size:'Luxury'}
              ]

              
  return (
  <div className='w-full flex flex-col space-y-3'>
  
  
    <Carousel>
       <CarouselContent  className="w-full ">
           {
             carFilterSizeArray.map((data,index)=>
                <CarouselItem  key={data.id}  className="basis-1/2 w-full flex items-center justify-center  sm:basis-1/3 md:basis-1/4 " >
                    <div className='w-full flex items-center justify-center bg-white gap-2 py-2 shadow rounded-md border '>
                     <Image  height={80} width={80} src={data.url} alt='small' />
                      <div className="flex flex-col items-start justify-start">
                        <span className={`${jost.className} text-sm`}>{data.size}</span>
                        <span style={{fontWeight:200}} className={`${jost.className} text-gray-500 text-[10px]`}>from Rs 3,721</span>
                      </div> 
                   </div>
               </CarouselItem>
             )} 
      </CarouselContent>
    </Carousel>
    


    {/* Filter_Sortby */}
    <div className='w-full flex items-center justify-between'>
            <span  className={`${jost.className} text-sm`}>28 result found</span>
            <div className='flex items-center justify-center gap-x-3'>
              <span className={`${jost.className} text-sm`}>Sort by</span>
              <select className='w-36 px-2 py-1 border focus:outline-none rounded-sm bg-white'>
                 <option>Recommended</option>
              </select>
           </div>
   
    </div>

    
    {/* Text */}
    <div className='w-full flex justify-start p-3 rounded-md bg-white'>
       <span className='text-sm'>We find prices from all across the web – what providers pay us affects how we sort results. <span className='border-b text-xs'>Learn how Skyscanner workd</span></span>
    </div>
       
    
    
    </div>
  )
}

export default CarsoleCarFilterBySize