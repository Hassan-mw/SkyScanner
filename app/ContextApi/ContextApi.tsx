'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface DataType {
 flightData:never[]
 setFlightData: Dispatch<SetStateAction<never[]>>;
}


 const DataContext=createContext<DataType>({});


function DataProvider({children}:{children:React.ReactNode}){
     const [flightData,setFlightData]=useState([])
     console.log(flightData)
    return(
        <DataContext.Provider value={{flightData,setFlightData}}>
              {children}
        </DataContext.Provider>
    )


}


function UseData(){
    const context=useContext(DataContext)
    if(context===undefined){
        console.error("Using Outside")
    }

    return context;
}


export {DataProvider,DataContext,UseData}