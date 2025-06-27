import React, { Dispatch, SetStateAction } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

interface DataType {
 showDetails:boolean;
 setShowDetails:Dispatch<SetStateAction<boolean>>
}

const CarFinalShowCarDetailBtn = ({showDetails,setShowDetails}:DataType) => {
  return (
     <div className='w-1/2 sm:order-2 sm:w-full sm:pt-5 flex items-center justify-start sm:items-end'>
             { 
              !showDetails ?
              <div onClick={()=>setShowDetails(true)} className='hover:cursor-pointer flex w-[90%] rounded-md text-white items-center justify-center gap-x-2 py-1 bg-[#05203c]'>
                 <span>View deal</span>
                 <div className='-rotate-90'> <MdArrowBackIosNew /></div>

              </div>
             :  
              <div  onClick={()=>setShowDetails(false)}  className='hover:cursor-pointer flex w-[90%] rounded-md  text-[#05203c] items-center justify-center gap-x-2 py-1 bg-[#e0e4e9]'>
                 <span className='font-semibold'>Hide</span>
                 <div className='-rotate-90'> <MdArrowForwardIos /></div>

              </div>
              }
              </div>
  )
}

export default CarFinalShowCarDetailBtn