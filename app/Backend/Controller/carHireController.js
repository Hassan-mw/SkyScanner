const multer=require('multer');
const fs=require('fs').promises;
const path = require('path');
const pool = require('../Pool/pool');


const multerStorage = multer.memoryStorage();

const multerFilter=(req,file,cb)=>{
    console.log(file,"}}}}}")
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }
  else{
    cb(console.log('Errorrrrrr'))
  }
}


const upload=multer({
    storage:multerStorage,
    fileFilter:multerFilter
})

exports.manageFormData=upload.single('image')


exports.createCarHire=async(req,res,next)=>{
   
 try{
    console.log(req.file,'+++++++++++')


   const {stationname,carid,country,city,pickupDate,pickupTime,dropoffDate,dropoffTime,differentLocation,type,latitude,longitude,freeCancel}=req.body
//    console.log(stationname,country,city,pickupDate,pickupTime,dropoffDate,dropoffTime,differentLocation,type,latitude,longitude,freeCancel)
   const ext=req.file.mimetype.split('/')[1];
   const filename=`carhire_${Date.now()}.${ext}`
   const filePath=path.join(__dirname,'../../../public',filename)
   console.log(filePath,'__________',filename)
   await fs.writeFile(filePath,req.file.buffer)
 

const result= await pool.query(
  `INSERT INTO carhire (image,stationname,carid,country,city,pickupDate,pickupTime,dropoffDate,dropoffTime,differentLocation,type,latitude,longitude,freeCancel) 
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,$14) RETURNING *`,
  [filename,stationname,carid,country,city,pickupDate,pickupTime,dropoffDate,dropoffTime,differentLocation,type,latitude,longitude,freeCancel]
);
console.log(result.rows[0])

// console.log(result)
   res.status(201).json({
    status:'succes',
    messages:'Succesfully created plane data',
    data:result.rows[0]
   })

 }catch(err){
 console.log(err)
   res.status(500).json({
    status:'fail',
    messages:err.message
   })
  }

}

// exports.getDataByMainPageData=




exports.getAllCarHire=async(req,res,next)=>{
 try{
  // const {stationname,pickupDate,pickupTime,dropoffDate,dropoffTime}=req.body
  console.log(req.body,'PPPPP')
  const result=await pool.query('SELECT * FROM  carhire')
   res.status(200).json({
    length:result.rows.length,
    status:'success',
    data:result.rows
   })
 }catch(err){
 console.log(err)

 }
}