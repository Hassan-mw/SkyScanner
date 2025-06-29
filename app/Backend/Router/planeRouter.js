const express=require('express')
const router=express.Router();
const planeController=require('./../Controller/planeController')


router.route('/')
.post(planeController.manageFormData,planeController.createplane)


module.exports=router