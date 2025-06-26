import Image from 'next/image'
import React from 'react'

const BestCarCompaniesComparision = () => {
  return (
    <div className='w-full grid grid-cols-1'>
      
      {/* 1 */}
       <div className='w-full flex flex-col space-y-2 rounded-md border shadow p-2'>
          {/* Logo_price */}
          <div className='w-full flex items-center justify-start'> 
          <Image height={100} width={100} src="/eurocar.png" alt='eurocar'/>
          </div>
        </div> 

      
    </div>
  )
}

export default BestCarCompaniesComparision