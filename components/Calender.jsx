'use client'
import React, {useState, useEffect} from 'react';
import Day from "./Day"

import "react-datepicker/dist/react-datepicker.css";


const Calendar = (DaysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]) => {
    const setDay = (day) =>
    {
        return( 
            <Day 
                day={day}
            />
        )
    }
  
    const ShowWeek = () => {
        useEffect(() => {
            const DaysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            for(let i in DaysOfWeek)
            {
                setDay(DaysOfWeek[i])
            }
        },[])
    }
    
    return ( 
    
        <div className='border-2 flex space evenly border-red-700 bg-white'> 
            
            {ShowWeek()}
            
        </div>

    )
}


export default Calendar
