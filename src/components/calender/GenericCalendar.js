import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '/Users/anushka.pandey_int/Documents/Leave_Managament_Frontend/leave_management_system_frontend/src/components/calender/styles/CalenderComponentStyle.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Dialog, DialogContent, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const localizer = momentLocalizer(moment);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const GenericCalendar = ({ open, onClose }) => {

    const [data, setData] = useState([]);
    const events = []

    

    useEffect(() => {
        const fetchData = async() => {
            // var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpc2hvcmVAZ21haWwuY29tIiwiZXhwIjoxNzE4Mjg4NjMyfQ.xp07qJ1DjZIejlKy66ZYmx4oUrMOWir29AMVWBRCNVk"
            // const headers = { 'Authorization': "Bearer " + token }
            axios.get("http://localhost:8080/team_leave_detail").then((response) => {
        
        console.log(response.data)
        setData(response.data)
    }
    )

        }
        fetchData();
    }, [])

    

    const formatData = () => {

        data.forEach(function(d) {

            const element = {
                start: moment(d.startdate).toDate(),
                end: moment(d.enddate).toDate(),
                title: d.name,
            }
    
            events.push(element)
        })

    }

    formatData();



    return (
    
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
              Team Calendar
            </Typography>
            
          </Toolbar>
        </AppBar>
        <DialogContent>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={events}
      views={['month']}
      style={{ height: 600, backgroundColor: 'white' }}
      
    //   showAllEvents={true}
   />
   </DialogContent>
   </Dialog>
    )
  
}

export default GenericCalendar;