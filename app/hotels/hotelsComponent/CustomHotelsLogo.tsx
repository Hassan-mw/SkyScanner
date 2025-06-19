import Image from "next/image"

function CustomHotelsLogo() {
    return (
        <div>
             {/*//! Hottels Logo */}
  <div className="w-full  flex flex-col space-y-3 items-start justify-start  max-w-screen-xl">
      <div className="w-full flex items-start justify-start  text-2xl  sm:text-4xl font-semibold ">Compare hotels across your favourite brands</div>
     
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-x-4  lg:gap-10">
      <div className=" bg-white"><Image height={110} width={110} className=" " src="/h_bc.png" alt="hotels_logo" /></div>
      <div className=" bg-white"><Image height={110} width={110} className=" " src="/d_ct.png" alt="hotels_logo" /></div>
      <div className=" bg-white"><Image height={110} width={110} className=" " src="/h_hc.png" alt="hotels_logo" /></div>
      <div className=" bg-white"><Image height={110} width={110} className="" src="/h_xp.png" alt="hotels_logo" /></div>
      <div className=" bg-white"><Image height={110} width={110} className="" src="/h_ic.png" alt="hotels_logo" /></div>
        </div>
   </div>
        </div>
    )
}

export default CustomHotelsLogo
