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

exports.manageFormData=upload.single('planeLogo')


exports.createplane=async(req,res,next)=>{
   
 try{
 
   const {planeName,star}=req.body
   const ext=req.file.mimetype.split('/')[1];
   const filename=`prodcut_${Date.now()}.${ext}`
   const filePath=path.join(__dirname,'../../../public',filename)
   await fs.writeFile(filePath,req.file.buffer)

   const [rows]=await pool.query(`INSERT INTO plane(planeName,star,planeLogo) VALUES ($1,$2,$3) RETURNING *`,[planeName,star,filename])
 
   
   res.status(201).json({
    status:'succes',
    messages:'Succesfully created plane data',
    data:rows[0]
   })

 }catch(err){
 
   res.status(500).json({
    status:'fail',
    messages:err.message
   })
  }

}


exports.getAllplane=async(req,res,next)=>{
 try{
  const data=await pool.query('SELECT * FROM plane')
   res.status(200).json({
    status:'success'
   })
 }catch(err){
 console.log(err)

 }
}