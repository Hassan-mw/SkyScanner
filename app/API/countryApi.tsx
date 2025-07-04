import axios from "axios"

export const fetAllCountry = async ({flights}:{flights:string}) => {
  try {
 
    const response = await axios.get(`http://localhost:5000/api/countrys/${flights}`); // <-- FIXED PORT
    console.log(response.data);
    return response.data.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
