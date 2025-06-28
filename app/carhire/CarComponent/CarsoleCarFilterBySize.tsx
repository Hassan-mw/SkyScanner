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
    <Carousel>
       <CarouselContent  className="w-full ">
           {
             carFilterSizeArray.map((data,index)=>
                <CarouselItem  key={data.id}  className="basis-1/2 w-full flex items-center justify-center  sm:basis-1/3 md:[25%] " >
                    <div className='w-full flex flex-col items-center justify-center space-y-1 shadow rounded-md border '>
                     <Image  height={100} width={100} src={data.url} alt='small' />
                      <div className="flex flex-col items-start justify-start">
                        <span className={`${jost.className} text-sm`}>{data.size}</span>
                        <span style={{fontWeight:200}} className={`${jost.className} text-gray-500 text-[10px]`}>from Rs 3,721</span>
                      </div> 
                   </div>
               </CarouselItem>
             )} 
      </CarouselContent>
    </Carousel>
  )
}

export default CarsoleCarFilterBySize