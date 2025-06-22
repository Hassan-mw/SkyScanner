'use client'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { FaSort } from "react-icons/fa6"
  import { MdError } from "react-icons/md"
  import { Jost } from "next/font/google"
  

const jost=Jost({
  subsets:['latin'],
  weight:['500']
})
  
function ShowHotelHomeFilter() {
    return (
       <div className="flex flex-col space-y-4 w-full ">
        {/* small hidden */}
    <div className="w-full flex flex-col space-y-4 items-start sm:hidden"> 
       <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="space-x-3"> <FaSort /><span className="text-sm font-thin">Sort by</span></MenubarTrigger>
          <MenubarContent className="py-3 px-8 w-full flex flex-col items-start justify-start ">
            <MenubarItem className="text-xl"> View Hotels by </MenubarItem>
            <MenubarItem className={`${jost.className} text-blue-600`}>Best</MenubarItem>
            <MenubarItem className={`${jost.className} text-blue-600`}>Top review</MenubarItem>
            <MenubarItem className={`${jost.className} text-blue-600`}>Lower price</MenubarItem>
            <MenubarItem className={`${jost.className} text-blue-600`}>Most stars</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    
    </div>
    {/* smallShow */}
     <div className=" items-center justify-center space-x-4 hidden sm:block">
     <span className="text-base font-semibold">View hotels by</span>
     <span style={{fontWeight:300}} className={`${jost.className} text-blue-600 text-base`}> Best</span>
     <span style={{fontWeight:300}}  className= {`${jost.className} text-blue-600 text-base`}> Top review</span>
     <span  style={{fontWeight:300}}  className={`${jost.className} text-blue-600 text-base`}> Lowest price</span>
     <span  style={{fontWeight:300}}  className={`${jost.className} text-blue-600 text-base`}> Most stars</span>
     </div>
     <div className="bg-[#eff3f8] flex space-x-3 p-4 rounded-md max-w-screen-lg">
      <div className="text-slate-600"><MdError /></div>
      <div className="text-xs">Prices may change – pop in your dates for the best estimate. Note that prices are based on previous traveller searches and partner prices</div>
    </div>
      </div>
    )
}

export default ShowHotelHomeFilter
