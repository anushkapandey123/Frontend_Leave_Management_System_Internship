import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import DeleteLeaveDialogBox from "./DeleteLeaveDialogBox";


const DeleteLeaveButton = () => {
    const [showDeleteLeaveDialog, setshowDeleteLeaveDialog] = useState(false);

    function handleClick() {
        
        
        setshowDeleteLeaveDialog(true);
        
    }

    return (
        <>
        
        <Button variant="contained" onClick={handleClick} style={{ marginTop: "25px", marginLeft: "7px"}}>
            Delete Leave
        </Button>
        

        <DeleteLeaveDialogBox open={showDeleteLeaveDialog}
        onClose={() => {setshowDeleteLeaveDialog(false)}}
        />
        </>
    )
}

export default DeleteLeaveButton;