import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import axios from 'axios';
import DeleteConfirmationSlider from './DeleteConfirmationSlider';
import userToken from '../../helpers/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open, onClose}) {

    const [data, setData] = React.useState([])
    const [openDeleteConfirmDialog, setopenDeleteConfirmDialog] = React.useState(false)
    const [deleteStartDate, setDeleteStartDate] = React.useState('')
    const [deleteEndDate, setDeleteEndDate] = React.useState('')
    const [id, setId] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async() => {
          // var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpc2hvcmVAZ21haWwuY29tIiwiZXhwIjoxNzE4Mjk1MzQyfQ.V4c3dSTwtSTyNYWG1-mhsqX_pHxBZ7Wbk9IMDWlDqlA"
          var token = userToken
            const headers = { 'Authorization': "Bearer " + token }

            axios.get("http://localhost:8080/leave_detail", { headers
        // method: 'GET',
    }).then((response) => {
        
        console.log(response.data)
        setData(response.data)
    }
    )

        }
        fetchData();
    }, [])



    const handleClick = (e) => {
        console.log("delete clicked")
        
        setDeleteStartDate(e.startdate.substring(0, e.startdate.indexOf('T')))
        setDeleteEndDate(e.enddate.substring(0, e.enddate.indexOf('T')))
        setId(e.empid)
        setopenDeleteConfirmDialog(true)
          
          
      
    }


  return (
    <React.Fragment>
      
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: "#8B0000" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Leave Record
            </Typography>
            
          </Toolbar>
        </AppBar>

        {data.map(function(e) {

          return (
            
              <ListItemButton>
              <p>
              <h5 style={{color: "#1976d2"}}>Start Date </h5> <h5>{e.startdate.substring(0, e.startdate.indexOf('T'))}</h5>
              <h5 style={{color: "#1976d2"}}>End Date </h5> <h5>{e.enddate.substring(0, e.enddate.indexOf('T'))}</h5>
              <h5 style={{color: "#1976d2"}}>Leave Type </h5> <h5>{e.leavetype}</h5>
              <h5 style={{color: "#1976d2"}}>Paid Leaves Left </h5> <h5>{e.remaining_paid_leaves}</h5>
              <h5 style={{color: "#1976d2"}}>Casual Leaves Left </h5> <h5>{e.remaining_casual_leaves}</h5>
              </p>
              
            <Button defaultValue={e} onClick={() => handleClick(e)} >
            <DeleteIcon color="error" />
            </Button>

            

            </ListItemButton>
            
            
          )
        })}
        
        
        <DeleteConfirmationSlider open={openDeleteConfirmDialog} sdate={deleteStartDate} edate = {deleteEndDate} id = {id} onClose={() => {setopenDeleteConfirmDialog(false)}} />
      </Dialog>
      
    </React.Fragment>
  );
}
