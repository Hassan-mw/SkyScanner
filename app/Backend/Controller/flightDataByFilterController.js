const pool = require("../Pool/pool");





exports.getAllFlightFilterData=async(req,res,next)=>{
   
 try{
   const  queryData=req.query
   console.log(req.query.sort,'+++++++++++++++++++')

   let query='SELECT * FROM flights JOIN plane ON flights.flightstartplane=plane.id  JOIN countrys ON flights.tocountry= countrys.countryname '
      const consditions=[];
      const values=[]
      const allowedFields=['journey','cabinbag','checkedbag','planename','totaltime','sort']
  const querys=[]
      Object.entries(queryData).forEach(([key,value],index)=>{
        console.log(typeof key,'PPPPPPPPPPPPPPPPPPPP')
        if(key==='sort'){
         console.log('++++++++++++++++++++++++++++++++++++++')
        } 
        else{
            
        if(allowedFields.includes(key)){
          values.push(value),
          consditions.push(`${key} = $${values.length}`)
        }
        
        
        }
      } )
      
     
    if(values.length>0){  
        query+= ' WHERE ' + consditions.join(' AND ')
      }

     

    if(req.query.sort){
     
      query+=  `  ORDER BY ${req.query.sort} `
    }
    
       
  
    const {rows}=await pool.query(query,values)
  

//   const result=await pool.query(`
// SELECT * FROM flights
// JOIN plane ON flights.flightstartplane=plane.id 
// JOIN countrys ON flights.tocountry= countrys.countryname
//  WHERE fromcountry=$1 AND tocountry=$2`,[startPlace,endPlace])
 

res.status(200).json({
    // length:result.rows.length,
    status:'success',
    data:rows
  })
 }catch(err){
  console.log(err)
  res.status(500).json({
    status:'fail',
    message:err
  })

  }
  
}

