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
  
  
function ShowHotelHomeFilter() {
    return (
       <div className="flex flex-col space-y-4 w-full">
        {/* small hidden */}
    <div className="w-full flex flex-col space-y-4 items-start sm:hidden"> 
       <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="space-x-3"><ion-icon name="options-outline"></ion-icon> <span className="text-sm font-thin">Sort by</span></MenubarTrigger>
          <MenubarContent className="py-4 px-8 w-full flex flex-col items-start justify-start ">
            <MenubarItem className="text-xl"> View Hotels by </MenubarItem>
            <MenubarItem className="text-blue-600">Best</MenubarItem>
            <MenubarItem className="text-blue-600">Top review</MenubarItem>
            <MenubarItem className="text-blue-600">Lower price</MenubarItem>
            <MenubarItem className="text-blue-600">Most stars</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    
    </div>
    {/* smallShow */}
     <div className=" items-center justify-center space-x-4 hidden sm:block">
     <span className="text-base font-semibold">View hotels by</span>
     <span className="text-blue-600 text-base"> Best</span>
     <span className="text-blue-600 text-base"> Top review</span>
     <span className="text-blue-600 text-base"> Lowest price</span>
     <span className="text-blue-600 text-base"> Most stars</span>
     </div>
     <div className="bg-slate-200 flex space-x-3 p-4 rounded-xl max-w-screen-lg">
      <div><ion-icon name="alert-circle-outline"></ion-icon></div>
      <div className="text-xs">We use indicative prices on this page to help you choose from a large number of options. The prices on this page are indicative estimates based on searches conducted by travellers on Skyscanner, which are subject to change.</div>
    </div>
      </div>
    )
}

export default ShowHotelHomeFilter
