import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteConfirmationSlider({open, sdate, edate, id, onClose}) {

  

  const handleClick = async () => {
      const values = {
          
          "empId": id, 
          "startDate": sdate,
          "endDate": edate
      }

      console.log(values);

      try {

        const response = await axios.post("http://localhost:8080/delete", values);
        console.log(response)
        

    } catch(err) {
        console.log('inside catch')
        

    } finally {
    

    
    onClose()
    }


  }


  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this leave ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancle</Button>
          <Button onClick={handleClick}>Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
