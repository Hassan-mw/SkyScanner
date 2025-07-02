const express=require('express')
const router=express.Router();
const carHireController=require('./../Controller/carHireController')


router.route('/')
.get(carHireController.getAllCars)
.post(carHireController.manageFormData,carHireController.createCar)


module.exports=router