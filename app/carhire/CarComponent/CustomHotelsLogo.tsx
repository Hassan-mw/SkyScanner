function CustomHotelsLogo({text}:{text:string}) {
    return (
        <div>
             {/*//! Hottels Logo */}
  <div className="min-w-full flex flex-col space-y-3 items-start justify-start  max-w-screen-xl">
      <div className="w-full flex  items-start justify-start  text-2xl  sm:text-4xl font-semibold ">{text}</div>
     
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-x-4 md:gap-x-6  ">
      <div className=" bg-white"><img className="w-24 md:w-36 " src="/h_bc.png"/></div>
      <div className=" bg-white"><img className="w-24 md:w-36 " src="/d_ct.png"/></div>
      <div className=" bg-white"><img className="w-24 md:w-36  " src="/h_hc.png"/></div>
      <div className=" bg-white"><img className="w-24  md:w-36 " src="/h_xp.png"/></div>
      <div className=" "><img className="w-24 md:w-36 " src="/h_ic.png"/></div>
        </div>
   </div>
        </div>
    )
}

export default CustomHotelsLogo
