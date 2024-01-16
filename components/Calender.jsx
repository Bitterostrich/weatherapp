'use client'
import React, {useState} from 'react';
import CalenderRow from "./CalenderRow.jsx"

const Calendar = () => {

    const currentDate = new Date();
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };
    const generateDays = (index) => {
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
        const totalDays = firstDayOfMonth + daysInMonth;
        // Create an array to hold "week" elements
        const weeks = [];
        let weekDays = [];
        for (let i = 0; i < totalDays; i++) 
        {
            const day = i >= firstDayOfMonth ? i - firstDayOfMonth + 1 : null;
            weekDays.push(day);
            // When we reach the end of the week, or the end of the month, we start a new week
            if ((i + 1) % 7 === 0 || i === totalDays - 1) 
            {
                weeks.push(weekDays);
                weekDays = []; // Reset for the next week
            }
        }console.log(weeks)
        weeks.push([null, null, null, null, null, null, null])
        return weeks[index];
    };


    const DaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const goToNextMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                return 0
            } else {
                return prevMonth + 1
            }
        })
    }
    const goToPreviousMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                return 11
            } else {
                return prevMonth - 1;
            }
        })
    }
    return (
        
        <div>
            <div className='flex flex-row w-full justify-between '>
                <button onClick={goToPreviousMonth}>Previous</button>
                <div>{month[currentMonth]} {currentYear}</div>
                <button onClick={goToNextMonth}>Next</button>
            </div>
            <CalenderRow  DaysOfWeek={DaysOfWeek} margin="mt-[2.5%]" BackroundColour={"bg-red-600"} TextColour={"text-white"}/>

            <CalenderRow  DaysOfWeek={generateDays(0)} margin="" BackroundColour={"bg-white"} TextColour={"text-black"}/>
            <CalenderRow  DaysOfWeek={generateDays(1)} margin="" BackroundColour={"bg-white"} TextColour={"text-black"}/>
            <CalenderRow  DaysOfWeek={generateDays(2)} margin="" BackroundColour={"bg-white"} TextColour={"text-black"}/>
            <CalenderRow  DaysOfWeek={generateDays(3)} margin="" BackroundColour={"bg-white"} TextColour={"text-black"}/>
            <CalenderRow  DaysOfWeek={generateDays(4)} margin="mb-[2.5%]" BackroundColour={"bg-white"} TextColour={"text-black"}/>
        </div>
    )
}


export default Calendar
