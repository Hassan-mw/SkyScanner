import axios from "axios"

interface DataType {
 country:string;
 city:String;
 paramsData:URLSearchParams
}

export const fetchAllHotelsData = async ({paramsData,country,city}:DataType) => {
  
  try {
    const parametersData=new URLSearchParams(paramsData).toString();
    const response = await axios.get(`http://localhost:5000/api/hotels?${parametersData}`,
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
