import axios from "axios"

export const FetchPlaneById = async ({id}) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/plane/${id}`); // <-- FIXED PORT
    // const data = await response.json();
    console.log(response.data);
    return response.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};


export const FetchAllPlane = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/plane`); // <-- FIXED PORT
    // const data = await response.json();
    console.log(response.data);
    return response.data.data
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
