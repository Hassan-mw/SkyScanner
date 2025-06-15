'use client'
function finalPageFilters({handleShowSidebar,setShowSideBar,setShowSideBarSort}) {
    return (
        <div  className=" w-full flex flex-col bg-blue-400items-center justify-center   rounded-2xl px-4">
            {/* Filters button */}
              <div className="flex w-full space-x-1   ">
              <span onClick={()=>handleShowSidebar("Filter")} className="flex items-center justify-center  w-1/2 rounded-md px-3  text-xl font-semibold duration-300  bg-slate-300  "> Filter</span>
              <span  onClick={()=>handleShowSidebar("Sort")} className="flex items-center justify-center  w-1/2 rounded-md px-3  text-xl font-semibold duration-300  bg-slate-300  "> Sort</span>
              {/* <span onClick={(pre)=>setShowSideBar(true)} className=" flex items-center justify-center   w-1/2 rounded-md px-3  text-xl font-semibold duration-300  bg-slate-300  "> Filter</span> */}
              </div>
             {/* Filter otion show at large */}
              <div className="w-full flex items-center justify-between  p-6">
             
                <div className="  font-thin">Result : 9</div>
                <div className="hidden lg:block ">
                <span className="text-sm ">Sort by</span>
                <select className="p-2 rounded-2xl">
                <option>Cheap</option>
                <option>Middle</option>
                <option>Expensive</option>
                </select>
                </div>
              </div>
               </div>
    )
}

export default finalPageFilters
