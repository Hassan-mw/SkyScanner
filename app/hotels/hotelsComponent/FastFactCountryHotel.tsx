
function FastFactCountryHotel() {
    return (
        <div className="w-full h-full  max-w-screen-xl px-3 ">
            {/* First */}
            <div className="w-full h-full flex flex-col  space-y-7 items-center justify-center">
                {/* Upper text */}
               <div className="flex flex-col w-full items-start space-y-3">
                   <div className="text-2xl md:text-3xl font-semibold">Fast facts</div>
                   <div className="text-sm text-slate-600">Sleep easy, armed with the stuff that's good to know before you go.</div>
               </div>
               <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* 1 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold"><ion-icon name="star"></ion-icon></div>
                   <div className="text-sm text-slate-600">Highest rated hotel</div>
                   <div className="font-semibold text-blue-600">Narcissus Al Hamra Hotel Jeddah – 5</div>
               </div>
                {/* 2 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold"><ion-icon name="calendar"></ion-icon></div>
                   <div className="text-sm text-slate-600">Cheapest month to booke</div>
                   <div className="font-semibold text-blue-600">September</div>
               </div>
                {/* 3 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold"><ion-icon name="pricetag"></ion-icon></div>
                   <div className="text-sm text-slate-600">Average 4 star hotel price</div>
                   <div className="font-semibold text-blue-600">Rs33,302 per night</div>
               </div>
               {/* 4 */}
                 <div className="flex flex-col w-full items-start">
                   <div className="text-2xl font-semibold"><ion-icon name="pricetag"></ion-icon></div>
                   <div className="text-sm text-slate-600">Average 5 star hotel price</div>
                   <div className="font-semibold text-blue-600">Rs129,812 per night</div>
               </div>
               </div>
                
               </div>
              
              
            </div>
        
    
    )
}

export default FastFactCountryHotel
