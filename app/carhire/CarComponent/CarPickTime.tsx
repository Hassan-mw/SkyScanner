import React, { Dispatch, SetStateAction } from 'react'

const CarPickTime = ({time,setTime}:{time:string,setTime:Dispatch<SetStateAction<string>>}) => {
   
    const timeArray = [
  "00:00", "00:30",
  "01:00", "01:30",
  "02:00", "02:30",
  "03:00", "03:30",
  "04:00", "04:30",
  "05:00", "05:30",
  "06:00", "06:30",
  "07:00", "07:30",
  "08:00", "08:30",
  "09:00", "09:30",
  "10:00", "10:30",
  "11:00", "11:30",
  "12:00", "12:30",
  "13:00", "13:30",
  "14:00", "14:30",
  "15:00", "15:30",
  "16:00", "16:30",
  "17:00", "17:30",
  "18:00", "18:30",
  "19:00", "19:30",
  "20:00", "20:30",
  "21:00", "21:30",
  "22:00", "22:30",
  "23:00", "23:30"
    ];

    function handleTime(data:string){
    setTime(data)

    }

  return (
    <div className='w-full bg-white py-3 px-1 h-[400px] overflow-y-auto flex flex-col space-y-3'>
        {timeArray.map((data,index)=>
         <span className='hover:cursor-pointer hover:bg-blue-500 hover:text-white' onClick={()=>handleTime(data)} key={data}>{data}</span>
        )}

    </div>
  )
}

export default CarPickTime