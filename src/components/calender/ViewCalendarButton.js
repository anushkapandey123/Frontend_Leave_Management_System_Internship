import React, { useState } from "react";
import MyCalendar from "./CalenderComponent";
import { Button, Dialog } from "@mui/material";

const ViewCalenderButton = () => {

    const [show, setShow] = useState(false);

    function handleClick(event) {
        console.log(event);
        setShow(true)
        
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>View Calendar</Button>
            
            {show && <MyCalendar />}
        </div>
    )

}

export default ViewCalenderButton;