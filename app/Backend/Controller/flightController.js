const pool = require('../Pool/pool');





exports.getAllFlight=async(req,res,next)=>{
   
 try{

 
  const {startPlace,  endPlace,  departDate,  returnDate, totaltraveller, roomType}=req.query
  console.log(departDate.split('T')[0])
  const result=await pool.query(`SELECT * FROM flights WHERE fromcountry=$1 AND tocountry=$2`,[startPlace,endPlace])
  res.status(200).json({
    length:result.rows.length,
    status:'success',
    data:result.rows
  })
 }catch(err){
  // console.log(err)
  res.status(500).json({
    status:'fail',
    message:err
  })

  }
  
}


exports.getFlightByData=async(req,res,next)=>{
   
//  try{
//   console.log('+++++++++++++++++')
//  console.log(req.query)
//    const { startPlace, endPlace } = req.query;
//    console.log(startPlace,endPlace)
//   const result=await pool.query('SELECT * FROM flights ')
//   res.status(200).json({
//     length:result.rows.length,
//     status:'success',
//     data:result.rows
//   })
//  }catch(err){
//   // console.log(err)
//   res.status(500).json({
//     status:'fail',
//     message:err
//   })

//   }
  
}


exports.createFlight=async(req,res,next)=>{
   
 try{

  const {fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag}=req.body
  const query=`INSERT INTO flights (fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag)
   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING *
  `
  const data=[fromCountry,fromLocation,toCountry, flightStartplane, flightEndplane,toLocation, departDate, returnDate, person, type, journey, price, totalTime, startTime, endTime, cancel, cabinBag, checkedBag]
  const result=await pool.query(query,data)  
 res.status(200).json({
  status:'success',
  data:result.rows
 })
   
 }catch(err){
 console.log(err,'9999999999')
  }

}