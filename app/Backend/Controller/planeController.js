const multer=require('multer');
const fs=require('fs');
const path = require('path');

const multerStorage = multer.memoryStorage();

const multerFilter=(req,file,cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null,true)
  }
  else{
    cb(new AppError("Not an iage ! please upload an image"),false)
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
//    const { fieldname, originalname,encoding,mimetype}=req.file
   const ext=req.file.mimetype.split('/')[1];
   const filename=`prodcut_${Date.now()}.${ext}`
   const filePath=path.join(__dirname,'/public',filename)
   console.log(filename,filePath)
   await   fs.writeFile(filePath)
  

 }catch(err){
 console.log(err,"DDDD")
  }

}