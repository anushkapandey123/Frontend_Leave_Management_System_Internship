import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '/Users/anushka.pandey_int/Documents/Leave_Managament_Frontend/leave_management_system_frontend/src/components/calender/styles/CalenderComponentStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import userToken from '../../helpers/constant';
import apiClient from '../../helpers/apiClient';

const localizer = momentLocalizer(moment);



const MyCalendar = () => {

    const [data, setData] = useState([]);
    const events = []

    

    useEffect(() => {
        const fetchData = async() => {
            // var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtpc2hvcmVAZ21haWwuY29tIiwiZXhwIjoxNzE4Mjk1MzQyfQ.V4c3dSTwtSTyNYWG1-mhsqX_pHxBZ7Wbk9IMDWlDqlA"
            // var token = userToken
            // const headers = { 'Authorization': "Bearer " + token }
            apiClient.get('/leave_detail')
            // axios.get("http://localhost:8080/leave_detail", {
                // headers
                // headers: {
                //     'Authorization': 'Bearer ' + token

                // },
        // method: 'GET',

        
    .then((response) => {
        
        console.log(response.data)
        setData(response.data)
    }
    )

        }
        fetchData();
    }, [])

    // console.log('data is : ' + data[0]);

    // console.log(data.length)

    const formatData = () => {

        data.forEach(function(d) {
            // console.log(d);
            const element = {
                start: moment(d.startdate).toDate(),
                end: moment(d.enddate).toDate(),
                title: d.name,
            }
    
            events.push(element)
        })

    }

    formatData();

    

    

    // console.log(events.length)

    return (

  
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={events}
      views={['month']}
      style={{ height: 600, backgroundColor: 'white' }}
      
    //   showAllEvents={true}
   />
    )
  
}


// const MyCalendar = () => {
//     const [events, setEvents] = useState([]);
 
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await apiClient.get('/leave_detail'); // Use apiClient instead of axios
//                 const formattedEvents = response.data.map(event => ({
//                     start: moment(event.startdate).toDate(),
//                     end: moment(event.enddate).toDate(),
//                     title: event.name,
//                 }));
//                 setEvents(formattedEvents);
//             } catch (error) {
//                 console.error('Failed to fetch events', error);
//             }
//         };
//         fetchData();
//     }, []);
// }

export default MyCalendar;