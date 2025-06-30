const express=require('express')
const router=express.Router();
const hotelController=require('./../Controller//hotelController')


router.route('/')
.get(hotelController.getAllHotel)
.post(hotelController.manageFormData,hotelController.createHotel)


module.exports=router