const express=require('express')
const app=express()
const Pool = require("./Pool/pool");
// const cors = require('cors')
const flightRouter=require('./Router/flightRouter')
const planeRouter=require('./Router/planeRouter')
const hotelRouter=require('./Router/hotelRouter')
const carsRouter=require('./Router/carsRouter')
const carhire=require('./Router/carhireRouter')
const cors = require('cors');


app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"]
}));

// app.options("*", cors());


app.use('/api/carhire',carhire)
app.use('/api/cars',carsRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/flights',flightRouter)
app.use('/api/plane',planeRouter)



  


  
Pool.connect({
    host:"localhost",
    port:5432,
    database:'SkyScanner',
    user:'postgres',
    password:'hassan'
}).then(()=>{
    console.log('Connected to Database 🥳🥳🥳🥳🥳')
}).catch((err)=>{
    console.log(err,"Can't connected to database 💥💥💥")
})


app.listen('5000',()=>{
   console.log(`server was runing on port 5000`)

})