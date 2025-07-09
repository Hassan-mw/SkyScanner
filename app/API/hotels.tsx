import axios from "axios"

export const fetchAllHotelsData = async ({value,startDate,endDate,person,room}) => {
  
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
    console.log(response.data);
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
