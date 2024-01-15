import React from 'react';
import Day from "./Day"

const Calendar = ({DaysOfWeek, margin ,BackroundColour, TextColour}) => {

     return( 
          <div className={`flex justify-evenly text-justify bg-black mx-[2.5%] h-[60px] ${margin} p-[2px] gap-[2px]`}> 
               <Day day={DaysOfWeek[0]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[1]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[2]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[3]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[4]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[5]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
               <Day day={DaysOfWeek[6]} BackroundColour={BackroundColour} TextColour={TextColour}/>  
          </div>
     )
    
}

export default Calendar