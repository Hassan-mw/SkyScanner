// 
import axios from "axios"

export const FetchAllFilterData = async ({paramsData}:{paramsData:URLSearchParams}) => {
  try {
    console.log(paramsData)
      const parametersData=new URLSearchParams(paramsData).toString();

    const response = await axios.get(`http://localhost:5000/api/flightFilter?${parametersData}`); // <-- FIXED PORT
    // const data = await response.json();
    console.log(response.data.data);
    return response.data.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
