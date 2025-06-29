const express=require('express')
const app=express()
const Pool = require("./Pool/pool");
const flightRouter=require('./Router/flightRouter')

app.use('/api/flights',flightRouter)



  


  
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