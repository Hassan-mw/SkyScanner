import axios from "axios"

export const fetchAllHotelsData = async () => {
  try {
    const response = await axios.get("http://localhost:6000/api/hotels"); // <-- FIXED PORT
    // const data = await response.json();
    console.log(response.data);
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
