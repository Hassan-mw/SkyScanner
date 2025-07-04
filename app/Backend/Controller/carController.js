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

exports.manageFormData=upload.fields([
    {name:'image',maxCount:1},
    {name:'companyImage',maxCount:1}
])


exports.createCar=async(req,res,next)=>{
   
 try{
   const [carImage]=req.files.image
   const [companyImage]=req.files.companyImage

   const {door,price,person,capacity,companyName,size,rating,conditionRating,cleanRating,customerService,easyCollection}=req.body
   const extCar=carImage.mimetype.split('/')[1];
   const extCompany=companyImage.mimetype.split('/')[1];
   const carName=`carName_${Date.now()}.${extCar}`
   const carCompanyName=`carCompany_${Date.now()}.${extCar}`
   const carFilePath=path.join(__dirname,'../../../public',carName)
   const carCompanyFilePath=path.join(__dirname,'../../../public',carCompanyName)
   await fs.writeFile(carFilePath,carImage.buffer)
   await fs.writeFile(carCompanyFilePath,companyImage.buffer)

const result= await pool.query(
  `INSERT INTO cars (image, door, price, person, capacity, companyName, companyImage, size, rating, conditionRating, cleanRating, customerService, easyCollection) 
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
  [carName, door, price, person, capacity, companyName, carCompanyName, size, rating, conditionRating, cleanRating, customerService, easyCollection]
);
console.log(result)
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




exports.getAllCars=async(req,res,next)=>{
 try{
  const result=await pool.query('SELECT * FROM cars')
   res.status(200).json({
    length:result.rows.length,
    status:'success',
    data:result.rows
   })
 }catch(err){
 console.log(err)

 }
}