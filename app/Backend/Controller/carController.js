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
    // console.log(req.files)
     const {image,companyImage}=req.files
   const {door,price,person,capacity,companyName,size,rating,conditionRating,cleanRating,customerService,easyCollection}=req.body
   const extCar=req.files.images.mimetype.split('/')[1];
   const extCompany=carCompanyName.mimetype.split('/')[1];
   console.log(extCar,extCompany,'PPPPPPPPPPPP')
   const carFileName=`car_${Date.now()}.${extCar}`
   const carCompanyName=`carCopany_${Date.now()}.${extComapny}`
   const carFilePath=path.join(__dirname,'../../../public',carFileName)
   const carCompanyFilePath=path.join(__dirname,'../../../public',carCompanyName)
//    await fs.writeFile(carFilePath,req.file.buffer)
//    await fs.writeFile(carCompanyFilePath,req.file.buffer)

//    const [rows]=await pool.query(`INSERT INTO cars(image,door,price,person,capacity,companyName,companyImage,size,rating,conditionRating,cleanRating,customerService,easyCollection) VALUES ($1,$2,$3) RETURNING *`,
//     [image,door,price,person,capacity,companyName,companyImage,size,rating,conditionRating,cleanRating,customerService,easyCollection])
 
   
//    res.status(201).json({
//     status:'succes',
//     messages:'Succesfully created plane data',
//     data:rows[0]
//    })

 }catch(err){
 
   res.status(500).json({
    status:'fail',
    messages:err.message
   })
  }

}




exports.getAllCars=async(req,res,next)=>{
 try{
  const data=await pool.query('SELECT * FROM plane')
   res.status(200).json({
    status:'success'
   })
 }catch(err){
 console.log(err)

 }
}