import { useState } from "react"

// import countryArray from "../service/airportArray"
function HotelsearchPlane({value,setValue}) {
    const [selectPlace,setSelectplace]=useState("")
    // const [selectCountry,setSelectCountry]=useState("Country")
    // const [value,setValue]=useState('')

    // Combine value
        // const  selectedVlaue=`${selectCountry} ${selectPlace}`
    const hotelArray = [
  { "hotel": "Pearl Continental Lahore", "country": "Pakistan", "city": "Lahore", "province": "Punjab" },
  { "hotel": "Avari Lahore", "country": "Pakistan", "city": "Lahore", "province": "Punjab" },
  { "hotel": "The Nishat", "country": "Pakistan", "city": "Lahore", "province": "Punjab" },
  { "hotel": "Ramada Lahore", "country": "Pakistan", "city": "Lahore", "province": "Punjab" },
  { "hotel": "Lahore Marriott", "country": "Pakistan", "city": "Lahore", "province": "Punjab" },
  { "hotel": "The Plaza", "country": "United States", "city": "New York", "province": "New York" },
  { "hotel": "The Ritz-Carlton NY", "country": "United States", "city": "New York", "province": "New York" },
  { "hotel": "Park Central NY", "country": "United States", "city": "New York", "province": "New York" },
  { "hotel": "Four Seasons NY", "country": "United States", "city": "New York", "province": "New York" },
  { "hotel": "Grand Hyatt NY", "country": "United States", "city": "New York", "province": "New York" },
  { "hotel": "The Ritz London", "country": "United Kingdom", "city": "London", "province": "England" },
  { "hotel": "Claridge's", "country": "United Kingdom", "city": "London", "province": "England" },
  { "hotel": "The Dorchester", "country": "United Kingdom", "city": "London", "province": "England" },
  { "hotel": "Shangri-La Shard", "country": "United Kingdom", "city": "London", "province": "England" },
  { "hotel": "The Langham London", "country": "United Kingdom", "city": "London", "province": "England" },
  { "hotel": "The Ritz Paris", "country": "France", "city": "Paris", "province": "Île-de-France" },
  { "hotel": "Le Meurice", "country": "France", "city": "Paris", "province": "Île-de-France" },
  { "hotel": "Shangri-La Paris", "country": "France", "city": "Paris", "province": "Île-de-France" },
  { "hotel": "Hotel de Crillon", "country": "France", "city": "Paris", "province": "Île-de-France" },
  { "hotel": "Peninsula Paris", "country": "France", "city": "Paris", "province": "Île-de-France" },
  { "hotel": "Hotel de Russie", "country": "Italy", "city": "Rome", "province": "Lazio" },
  { "hotel": "St. Regis Rome", "country": "Italy", "city": "Rome", "province": "Lazio" },
  { "hotel": "Palazzo Manfredi", "country": "Italy", "city": "Rome", "province": "Lazio" },
  { "hotel": "Hotel Artemide", "country": "Italy", "city": "Rome", "province": "Lazio" },
  { "hotel": "J.K. Place Roma", "country": "Italy", "city": "Rome", "province": "Lazio" },
  { "hotel": "Peninsula Tokyo", "country": "Japan", "city": "Tokyo", "province": "Tokyo" },
  { "hotel": "Park Hyatt Tokyo", "country": "Japan", "city": "Tokyo", "province": "Tokyo" },
  { "hotel": "Mandarin Tokyo", "country": "Japan", "city": "Tokyo", "province": "Tokyo" },
  { "hotel": "Shangri-La Tokyo", "country": "Japan", "city": "Tokyo", "province": "Tokyo" },
  { "hotel": "Andaz Tokyo", "country": "Japan", "city": "Tokyo", "province": "Tokyo" },
  { "hotel": "Burj Al Arab", "country": "United Arab Emirates", "city": "Dubai", "province": "Dubai" },
  { "hotel": "Atlantis Palm", "country": "United Arab Emirates", "city": "Dubai", "province": "Dubai" },
  { "hotel": "Jumeirah Beach", "country": "United Arab Emirates", "city": "Dubai", "province": "Dubai" },
  { "hotel": "Armani Hotel", "country": "United Arab Emirates", "city": "Dubai", "province": "Dubai" },
  { "hotel": "Palazzo Versace", "country": "United Arab Emirates", "city": "Dubai", "province": "Dubai" },
  { "hotel": "Langham Sydney", "country": "Australia", "city": "Sydney", "province": "New South Wales" },
  { "hotel": "Four Seasons Sydney", "country": "Australia", "city": "Sydney", "province": "New South Wales" },
  { "hotel": "Park Hyatt Sydney", "country": "Australia", "city": "Sydney", "province": "New South Wales" },
  { "hotel": "Shangri-La Sydney", "country": "Australia", "city": "Sydney", "province": "New South Wales" },
  { "hotel": "Darling Hotel", "country": "Australia", "city": "Sydney", "province": "New South Wales" },
  { "hotel": "Mandarin Bangkok", "country": "Thailand", "city": "Bangkok", "province": "Bangkok" },
  { "hotel": "Peninsula Bangkok", "country": "Thailand", "city": "Bangkok", "province": "Bangkok" },
  { "hotel": "Shangri-La Bangkok", "country": "Thailand", "city": "Bangkok", "province": "Bangkok" },
  { "hotel": "Lebua State Tower", "country": "Thailand", "city": "Bangkok", "province": "Bangkok" },
  { "hotel": "Anantara Siam", "country": "Thailand", "city": "Bangkok", "province": "Bangkok" },
  { "hotel": "Ritz-Carlton Toronto", "country": "Canada", "city": "Toronto", "province": "Ontario" },
  { "hotel": "Four Seasons Toronto", "country": "Canada", "city": "Toronto", "province": "Ontario" },
  { "hotel": "Shangri-La Toronto", "country": "Canada", "city": "Toronto", "province": "Ontario" }
];

    //!  Putting value
        function handlePlace(data){
           setValue(data)
           setSelectplace(data)
        }

    //!   Clearing input fields
        function handleClearValue(){
           setValue("")
  
        }
    //!Filter    
        const filteredHotel=value===''? hotelArray  : hotelArray.filter((data)=>data.hotel.toLowerCase().includes(value.toLowerCase())) 
    
    return (
        // <div className="h-full w-full bg-white flex flex-col items-center justify-start space-y-5 p-6">
        <div className="h-[500px] truncate  w-full min-w-[400px] md:max-w-full md:min-w-[500px] lg:min-w-[700px] bg-white flex flex-col items-center justify-start space-y-5 ">

        {/* Upper head */}
         {/* <div className="flex items-center justify-between w-full ">
          <div  onClick={()=>setshowSidebar(false)} className="text-2xl "><ion-icon name="arrow-back-outline"></ion-icon></div>
          <div className="w-full flex items-center justify-center text-xl font-semibold">Popular destination </div> 
        </div> */}
        {/* Form */}
          <div className="bg-white px-4 py-4 rounded-xl  w-full flex items-center justifuy-between space-x-4 max-w-screen-lg ">
           {/* <span> From  </span>  */}
           <div className="w-full border-b border-slate-700">
            <input value={value} onChange={(e)=>setValue(e.target.value)} className="w-full focus:outline-none"  type="text" placeholder="Search hotel name"/></div>
              {/* <input type="text" value={selectedVlaue}  placeholder="Select place" autoFocus className="bg-slate-200 w-full border-slate-700 border-b focus:outline-none"/> */}
                <div onClick={()=>handleClearValue()} className="text-2xl  px-3 py-1 flex items-center justify-center rounded-full   "><ion-icon name="close-circle-outline"></ion-icon></div>  
  
               </div>
        {/* Main body */}
        <div className="w-full flex flex-col  items-start overflow-y-auto space-y-3 ">
            {/* Planes */}
            {filteredHotel.map((data,index)=>
             <div key={index} className={`flex w-full space-x-3  p-4 rounded-lg ${selectPlace===data.hotel? 'bg-slate-400' :' hover:bg-slate-200' }  `} onClick={()=>handlePlace(data.hotel)}>
        <span className="text-2xl  "><ion-icon name="business-outline"></ion-icon></span>
       <div className="flex flex-col ">  
        <span className="text-2xl  ">{data.hotel}</span>
        <div className="flex items-center">
        <span className="text-sm">{data.province}</span>,
        <span className="text-sm">{data.country}</span>

        </div>
       </div>
        </div>
            )}
      

        </div>
        </div>
    )
}

export default HotelsearchPlane
