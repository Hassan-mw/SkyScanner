'use client'
import { GiCommercialAirplane } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { Jost } from "next/font/google"
import { IoBed } from "react-icons/io5";
 import { FaCarSide } from "react-icons/fa";


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})




function Navigation() {
    const pathname=usePathname();
    
    return (
        <div className="w-full flex flex-col max-w-screen-xl items-center justify-center  p-3 md:p-6 space-y-8 bg-[#05203c]">
          
        <div className="flex w-full items-center justify-between  bg-[#05203c] text-white">
        {/* Home_page_logo */}
        <Link href="/" className=" flex items-center justify-center space-x-2 ">
           <Image height={40} width={40} className="size-10 md:size-12 pb-[6px]" src="/skyscanner.gif" alt="logo"/>
           <span className="text-xl md:text-2xl font-semibold ">Skyscanner</span>
         </Link>

        {/* favourite_login  */}
        <div className="flex items-center justify-center  space-x-5 mr-3 ">
          <h2 className="flex text-sm"> ENG </h2>
          <span className="text-xl "><FaHeart /></span>
          <span className="md:hidden text-2xl"><IoPersonCircleSharp /></span>
          <div className="hidden md:block px-6 py-1 text-md font-semibold bg-slate-200 rounded-lg text-slate-900 hover:cursor-pointer">Log in</div>
        </div>

         </div>

         {/* Page_navigatins_icons */} 
         <div className="flex w-full items-start justify-start space-x-1 text-white">
            <Link href="/flights" className={`${pathname.includes("/flights") && 'bg-[#0062e3]  border-[#0062e3] '}  border py-1 px-2  rounded-2xl min-w-[100px]  duration-500 flex items-center justify-center gap-2 hover:border-[#05203c]  hover:bg-[#05203c] `}> <GiCommercialAirplane /> <span className={`${jost.className} `}>Flight</span> </Link> 
            <Link href="/hotels"  className={`${pathname.includes("/hotels") && 'bg-[#0062e3]  border-[#0062e3] '} border py-1 px-2  rounded-2xl min-w-[100px]  duration-500 flex items-center justify-center gap-2 hover:border-[#05203c]  hover:bg-[#05203c]  `}><IoBed /> Hotel </Link> 
            <Link href="/carhire"  className={`${pathname.includes("/carhire") && 'bg-[#0062e3]  border-[#0062e3] '} border py-1 px-2  rounded-2xl min-w-[100px]  duration-500 flex items-center justify-center gap-2 hover:border-[#05203c]  hover:bg-[#05203c]  `}><FaCarSide /> Car Hire </Link> 
         </div>
       
        </div>
    )
}

export default Navigation
