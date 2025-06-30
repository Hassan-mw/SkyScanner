const multer=require('multer');
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



exports.getAllHotel=async(req,res,next)=>{
 try{

 }catch(err){
    
 }
}




exports.createHotel=async(req,res,next)=>{
 try{
   const { name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,price, freeCancel,websiteName,latitude, longitude, person, room}=req.body
   const {image}=req.file
   console.log(image) 
   const query=`INSERT INTO hotels 
   (image,name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,price, freeCancel,websiteName,latitude, longitude, person, room)
    VALUES
    ($1,$2,$3,$4,$5,$6,$7,$8,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
   `
   const values=[image, name,country,city,checkInDate,checkOutDate,distanceCity, star, rating,reviewComment,price, freeCancel,websiteName,latitude, longitude, person, room]
   
   const result=await pool.query(
    query,value
   )  
 }catch(err){

 }
}