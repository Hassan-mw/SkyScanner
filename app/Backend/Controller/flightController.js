
const pool = require('../Pool/pool');


exports.getAllFlight=async(req,res,next)=>{
   
 try{
  const [rows]=await pool.query('SELECT * FROM flights')
  
  res.status(200).josn({
    status:'success',
    data:rows[0]
  })
 }catch(err){
  console.log(err)
  res.status(500).json({
    status:'fail',
    message:err.message
  })

  }
  
}


exports.createFlight=async(req,res,next)=>{
   
 try{

  const {fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag}=req.body
  const query=`INSERT INTO flights (fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag)
   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)
  `
  const data=[fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag]
  const [rows]=await pool.query(query,data)  
 console.log(rows)
   
 }catch(err){
 console.log(err)
  }

}