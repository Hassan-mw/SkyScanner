'use client';


import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";

function ShowSideBarHotel() {
    const [currentPrriceId,setCheckCurentPriceId]=useState(1)
    const [currentStarId,setCheckCurentStarsId]=useState(1)
      const searchParams = useSearchParams();
      const pathName = usePathname();
      const router = useRouter();
      
      ////////////
      const [freeCancel,setFreeCancel]=useState(false)
      const [breakFast,setBreakFast]=useState(false)
      const [price,setPrice]=useState('0')
      const [distance,setDistance]=useState(0)
      const [room,setRoom]=useState(0)
      const [websiteName,setWebsiteName]=useState('')


    useEffect(() => {
      const params = new URLSearchParams(searchParams);
  
      price !== '1' ? params.set('totaltime', totaltime) : params.delete('totaltime');
      checkStops !== 'All' ? params.set('journey', checkStops) : params.delete('journey');
      checkAirline !== 'All' ? params.set('planename', checkAirline) : params.delete('planename');
      checkSort !== '' ? params.set('sort', checkSort) : params.delete('sort');
      cabinBag && params.set('cabinbag', 'true');
      cabinBagChecked && params.set('checkedbag', 'true');
  
      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }, []);
  


    const priceArray=[
        {id:1,start:0,end:'62,800'},
        {id:2,start:'62,800',end:'125,6000'},
        {id:3,start:'125,6000',end:'188,400'},
        {id:4,start:'188,400',end:'251,200'},
        {id:5,start:'251,200',end:'314,400'},
 
    ]
    const hotelStarArray=[
        {id:1,type:'5 stars',start:'⭐⭐⭐⭐⭐'},
        {id:2,type:'4 stars',start:'⭐⭐⭐⭐'},
        {id:3,type:'3 stars',start:'⭐⭐⭐'},
        {id:4,type:'2 stars',start:'⭐⭐'},
        {id:5,type:'1 stars',start:'⭐'},
    ]
    const hotelfacilitiesArray=[
        {id:1,type:'Wi-Fi'},
        {id:2,type:'Airport shuttle'},
        {id:3,type:'Parcking'},
        {id:4,type:'Fitness centre'},
        {id:5,type:'pool'},
    ]
    const hotelsWebsite=[
        {id:1,type:'Booking.com'},
        {id:2,type:'Agoda.com'},
        {id:3,type:'Expedia.com'},
        {id:4,type:'Agoda.com'}
    ]



    return (
    <div className={`min-w-[300px] w-full   h-[90vh]  overflow-hidden  overflow-y-auto `}>
    <div className="w-full flex flex-col items-start  px-3   space-y-6 py-4 pb-36  ">
          
           {/* button */}
           {/* <span className="2xl:hidden p-2 fixed top-0 left-0 bg-blue-700 hover:bg-blue-900 duration-200 shadow-2xl  text-white rounded-br-2xl text-2xl font-semibold w-1/2 flex items-center justify-center" onClick={()=>setShowSideBar(false)} >Close</span> */}
          
           {/* Startup deals*/}
            <div className="flex items-center justify-start gap-x-3 border-t pt-5 w-full">
                <div className="text-[#626971]"><GiRotaryPhone /></div>
               <span className="text-[#161616] font-semibold">Book with the piece of mind  </span>           
            </div>
                

            {/* Options */}
           <div className="flex flex-col items-start space-y-2">
               {/* CANCELATION */}
               <div className="flex items-center justify-center space-x-2">
                    <input checked={freeCancel} onChange={(e)=>setFreeCancel(e.target.checked)} className="size-3 " type="checkbox"/>
                    <span  className="text-md font-normal pb-1 text-[#161616]">Free cancellation</span>
               </div>
               {/* BREAKFAST */}
               <div className="flex items-center justify-center space-x-2">
                    <input checked={breakFast} onChange={(e)=>setBreakFast(e.target.checked)} className="size-3 " type="checkbox"/>
                    <span  className="text-md font-normal pb-1 text-[#161616]">Breakfast included</span>
               </div>
          
            </div>


            {/* Pricing */}
           <div className="flex flex-col space-y-2 w-full">
              <span className="text-xs">{price===0 ? 'All' : price} Price</span>
              <input
                className="w-full"
                type="range"
                min="1"
                max="12"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>


            {/* Distance from city */}
           <div className="flex flex-col space-y-2 w-full">
              <span className="text-xs">{distance===0 ? 'All' : distance} </span>
              <input
                className="w-full"
                type="range"
                min="1"
                max="12"
                value={price}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            


            {/* Stars */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Hotel star rating</span>
            {hotelStarArray.map((data,index)=>          
              <div key={data.id} className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input value={websiteName} onChange={()=>setWebsiteName(data.type)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">{data.type}</span><span className="pb-1 text-xs"> {data.start}</span> </div> 
                  </div>
              </div>
            )}
            </div>

            



            {/* Website Name */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Avaliable Websites</span>
            {hotelsWebsite.map((data,index)=>          
              <div key={data.id} className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={data.id===currentStarId} onChange={()=>setCheckCurentStarsId(data.id)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">{data.type}</span></div> 
                  </div>
              </div>
            )}
            </div>



            {/* Rooms  */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Avaliable Rooms</span>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room===1} onChange={()=>setRoom(1)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">1 Room</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room===2} onChange={()=>setRoom(2)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">2 Rooms</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room===3} onChange={()=>setRoom(3)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">3 Rooms</span></div> 
                  </div>
              </div>
            
            </div>


    </div>
    </div>
    )
}

export default ShowSideBarHotel
