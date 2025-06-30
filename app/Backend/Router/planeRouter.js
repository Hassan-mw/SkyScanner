const express=require('express')
const router=express.Router();
const planeController=require('./../Controller/planeController')


router.route('/')
.get(planeController.getAllplane)
.post(planeController.manageFormData,planeController.createplane)


module.exports=router