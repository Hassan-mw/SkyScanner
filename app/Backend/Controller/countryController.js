const pool = require("../Pool/pool")


exports.createCountryData=async(req,res,next)=>{
  
    try{
      
        const {country,cities}=req.body
        const result=await pool.query(`INSERT INTO countrys(countryname,citynames) VALUES ($1,$2) RETURNING *`,[country,cities])
 
        res.status(200)
        .json({
          status:'success'
         })
    }
    catch(err){
        console.log(err)
    }

}



exports.getCuntryByname=async(req,res,next)=>{
  
    try{
       console.log('++++++',req.query,req.params)
        const {country}=req.params
        const result=await pool.query(`SELECT * FROM countrys WHERE countryname=$1`,[country])
 
        res.status(200)
        .json({
          status:'success',
          data:result.rows[0]
         })
    }
    catch(err){
        console.log(err)
    }

}