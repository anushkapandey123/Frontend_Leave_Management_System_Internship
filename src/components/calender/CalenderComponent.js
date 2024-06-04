import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '/Users/anushka.pandey_int/Documents/Leave_Managament_Frontend/leave_management_system_frontend/src/components/calender/styles/CalenderComponentStyle.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const localizer = momentLocalizer(moment);


// const events = [
//     // {
//     //     start: moment("2024-05-31").toDate(),
//     //     end: moment("2024-05-31").toDate(),
//     //     title: "Standup",

//     // },

//     // {
//     //     start: moment("2024-05-24").toDate(),
//     //     end: moment("2024-05-25").toDate(),
//     //     title: "Work from home",

//     // },

//     // {
//     //     start: moment("2024-09-02T00:00:00Z").toDate(),
//     //     end: moment("2024-09-20T00:00:00Z").toDate(),
//     //     title: "IPM",

//     // },
// ];

const MyCalendar = () => {

    const [data, setData] = useState([]);
    const events = []



    useEffect(() => {
        const fetchData = async() => {

            axios.get("http://localhost:8080/leave_detail", {
        method: 'GET',
    }).then((response) => {
        
        // console.log(response.data)
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
                title: d.empid,
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
      
      showAllEvents={true}
    />
    )
  
}

export default MyCalendar;