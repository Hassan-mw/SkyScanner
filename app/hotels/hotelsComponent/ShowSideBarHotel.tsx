'use client';


import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, useEffect, useState } from "react";
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
      const [hotelsStar,setHotelsStar]=useState('')
      const [distance,setDistance]=useState('0')
      const [room,setRoom]=useState('0')
      const [websiteName,setWebsiteName]=useState('All')


    useEffect(() => {
      const params = new URLSearchParams(searchParams);
  
      price !== '0' ? params.set('price', price) : params.delete('price');
      distance !== '0' ? params.set('distancecity', distance) : params.delete('distance');
      room !== '0' ? params.set('room', room) : params.delete('room');
      hotelsStar !== '' ? params.set('star', hotelsStar) : params.delete('star');
      websiteName !== 'All' ? params.set('websitename', websiteName) : params.delete('websitename');
      freeCancel ?  params.set('cancelation', 'true') : params.delete('cancelation');
      breakFast ? params.set('breakfast', 'true') : params.delete('breakfast');
    
      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }, [freeCancel,breakFast,price,distance,hotelsStar,websiteName,room]);
  

    useEffect(() => {
    const cancelation = searchParams.get('cancelation') === 'true';
    setFreeCancel(cancelation); 
    const urlBreakfase = searchParams.get('breakfast') === 'true';
    setBreakFast(urlBreakfase); 
    const urlStar = searchParams.get('star') !==null
    setHotelsStar(urlStar); 
     }, []); // Runs once on mount
 console.log(hotelsStar)
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
              <span className="text-xs">{price==='0' ? 'All Price' : price + 'Price'} </span>
              <input
                className="w-full"
                type="range"
                min="0"
                max="30000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>


            {/* Distance from city */}
           <div className="flex flex-col space-y-2 w-full">
              <span className="text-xs">{distance==='0' ? 'All Distance' : distance} </span>
              <input
                className="w-full"
                type="range"
                min="0"
                max="50"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            


            {/* Stars */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Hotel star rating</span>
                  <div className="flex items-center justify-start space-x-2">
                    <div><input checked={'All'===hotelsStar}  value={'All'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">All Stars</span> </div> 
                  </div>
                    
              <div  className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                    <div><input checked={'1'===hotelsStar}  value={'1'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">1 Stars</span><span className="pb-1 text-xs">⭐</span> </div> 
                  </div>
              </div>
              <div  className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'2'===hotelsStar}  value={'2'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">2 Stars</span><span className="pb-1 text-xs">⭐⭐</span> </div> 
                  </div>
              </div>
              <div  className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                      <div><input checked={'3'===hotelsStar}  value={'3'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">3 Stars</span><span className="pb-1 text-xs">⭐⭐⭐</span> </div> 
                  </div>
              </div>
              <div  className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'4'===hotelsStar}  value={'4'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">4 Stars</span><span className="pb-1 text-xs">⭐⭐⭐⭐</span> </div> 
                  </div>
              </div>
              <div  className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                      <div><input checked={'5'===hotelsStar}  value={'5'} onChange={(e)=>setHotelsStar(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">5 Stars</span><span className="pb-1 text-xs">⭐⭐⭐⭐⭐</span> </div> 
                  </div>
              </div>
           
            </div>

            



            {/* Website Name */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Avaliable Websites</span>
              
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'Booking.com'===websiteName}  value={'Booking.com'} onChange={(e)=>setWebsiteName(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">Booking.com</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'Agoda.com'===websiteName}  value={'Agoda.com'} onChange={(e)=>setWebsiteName(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">Agoda.com</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'Exprdia.com'===websiteName}  value={'Exprdia.com'} onChange={(e)=>setWebsiteName(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">Exprdia.com</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={'Hotels.com'===websiteName}  value={'Hotels.com'} onChange={(e)=>setWebsiteName(e.target.value)}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">Hotels.com</span></div> 
                  </div>
              </div>

            </div>



            {/* Rooms  */}
            <div className="flex flex-col space-y-2">
            <span className="text-[#161616] text-lg font-semibold">Avaliable Rooms</span>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room==='1'} onChange={()=>setRoom('1')}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">1 Room</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room==='2'} onChange={()=>setRoom('2')}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">2 Rooms</span></div> 
                  </div>
              </div>
              <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center space-x-2">
                     <div><input checked={room==='3'} onChange={()=>setRoom('3')}  name="checkboxprice" className="size-4" type="radio"/></div>
                     <div className="flex items-center justify-center gap-x-1"><span className="text-lg pb-1 text-[#161616]">3 Rooms</span></div> 
                  </div>
              </div>
            
            </div>


    </div>
    </div>
    )
}

export default ShowSideBarHotel
