import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


const jost=Jost({
    subsets:['latin'],
    weight:['500']
})



const BestCarCompaniesComparision = () => {
    
   const carData=[
       {id:1,image:"/eurocar.png"},
       {id:2,image:"/hertz.png"},
       {id:3,image:"/avis.png"},
       {id:4,image:"/dollar.png"},
       {id:5,image:"/thrifty.png"},
       {id:6,image:"/national.png"}
      ]

return (
  <div className='w-full flex flex-col space-y-5 items-start justify-start'>
    
     <h1 className={`${jost.className} text-2xl md:text-3xl lg:text-4xl`}>Choose from the best car hire companies in Dubai</h1>   
    
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        carData.map((data,index)=>
       <div key={data.id} className='w-full flex flex-col space-y-3 rounded-md border shadow p-2'>
          {/* Logo_price */}
          <div className='w-full flex items-center justify-start gap-x-2'> 
          <Image height={100} width={100} className='rounded-md' src={data.image} alt='eurocar'/>
          <div><span className='text-4xl font-bold text-[#161616]'>4.5</span><span className='text-sm text-gray-500'>/5</span> </div>
          <div className='grid grid-cols-1 gap-0 '>
            <span className='text-[#161616] text-md font-medium'>Good</span> 
            <span className='text-slate-500 text-sm'>1,316 reviews</span> 

          </div>
          </div>


        
        <div className='w-full grid grid-cols-1 gap-2'>

          {/* 1 */}
          <div className='w-full flex flex-col'>
             <div className='w-full flex items-center justify-between'>
              <span>Car condition</span>
             <div><span className='text-md font-normal text-[#161616]'>4.5</span><span className='text-[11px] text-gray-500'>/5</span> </div>
              </div>  
              <div className='w-full bg-[#e0e4e9] rounded-md overflow-hidden h-2'>
                 <div className='w-full max-w-[80%] bg-[#05203c] cursor-context-menu'>.</div>
              </div>
          </div>

          {/* 2 */}
          <div className='w-full flex flex-col'>
             <div className='w-full flex items-center justify-between'>
              <span>Car cleaning</span>
             <div><span className='text-md font-normal text-[#161616]'>4.5</span><span className='text-[11px] text-gray-500'>/5</span> </div>
              </div>  
              <div className='w-full bg-[#e0e4e9] rounded-md overflow-hidden h-2'>
                 <div className='w-full max-w-[80%] bg-[#05203c] cursor-context-menu'>.</div>
              </div>
          </div>

          {/* 3 */}
          <div className='w-full flex flex-col'>
             <div className='w-full flex items-center justify-between'>
              <span>Customer  service</span>
             <div><span className='text-md font-normal text-[#161616]'>4.5</span><span className='text-[11px] text-gray-500'>/5</span> </div>
              </div>  
              <div className='w-full bg-[#e0e4e9] rounded-md overflow-hidden h-2'>
                 <div className='w-full max-w-[80%] bg-[#05203c] cursor-context-menu'>.</div>
              </div>
          </div>

          {/* 4 */}
          <div className='w-full flex flex-col'>
             <div className='w-full flex items-center justify-between'>
              <span>Easy  collection</span>
             <div><span className='text-md font-normal text-[#161616]'>4.5</span><span className='text-[11px] text-gray-500'>/5</span> </div>
              </div>  
              <div className='w-full bg-[#e0e4e9] rounded-md overflow-hidden h-2'>
                 <div className='w-full max-w-[80%] bg-[#05203c] cursor-context-menu'>.</div>
              </div>
          </div>

        </div>

        <div className='w-full text-blue-500 flex gap-x-2 items-center justify-end border-t mt-3 py-4'>
           <span className={`${jost.className} font-semibold text-md`}>View deals</span>
           <FaArrowRight />
        </div>
      
        </div> 

      )}
     


      
    </div>
 
 </div>
  )
}

export default BestCarCompaniesComparision