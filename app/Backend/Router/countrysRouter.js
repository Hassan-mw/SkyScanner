const express=require('express')
const router=express.Router();
const countryController=require('./../Controller/countryController')


router.route('/')
// .get(countryController.getAllFlight)
// .get(countryController.getAllFlight)
.post(countryController.createCountryData)


router.route('/:country')
.get(countryController.getCuntryByname)


module.exports=router