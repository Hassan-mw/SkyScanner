const express=require('express')
const router=express.Router();
const flightController=require('./../Controller/flightController')


router.route('/')
.get(flightController.getAllFlight)
// .get(flightController.getAllFlight)
.post(flightController.createFlight)


router.route('/:id')
.post(flightController.getFlightByData)


module.exports=router