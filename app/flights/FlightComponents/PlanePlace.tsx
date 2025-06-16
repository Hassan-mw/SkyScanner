'use client'

import { Jost } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowForward } from "react-icons/io";
const jost=Jost({
    weight:['400'],
    subsets:['latin']
})


const PlanePlace = () => {
  const [country,setCountry]=useState('')

  // fetching api
  useEffect(()=>{
    const fetchData=async()=>{
     const response=await fetch('https://ipinfo.io/json?token=60552b97c0fc0e')
     const data=await response.json();
     setCountry(data.country)
    }
    fetchData()
  },[])

  const [selectedRegin,setSelectedRegion]=useState('Cheapest flights')

  const cityArray=[
      {id:2,city:'Cheapest flights'},
       {id:1,city:'Capital'},
       {id:3,city:'direct flights'},
       {id:4,city:'✨Bearch'},
       {id:5,city:'✨Art and cuture'},
       {id:6,city:'✨Great food'},
  ]

  const paksitanAres=[
    {id:1,country:'Pakistan',city:'Peshawar',price:12000,image:"/Pakistan.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:2,city:'Queta',price:150000,image:"/quueta.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:3,city:'Islamabad',price:230000,image:"/rawalpindi.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:4,city:'Karachi',price:80000,image:"/karachi.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:5,city:'Gilgit',price:160000,image:"/gitgit.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:6,city:'rawalpindi',price:16344,image:"",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
    {id:7,city:'Lahore',price:90000,image:"/lahore.jpg",fromPlaneLogo:'/pia.png',fromPlaneName:'PAKSITAN AIRLINE',toPlaneLogo:'/emirates.png',toPlaneName:'INDIA AIRLINE'},
  ]

  return (
  <div className="flex flex-col w-full space-y-7 p-3">

    {/* Text */}
  <div className="flex flex-col space-y-2 w-full items-start justify-start">
    <h1 style={{fontWeight:500}} className={`${jost.className} text-3xl font-semibold sm:text-4xl`}>Explore everywhere in january , {country}</h1>
    <p className={`${jost.className} text-sm text-black`}>Here are the flight deals with the lowest prices. Act fast – they all depart within the next three months.</p> 
   </div>


  {/* City Arrays */}
  <div className="w-full  grid grid-cols-1 gap-5 sm:gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3   ">
  {paksitanAres.map((data,index)=>
  
  
  <Link href="/"  key={index} className="w-full h-[400px] border-2 rounded-md border-slate-100 shadow-lg hover:shadow-xl duration-500 ">
  
   {/* <img  src={data.image} className="w-full h-[45%] object-cover rounded-t-md  " alt="country_name"/> */}
    
    {/* Content */}
   <div className="w-full flex flex-col items-start justify-between h-[55%] p-3  rounded-b-md">
  
  {/* country_city */}
  <div className="flex flex-col items-start justify-start'">
    <h1  className={`${jost.className} text-2xl font-semibold`}>{data.city}</h1>
    <span className={`${jost.className}  text-sm text-slate-600 `}>{data.country}</span>
  </div>

  {/* Planes */}
  <div className="w-full flex flex-col items-start justify-start ">

     {/* From */}
      <div className="flex  w-full items-center justify-between">

         {/* Logo */}
         <Image height={55} width={55} src={data.fromPlaneLogo} alt="afa"/>
         
         {/* Name_Date */}
          <div className="flex flex-col items-start justify-start ">
          <span className={`${jost.className} text-sm text-black`}>Thu, 19 Jun</span>
          <span className={`${jost.className} text-[9px] text-slate-500`}>{data.fromPlaneName}</span>
          </div>

          {/* Type */}
           <span className={`${jost.className} text-md`}>Direct</span>

        </div>

     {/* To */}
      <div className="flex  w-full items-center justify-between">

         {/* Logo */}
          <Image height={55} width={55} src={data.toPlaneLogo} alt="afa"/>
    
          {/* Name_Date */}
          <div className="flex flex-col items-start justify-start ">
          <span className={`${jost.className} text-sm text-black`}>Thu, 26 Jun</span>
          <span className={`${jost.className} text-[9px] text-slate-500`}>{data.toPlaneName}</span>
          </div>

          {/* Type */}
          <span className={`${jost.className} text-md`}>Direct</span>
      </div>


  </div>
  
  {/* Price */}
  <div className="w-full flex items-center justify-end">

  <div className="flex items-center justify-center border-b border-white hover:border-blue-500 duration-500   text-blue-500">
  <span className={`${jost.className}   text-md  t`}>from RS64,789</span>
   <IoIosArrowForward />
  </div>
  </div>


   </div> 

   </Link>

             
     ) }         
      
      
  </div>
   </div>
  )
}

export default PlanePlace