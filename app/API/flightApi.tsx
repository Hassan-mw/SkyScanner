import axios from "axios"

export const fetchAllFlightData = async ({startPlace,endPlace,departDate,returnDate,totaltraveller,roomType}:{startPlace:String,endPlace:String,departDate:Date,returnDate:Date,totaltraveller:number,roomType:String}) => {
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
