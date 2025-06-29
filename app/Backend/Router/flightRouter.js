const express=require('express')
const router=express.Router();
const flightController=require('./../Controller/flightController')


router.route('/')
.get(flightController.getAllFlight)
.post(flightController.createFlight)


module.exports=router