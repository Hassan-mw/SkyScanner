import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
    subsets:['latin'],
    weight:['500']
})


const CarDetails = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-start justify-start ">
        <h1 className={`${jost.className} text-2xl md:text-3xl lg:text-4xl`}>The most popular car rental companies in Dubai</h1>
        <div className="w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-3 ">
            <Image height={100} width={100} className="border shadow rounded-md" src="/amex.png" alt="euro_car" />
            <Image height={100} width={100} className="border shadow rounded-md" src="/rental24.png" alt="euro_car" />
            <Image height={100} width={100} className="rounded-md" src="/sixt.png" alt="euro_car" />
            <Image height={100} width={100} className="border shadow rounded-md" src="/autostart.png" alt="euro_car" />
            <Image height={100} width={100} className="border shadow rounded-md" src="/goldenkey.png" alt="euro_car" />
            <Image height={100} width={100} className="border shadow rounded-md" src="/hit.png" alt="euro_car" />
        </div>
    </div>

  )
}

export default CarDetails