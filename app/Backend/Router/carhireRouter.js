const express=require('express')
const router=express.Router();
const carHireController=require('./../Controller/carHireController')


router.route('/')
.get(carHireController.getAllCarHire)
.post(carHireController.manageFormData,carHireController.createCarHire)


module.exports=router