
import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Navbar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return ( 
        <div className='flex border-2 border-red-700 justify-between'>
            <div>
                Logo
            </div>
            <div>
                App-Name
            </div>
            <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
            </div>
           
        </div>
        
    )
}


export default Navbar


