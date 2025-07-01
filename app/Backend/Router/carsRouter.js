const express=require('express')
const router=express.Router();
const carController=require('./../Controller/carController')


router.route('/')
.get(carController.getAllCars)
.post(carController.manageFormData,carController.createCar)


module.exports=router