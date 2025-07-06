import axios from "axios"

export const fetchAllFlightData = async ({startPlace,endPlace,startDate ,endDate,totaltraveller,roomType}:{startPlace:String,endPlace:String,startDate:Date | string,endDate:Date | string ,totaltraveller:number,roomType:String}) => {
  try {
    // console.log(startPlace,endPlace,departDate.toLocaleDateString(),returnDate.toLocaleDateString(),totaltraveller,roomType)
    const response = await axios.get(`http://localhost:5000/api/flights`,
      {
        params:{
         startPlace,
         endPlace,
         startDate,
         endDate,
         totaltraveller,
         roomType
            }
          })
    // const data = await response.json();
    console.log(response.data);
    return response.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
