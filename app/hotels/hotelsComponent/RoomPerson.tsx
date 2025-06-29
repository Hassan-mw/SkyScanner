import { Jost } from 'next/font/google'
import React, { Dispatch, SetStateAction, useState } from 'react'


const jost=Jost({
    weight:['400'],
    subsets:['latin']
})

type DataType ={
  room:number
  person:number
  setRoom:Dispatch<SetStateAction<number>>
  setperson:Dispatch<SetStateAction<number>>
}

const RoomPerson = ({room,person,setRoom,setperson}:DataType) => {

  function handleRoom({countType}:{countType:string}){
 
      if(countType==="inc"){
         setRoom((pre)=>pre+1)
      }else{
        if(room<=1) return alert("At least 1 room")
        setRoom((pre)=>pre-1)
      }
    
    }
  function handlePerson({countType}:{countType:string}){
   
      if(countType==="inc"){
         setperson((pre)=>pre+1)
      }else{
        if(person<=1) return alert("At least 1 person")
        setperson((pre)=>pre-1)
      }
    
    }


  return (
    <div className='w-full min-w-[200px] flex flex-col space-y-3  rounded-md bg-white p-3'>
       
       
       {/* Room */}
       <div className='w-full flex items-center justify-between border-b pb-3 border-slate-300'>
            <h1 className={`${jost.className} text-md`}>Person</h1>
            {/* Buttons */}
            <div className="flex items-center justify-center space-x-3">
              <div onClick={() => handlePerson({ countType: 'inc' })} className="border size-6 flex items-center justify-center text-sm bg-[#e0e4e9] hover:bg-slate-400 duration-500 rounded-xs "> +</div>
                <div className="text-md">{person}</div>
              <div onClick={() => handlePerson({ countType: 'dec' })}className="border size-6 flex items-center justify-center text-sm bg-[#e0e4e9] hover:bg-slate-400  duration-500   rounded-xs" >- </div>
            </div>
       </div>


       {/* Persons */}
       <div className='w-full flex items-center justify-between'>
            <h1 className={`${jost.className} text-md`}>Room</h1>
            {/* Buttons */}
            <div className="flex items-center justify-center space-x-3">
              <div onClick={() => handleRoom({ countType: 'inc' })} className="border size-6 flex items-center justify-center text-sm bg-[#e0e4e9] hover:bg-slate-400 duration-500 rounded-xs "> +</div>
                <div className="text-md">{room}</div>
              <div onClick={() => handleRoom({ countType: 'dec' })}className="border size-6 flex items-center justify-center text-sm bg-[#e0e4e9] hover:bg-slate-400  duration-500   rounded-xs" >- </div>
            </div>
       </div>

    </div>
  )
}

export default RoomPerson