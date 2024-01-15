'use client';


import React from "react"

const Day = ({day, BackroundColour, TextColour}) => {

    console.log(day)
     
    return ( 
     <div className={`w-full h-full ${BackroundColour} text-2xl text-center ${TextColour} `}>
        <div>
            
        </div>
        <div className="">
            {day}
        </div>

     </div>
 )
}
export default Day
