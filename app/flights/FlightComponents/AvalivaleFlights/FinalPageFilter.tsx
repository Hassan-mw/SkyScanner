'use client'
import { Jost } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { FaBell } from "react-icons/fa6";   
import { IoAlertCircle } from "react-icons/io5";

 const jost=Jost({
   subsets:['latin'],
   weight:['400']
   
 })


 type finalPageFilerDataType ={
 handleShowSidebar:(data:string)=>void
 setShowSideBar:Dispatch<SetStateAction<boolean>>
 setShowSideBarSort:Dispatch<SetStateAction<boolean>>
  }

function finalPageFilters({handleShowSidebar,setShowSideBar,setShowSideBarSort}:finalPageFilerDataType) {
    return (
        <div  className=" w-full flex flex-col  items-center justify-center  rounded-2xl px-3 space-y-3 ">

            {/* Filters button */}
            <div className=" w-full flex items-center justify-between space-x-3  ">
              <h1 onClick={()=>handleShowSidebar("Filter")} className={`${jost.className} flex items-center justify-center  w-full rounded-md p-2  text-md font-semibold duration-300 bg-[#e0e4e9] hover:cursor-pointer hover:bg-[#c0c3c7] `}> Filter</h1>
              <h1 onClick={()=>handleShowSidebar("Sort")} className={`${jost.className} flex items-center justify-center  w-full rounded-md p-2  text-md font-semibold duration-300 text-black bg-[#e0e4e9] hover:cursor-pointer hover:bg-[#c0c3c7]`}> Sort</h1>
              <div className="size-10 w-[20%] flex items-center justify-center bg-[#e0e4e9] hover:cursor-pointer hover:bg-[#c0c3c7] duration-500 border rounded-sm text-black"><FaBell /></div>
            </div>

            {/* Filter otion show at large */}
             <div className="w-full flex items-center justify-between  ">
             
            <div className="flex items-center justify-center gap-x-2"> <span  className={`${jost.className} text-md`} >298 results sorted by Best</span> <IoAlertCircle size={20} /></div>

                <div className="hidden lg:block border border-slate-300 rounded-md p-1 ">
                <select className=" outline-none rounded-2xl">
                <option className={`${jost.className} text-xs`}>Cheap</option>
                <option className={`${jost.className} text-xs`}>Middle</option>
                <option className={`${jost.className} text-xs`}>Expensive</option>
                </select>
                </div>
              </div>
               </div>
    )
}

export default finalPageFilters
