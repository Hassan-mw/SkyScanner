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
    console.log(req.body)
    const {planeName,star}=req.body
   const ext=req.file.mimetype.split('/')[1];
   const filename=`prodcut_${Date.now()}.${ext}`
   const filePath=path.join(__dirname,'../../../public',filename)
   await fs.writeFile(filePath,req.file.buffer)
   
   const [rows]=await pool.query(`INSERT INTO plane(planeName,star,planeLogo) VALUES ($1,$2,$3) RETURNING *`,[planeName,star,filename])
   console.log(rows)
  

 }catch(err){
 console.log(err,"DDDD")
  }

}