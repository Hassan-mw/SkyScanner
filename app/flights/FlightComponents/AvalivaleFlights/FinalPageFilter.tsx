'use client'
import { Jost } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
   
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
        <div  className=" w-full flex flex-col bg-blue-400items-center justify-center   rounded-2xl px-4">
            {/* Filters button */}
              <div className=" w-1/2 grid grid-cols-3 gap-4   ">
              <h1 onClick={()=>handleShowSidebar("Filter")} className={`${jost.className} flex items-center justify-center  w-full rounded-md p-2  text-md font-semibold duration-300 text-white border border-[#eff3f8] hover:border-[#05203c] hover:bg-[#eff3f8] hover:text-[#05203c] bg-[#05203c] `}> Filter</h1>
              <h1 onClick={()=>handleShowSidebar("Sort")} className={`${jost.className} flex items-center justify-center  w-full rounded-md p-2  text-md font-semibold duration-300 text-white border border-[#eff3f8] hover:border-[#05203c] hover:bg-[#eff3f8] hover:text-[#05203c] bg-[#05203c] `}> Sort</h1>
              {/* <span  onClick={()=>handleShowSidebar("Sort")} className="flex items-center justify-center  w-1/2 rounded-md px-3  text-xl font-semibold duration-300  bg-slate-300  "> Sort</span> */}
              {/* <span onClick={(pre)=>setShowSideBar(true)} className=" flex items-center justify-center   w-1/2 rounded-md px-3  text-xl font-semibold duration-300  bg-slate-300  "> Filter</span> */}
              </div>
             {/* Filter otion show at large */}
              <div className="w-full flex items-center justify-between  p-6">
             
                <span  className={`${jost.className} text-md`} >Result : 9</span>

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
