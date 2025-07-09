import axios from "axios"

interface DataType {
  value:string;
  startDate:Date | string
  endDate:Date | string
  person:number
  room:number
}

export const fetchAllHotelsData = async ({value,startDate,endDate,person,room}:DataType) => {
  
  try {
    const response = await axios.get("http://localhost:5000/api/hotels",
      {
        params:
        {
          value,
          startDate,
          endDate,
          person,
          room
   
        }
      }
      ); // <-- FIXED PORT
    // const data = await response.json();
  
    return  response.data.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
