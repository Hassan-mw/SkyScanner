import Image from "next/image"
// import CustomLinksButton from "./components/CustomLinksButton"

function page() {
  return (
    <div className="w-full  h-full overflow-x-hidden flex flex-col items-center hide-scroolbar bg-white text-white space-y-10">
      {/* Header */}
    <div className="flex flex-col items-center justify-center  w-full min-h-full bg-blue-600">
      <div className="text-6xl sm:text-7xl lg:text-8xl italic p-6 font-semibold ">Sky Scanner</div>
      <div className="pl-2 sm:pl-48 text-xl sm:text-2xl lg:text-4xl text-white">"Find the best flights, at the best prices, with just a few clicks!</div>
    </div>
    {/* All Options */}
    <div className="w-full  flex flex-col items-center justify-center bg-white p-4">
    <div className="w-full max-w-screen-2xl flex flex-col   space-y-8 text-blue-600 p-4 pt-10 ">
      <div className=" text-3xl sm:text-5xl lg:text-7xl  font-semibold flex items-center justify-center  ">Explore the best facelites</div>
    {/* 01 */}
    <div className="flex items-start justify-center  py-12 h-full  ">
      <div className="flex flex-col  w-1/2 space-y-8">
      <div className="flex space-x-4 ">

      <div className="font-bold  text-2xl sm:text-3xl ">01</div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  ">Select the Flight</h1>
      </div>
          <div className="text-xs sm:text-base  lg:text-2xl xl:text-3xl max-w-[90%]">Search for flights to your destination, compare prices, and find the best deals. Whether for business or leisure, booking your flight is quick and simple.</div>
          {/* <div><CustomLinksButton style="bg-white text-blue-700 border hover:text-white border-blue-700 hover:bg-blue-700" href="/flights">Search for Flights</CustomLinksButton></div> */}
      </div>
      <div className=" md:w-[40%] xl:w-[35%]  w-1/2 "><img className=" min-h-[200px]  rounded-2xl object-fill " src="/person_plane.jpg"/></div>
    </div>
    {/* 02 */}
    <div className="flex items-start justify-center gap-10 sm:gap-14 py-12 h-full  ">
    <div className=" md:w-[40%] xl:w-[35%]  w-1/2 "><img className=" min-h-[200px] rounded-2xl object-fill " src="/hotel.jpg"/></div>

      <div className="flex flex-col  w-1/2 space-y-8">
      <div className="flex space-x-4 ">
          <div className="font-bold text-2xl sm:text-3xl ">02</div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  ">Book Your Stay</h1>
         </div>
          <div className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl max-w-[90%]">Find your ideal hotel with ease. Browse through top-rated accommodations worldwide and enjoy exclusive deals.</div>
           
          {/* <div><CustomLinksButton style="bg-white text-blue-700 border hover:text-white border-blue-700 hover:bg-blue-700" href="/hotels">Search for Hotels</CustomLinksButton></div> */}
      </div>
    </div>
    {/* 03 */}
    <div className="flex items-start justify-center  py-12 h-full  ">
      <div className="flex flex-col  w-1/2 space-y-8">
      <div className="flex space-x-4 ">
    <div className="font-bold  text-2xl sm:text-3xl ">03</div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold  ">Hire a Car for Your Journey</h1>
         </div>
          <div className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl max-w-[90%]">Rent a car at the best prices. Choose from a wide range of vehicles to make your trip more comfortable.</div>
          {/* /<div><CustomLinksButton style="bg-white text-blue-700 border hover:text-white border-blue-700 hover:bg-blue-700" href="/carhire">Search for Car</CustomLinksButton></div> */}
          
      </div>
      <div className=" md:w-[40%] xl:w-[35%]  w-1/2 "><img className=" rounded-2xl object-fill  min-h-[200px] " src="/taxi.jpg"/></div>
    </div>
    </div>
    </div>
    {/* Trusted company */}
    <div className="border-t bg-white w-full flex flex-col items-center space-y-10 p-10">
    <div className="text-slate-600 text-xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl   w-full flex items-center justify-center">Our Partners Trust Us to Deliver Exceptional Travel Experiences</div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-5">
       <div className="border p-3 rounded-3xl shadow-2xl bg-white"><img className="w-32" src="United Airlines.jpeg"/></div>
       <div className="border p-3 rounded-3xl shadow-2xl bg-white"><img className="w-32" src="Emirates-logo.jpeg"/></div>
       <div className="border p-3 rounded-3xl shadow-2xl bg-white"><img className="w-32" src="British Airways.jpeg"/></div>
       <div className="border p-3 rounded-3xl shadow-2xl bg-white"><img className="w-32" src="Lufthansa.jpeg"/></div>
  

    </div>
   
    </div>
    {/* Review */}
    <div className="flex flex-col  max-w-screen-xl  p-8 items-center text-slate-700 space-y-6 ">
     <div className="text-slate-600 text-2xl sm:text-base md:text-3xl w-full  flex items-center justify-center  ">User Testimonials</div>
     <div className="grid md:grid-cols-2 space-y-5 md:space-y-0 gap-10 items-center">
    {/* 1 */}
    <div className="flex flex-col space-y-3 border p-3 rounded-2xl shadow-2xl" >
      <div className="flex items-center gap-6">
        <div><img className="h-12 w-12 rounded-full" src="/david.jpeg"/></div><div className="text-xl">"David"</div>
         </div>
         <div>"I’ve been using this website to book flights and hotels for the past few months, and it has been an absolute game-changer! The interface is super easy to use, and I love how quickly I can compare different options to get the best deal." </div>
     
    </div>
    {/* 2 */}
    <div className="flex flex-col space-y-3  border p-3 rounded-2xl shadow-2xl" >
      <div className="flex items-center gap-6">
        <div><img className="h-12 w-12 rounded-full" src="/p1.jpg"/></div><div className="text-xl">"Alisa"</div>
         </div>
         <div>"I’ve been planning all my vacations through this site, and it’s made booking so much easier! The variety of options available is impressive, and the prices are always competitive. I save so much time and money every time!" </div>
     
    </div>
    {/* 3 */}
    <div className="flex flex-col space-y-3  border p-3 rounded-2xl shadow-2xl" >
      <div className="flex items-center gap-6">
        <div><img className="h-12 w-12 rounded-full" src="/p2.jpg"/></div><div className="text-xl">"Sam"</div>
         </div>
         <div>"This website has been a lifesaver for booking my flights and accommodations! The search filters are intuitive, and I can always find great deals without any hassle. I recommend it to all my friends who travel frequently."</div>
     
    </div>
    {/* 4 */}
    <div className="flex flex-col space-y-3  border p-3 rounded-2xl shadow-2xl" >
      <div className="flex items-center gap-6">
        <div><img className="h-12 w-12 rounded-full" src="/p3.jpg"/></div><div className="text-xl">"Json"</div>
         </div>
         <div>"Booking flights and hotels has never been so seamless! The platform is user-friendly, and the best part is how fast I can finalize my bookings. I’ve had such a positive experience every single time!" </div>
     
    </div>
    </div>
    </div>
    {/* Foter */}
    <div className="flex flex-col  w-full max-w-screen-xl  p-8 items-center text-slate-700 space-y-6 ">
     <div className="text-slate-600 text-2xl sm:text-base md:text-3xl w-full  flex items-start justify-start  ">Explore More</div>
     <div className="grid grid-cols-1  md:grid-cols-2 w-full place-items-center gap-4">
    {/* 1 */}
    <div className="w-full flex items-center justify-between">

  
    <div className="flex flex-col space-y-2 " >
      <div className="text-base font-semibold text-slate-700">Account</div>
      <div className="flex flex-col text-sm text-slate-600 font-medium">
        <div>Create account </div>
        <div>Sign in</div>
        <div>ISO app</div>
        <div>Android app </div>
      </div>
    </div>
    {/* 2 */}
    <div className="flex flex-col space-y-2" >
      <div className="text-base font-semibold text-slate-700">Company</div>
      <div className="flex flex-col text-sm text-slate-600 font-medium">
        <div>About Skyscanner </div>
        <div>Partners</div>
        <div>Press</div>
        <div>Android app </div>
      </div>
    </div>
    {/* 3 */}
    <div className="flex flex-col space-y-2" >
      <div className="text-base font-semibold text-slate-700">Resources</div>
      <div className="flex flex-col text-sm text-slate-600 font-medium">
        <div>Blog </div>
        <div>Travel Guides</div>
        <div>Flight Status</div>
        <div>Travel Insurance</div>
      </div>
    </div>
    </div>
     {/*5 */}
     <div className="flex items-center justify-center w-full ">

    <div className="flex flex-col space-y-2 " >
      <div><img className="h-5" src="/logomain.png"/></div>
      <div className="text-xl text-slate-600 duration-700 w-full flex items-center justify-start space-x-5 ">
        {/* <div className="hover:text-slate-800"><ion-icon name="logo-facebook"></ion-icon> </div> */}
        {/* <div className="hover:text-slate-800"><ion-icon name="logo-twitter"></ion-icon></div> */}
        {/* <div  className="hover:text-slate-800"><ion-icon name="logo-instagram"></ion-icon></div> */}
      </div>
      <div className="text-sm w-[200px]">Copyright © 2025 by Skyscanner, Inc. All rights reserved.</div>
    </div>
    {/* 4 */}
    <div className="flex flex-col space-y-3" >
      <div className="text-base font-semibold text-slate-700">Contack us</div>
      <div className="flex flex-col space-y-2 text-sm text-slate-600 font-medium">
        <div  className="text-sm w-[150px]">623 Harrison St., 2nd Floor, San Francisco, CA 94107 </div>
        <div  className="text-sm w-[140px]">415-201-6370hello@skyscanner.com</div>
     
      </div>
    </div>
    </div>
   
  
    </div>
    </div>
    </div>
  )
}

export default page
