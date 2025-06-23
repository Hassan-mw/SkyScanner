'use client';


import { Dispatch, SetStateAction, useState } from "react";
import { GiRotaryPhone } from "react-icons/gi";

function ShowSideBarHotel({setShowSideBar}:{setShowSideBar:Dispatch<SetStateAction<boolean>>}) {
    const [currentPrriceId,setCheckCurentPriceId]=useState(1)
    const [currentStarId,setCheckCurentStarsId]=useState(1)
    console.log(currentPrriceId)
    function handleClick(){
        console.log("I AM clicked")
        setShowSideBar(false)
    }
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
    return (
    <div className="flex flex-col items-start  px-2   space-y-6 py-4 pb-36  ">
          
           {/* button */}
           <span className="2xl:hidden p-2 fixed top-0 left-0 bg-blue-700 hover:bg-blue-900 duration-200 shadow-2xl  text-white rounded-br-2xl text-2xl font-semibold w-1/2 flex items-center justify-center" onClick={()=>setShowSideBar(false)} >Close</span>
          
           {/* Startup deals*/}
            <div className="flex items-center justify-start gap-x-3 border-t pt-5 w-full">
                <div className="text-[#626971]"><GiRotaryPhone /></div>
               <span className="text-[#161616] font-semibold">Book with the piece of mind  </span>           
            </div>
                

            {/* Options */}
           <div className="flex flex-col items-start space-y-2">
               {/* CANCELATION */}
               <div className="flex items-center justify-center space-x-2">
                    <input className="size-3 " type="checkbox"/>
                    <span  className="text-md font-normal pb-1 text-[#161616]">Free cancellation</span>
               </div>
               {/* BREAKFAST */}
               <div className="flex items-center justify-center space-x-2">
                    <input className="size-3 " type="checkbox"/>
                    <span  className="text-md font-normal pb-1 text-[#161616]">Breakfast included</span>
               </div>
          
            </div>


            {/* Pricing */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Price</span>
            {priceArray.map((data,index)=>          
              <div key={data.id} className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={data.id===currentPrriceId} onChange={()=>setCheckCurentPriceId(data.id)}  name="checkboxprice" className="size-4" type="checkbox"/></div>
                     <span className="text-md pb-1 text-[#161616]">Rs {data.start} - Rs {data.end}</span>
                  </div>
              </div>
            )}
            </div>


            {/* Stars */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Hotel star rating</span>
            {hotelStarArray.map((data,index)=>          
              <div key={data.id} className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={data.id===currentStarId} onChange={()=>setCheckCurentStarsId(data.id)}  name="checkboxprice" className="size-4" type="checkbox"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">{data.type}</span><span className="pb-1 text-xs"> {data.start}</span> </div> 
                  </div>
              </div>
            )}
            </div>

            {/* FACALITILES */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Amenities</span>
            {hotelfacilitiesArray.map((data,index)=>          
              <div key={data.id} className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={data.id===currentStarId} onChange={()=>setCheckCurentStarsId(data.id)}  name="checkboxprice" className="size-4" type="checkbox"/></div>
                     <span className="text-md pb-1 text-[#161616]">{data.type}</span>
                  </div>
              </div>
            )}
            </div>

    </div>
    )
}

export default ShowSideBarHotel
