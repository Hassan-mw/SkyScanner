const express=require('express')
const router=express.Router();
const flightDataByFilterController=require('./../Controller/flightDataByFilterController')


router.route('/')
// .get(countryController.getAllFlight)
// .get(countryController.getAllFlight)
.get(flightDataByFilterController.getAllFlightFilterData)


// router.route('/:country')
// .get(countryController.getCuntryByname)


module.exports=router