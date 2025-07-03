import axios from "axios"

export const fetchAllFlightData = async ({startPlace,endPlace,departDate,returnDate,totaltraveller,roomType}) => {
  try {
    console.log(startPlace,endPlace,departDate.toLocaleDateString(),returnDate.toLocaleDateString(),totaltraveller,roomType)
    const response = await axios.get(`http://localhost:5000/api/flights`,
      {
        params:{
         startPlace,
         endPlace,
         departDate,
         returnDate,
         totaltraveller,
         roomType
            }
          })
    // const data = await response.json();
    console.log(response.data);
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
