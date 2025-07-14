import axios from "axios"

interface DataType {
 country:string;
 city:String;
}

export const fetchAllHotelsData = async ({country,city}:DataType) => {
  
  try {
    const response = await axios.get("http://localhost:5000/api/hotels",
      {
        params:
        {
          country,
          city
   
        }
      }
      ); // <-- FIXED PORT
    // const data = await response.json();
  
    return  response.data.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
