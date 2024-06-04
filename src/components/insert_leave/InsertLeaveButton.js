import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import InsertLeaveDialogBox from "./InsertLeaveDialogBox";

const InsertLeaveButton = () => {
    const [showInsertLeaveDialog, setshowInsertLeaveDialog] = useState(false);

    function handleClick() {
        
        setshowInsertLeaveDialog(true);
        
    }

    return (
        <>
        
        <Button variant="contained" onClick={handleClick} style={{ marginTop: "25px"}}>
            Apply for Leave
        </Button>
        

        <InsertLeaveDialogBox open={showInsertLeaveDialog}
        onClose={() => {setshowInsertLeaveDialog(false)}}
        />
        </>
    )
}

export default InsertLeaveButton;