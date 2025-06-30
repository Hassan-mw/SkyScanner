const fetchAllFlightData=async()=>
 {
  try{
  const response=await fetch(`http://localhost:5000/api/flights`)
  const data=await response.json();
  console.log(data)
  } catch(err){
 console.log(err)
  }

  }
export default fetchAllFlightData