




exports.getAllFlightFilterData=async(req,res,next)=>{
   
 try{
 console.log('+++++++++++++++++++')
   const  queryData=req.query
   let query='SELECT * FROM flights JOIN plane ON flights.flightstartplane=plane.id  JOIN countrys ON flights.tocountry= countrys.countryname '
      const consditions=[];
      const values=[]
 
  const querys=[]
      Object.entries( queryData).forEach(([key,value],index)=>{

     if(allowedFields.includes(key)){
      values.push(value),
     consditions.push(`${key} = $${values.length}`)
    }
  
  
  
   })

    if(values.length>0){  
        query+= ' WHERE ' + consditions.join(' AND ')
      }

     

    if(req.query.sort){
     
      query+=  `  ORDER BY ${req.query.sort} `
    }

       
    console.log(query,values)
    const {rows}=await pool.query(query,values)
    console.log(rows)

//   const result=await pool.query(`
// SELECT * FROM flights
// JOIN plane ON flights.flightstartplane=plane.id 
// JOIN countrys ON flights.tocountry= countrys.countryname
//  WHERE fromcountry=$1 AND tocountry=$2`,[startPlace,endPlace])
 

res.status(200).json({
    length:result.rows.length,
    status:'success',
    data:result.rows
  })
 }catch(err){
  console.log(err)
  res.status(500).json({
    status:'fail',
    message:err
  })

  }
  
}

