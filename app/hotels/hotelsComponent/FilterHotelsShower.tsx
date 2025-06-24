'use client';

import { Jost } from "next/font/google";
import { Dispatch, SetStateAction, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { IoIosArrowDown, IoMdAlert } from "react-icons/io";

const jost=Jost({
    subsets:['latin'],
    weight:['500']
})

function FilterHotelsShower({setShowSideBar}:{setShowSideBar:Dispatch<SetStateAction<boolean>>}) {
    const [filteredData,setFilteredData]=useState('')
    console.log(filteredData)
    const fileredArray=[
        {id:1,data:'Recommended'},
        {id:2,data:'Top reviews'},
        {id:3,data:'Lowest price'},
        {id:4,data:'Most star'},
        {id:5,data:'Middle price'}
    ]
    return (
        <div className="w-full flex flex-col space-y-2">

       <div className="flex flex-col items-start  justify-start space-y-3 w-full">
       
       <div className=" w-full flex items-center justify-start gap-x-4">
        {/* 1 */}
        <div onClick={()=>setShowSideBar(true)} className="2xl:hidden  text-[#727279] border border-[#d0d5dd] py-1 px-3 rounded-sm  text-xl flex items-center justify-center  hover:cursor-pointer gap-x-2">
           <div className="text-gray-600"><FaFilter size={10} /> </div>
           <span style={{fontWeight:400}} className={` text-sm`}>Filters</span>
        </div>
        {/* 2 */}
        <div onClick={()=>setShowSideBar(true)} className="2xl:hidden  text-[#727279] border border-[#d0d5dd] py-1 px-3 rounded-sm  text-xl flex items-center justify-center  hover:cursor-pointer gap-x-2">
           <span style={{fontWeight:400}} className={` text-sm`}>Filters</span>
           <div className="text-gray-600"><IoIosArrowDown size={10}/> </div>
        </div>
        {/* 3 */}
        <div onClick={()=>setShowSideBar(true)} className="2xl:hidden  text-[#727279] border border-[#d0d5dd] py-1 px-3 rounded-sm  text-xl flex items-center justify-center  hover:cursor-pointer gap-x-2">
           <span style={{fontWeight:400}} className={` text-sm`}>Sort By</span>
           <div className="text-gray-600"><IoIosArrowDown size={10} /> </div>
        </div>
       </div>
        
        {/* text  */}
        <div  className="flex items-center justify-center gap-x-2 text-[#626b71]" >
            <span style={{fontWeight:300}}className={`${jost.className} text-sm`}> All taxes and free  included | 344 result </span>
            <IoMdAlert />
        </div>
        </div>


        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7  gap-8 bg-white py-0 gap-x-2 rounded-sm text-[11px] md:text-md px-3">
            { fileredArray.map((data,index)=>
              <span key={index} onClick={()=>setFilteredData(data.data)} className={`${data.data===filteredData ? ' border-blue-700' : 'border-b-white'} py-2 bg-white flex items-center justify-center  border-b-2 hover:cursor-pointer    `} >{data.data}</span>
             )}
        </div> 
       
        </div>
    )
}

export default FilterHotelsShower
