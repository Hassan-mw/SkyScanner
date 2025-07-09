const multer=require('multer');
const pool = require('../Pool/pool');
const path = require('path');
const fs = require('fs').promises;


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



exports.getAllHotel=async(req,res,next)=>{
 try{
  
  const {value,startDate,endDate,person,room}=req.query
  console.log(value,startDate,endDate,person,room)
   const result=await pool.query(`SELECT * FROM hotels WHERE city=$1 AND checkindate=$2 AND checkoutdate=$3 AND person=$4 AND room=$5 `,[value,startDate,endDate,person,room])
   
   console.log(result.rows)
  //  res.status(200).json({
  //   status:'success',
  //   data:result.rows
  //  })
 }catch(err){
console.log(err)
 }
}




exports.createHotel=async(req,res,next)=>{
 try{
   const { name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,price, freeCancel,websiteName,latitude, longitude, person, room}=req.body
   const {image}=req.file
//    console.log(image) 
   const query=`INSERT INTO hotels 
   (image,name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,
   price, freeCancel,websiteName,latitude, longitude, person, room)
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
    RETURNING *
   `
   
   const ext=req.file.mimetype.split('/')[1]
   const changedNameImage=`hotel_${Date.now()}.${ext}`
   const filePath=path.join(__dirname,'../../../public',changedNameImage)
   await fs.writeFile(filePath,req.file.buffer)
   console.log(ext,changedNameImage,filePath,"_____________")
   
   const values=[changedNameImage,name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,price, freeCancel,websiteName,latitude, longitude, person, room]

   const result=await pool.query( query,values)  
    console.log(result.rows[0])
   res.status(201).json({
    status:'succes',
    messages:'Succesfully created plane data',
    data:result.rows[0]
   })
 
 }catch(err){
  console.log(err)
 }
}