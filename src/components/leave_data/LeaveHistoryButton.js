import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import FullScreenDialog from "./LeaveHistoryDialogBox";
// import DeleteLeaveDialogBox from "./DeleteLeaveDialogBox";


const LeaveHistoryButton = () => {
    const [showLeaveHistoryDialog, setshowLeaveHistoryDialog] = useState(false);

    function handleClick() {
        
        
        setshowLeaveHistoryDialog(true);
        
    }

    return (
        <>
        
        <Button variant="contained" onClick={handleClick} style={{ marginTop: "25px", marginLeft: "7px"}}>
            My Leave History
        </Button>
        

        <FullScreenDialog open={showLeaveHistoryDialog} onClose={() => {setshowLeaveHistoryDialog(false)}}/>



        
        </>
    )
}

export default LeaveHistoryButton;