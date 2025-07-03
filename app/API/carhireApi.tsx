import axios from "axios"

export const fetchAllCarHire = async () => {
  try {
    const hello:string="sggsg"
    const response = await axios.get("http://localhost:6000/api/carhire"); // <-- FIXED PORT
    // const data = await response.json();
    console.log(response.data);
  } catch (err) {
    console.log("Fetch error:", err);
  }
};
