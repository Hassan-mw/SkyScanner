import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Jost } from "next/font/google"
import { BsFillFlagFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const PlaneSearchBarPlace = ({value,setValue}:{value:string,setValue:Dispatch<SetStateAction<string>>}) => {
    const [selectPlace,setSelectplace]=useState("")

   const hotelArray = [
  "Pakistan",
  "India",
  "Afghanistan",
  "USA",
  "Singapore",
  "Iran",
  "Thailand",
  "Saudi Arabia",
  "Malaysia"
];


    // Putting value
    function handlePlace(data:string){
      setValue(data)
      setSelectplace(data)
    }


    // Clearing input fields
    function handleClearValue(){
      setValue("")
    }


    // Filter    
    const filteredHotel=value===''? hotelArray  : hotelArray.filter((data)=>data.toLowerCase().includes(value.toLowerCase())) 
     
 
    


    return (
       
        <div className="h-[500px]  truncate bg-white w-full min-w-[400px]  rounded-xl  flex flex-col items-center justify-start space-y-5 ">



        {/* Main body */}
        <div className="w-full flex flex-col  items-start overflow-y-auto space-y-3 py-8 px-3 ">

          {/*//!   FORM  */}
        {/* <div className="bg-white px-4 py-4 rounded-xl  w-full flex items-center justifuy-between space-x-4 max-w-screen-lg "> */}
        

        {/* Searching button */}
        <div className="w-full flex items-center border-b pb-4 border-gray-200">
           <IoSearchOutline size={20} />
          <input value={value} onChange={(e)=>setValue(e.target.value)} className={`${jost.className} w-full focus:outline-none text-black pl-2 placeholder:text-black placeholder:text-xl text-xl`}  type="text" placeholder="Search location name"/>
        </div>
  

        {/* </div> */}


        {/* Planes */}
        {filteredHotel.map((data,index)=>
        
        <div key={index} className={`border-b flex items-center w-full space-x-3 cursor-pointer  p-4  `} onClick={()=>handlePlace(data)}>
            <span className="text-xl text-gray-500 "><FaLocationDot /></span>
            <h2 className={`${jost.className} text-2xl  `}>{data}</h2>
        </div>
            )}
      

        </div>
        </div>
    )
}


export default PlaneSearchBarPlace