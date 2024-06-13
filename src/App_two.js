import logo from './logo.svg';
// import './App.css';
// import "./app_two.css";
import Header from './components/header/Header';
import About from './components/about/About';
import { Button, Container } from '@mui/material';
import InsertLeaveButton from './components/insert_leave/InsertLeaveButton';
import DeleteLeaveButton from './components/delete_leave/DeleteLeaveButton';
import FetchLeaveDetailsButton from './components/leave_data/FetchLeaveDetailsButton';
// import MyCalendar from './components/calender/CalenderComponent';
import CustomizedTables from './components/table/InfoTable';
import MyCalendar from './components/calender/CalenderComponent';
import VerticalTabs from './components/scrollable_tab/Tab';
import ScrollableTabsButtonPrevent from './components/scrollable_tab/Tab';
import LeaveHistoryButton from './components/leave_data/LeaveHistoryButton';
import RootRouter from './components/router/RootRouter';
// import { Login } from '@mui/icons-material';
// import Login from './components/login&register/Login';
// import Register from './components/login&register/Register';
// import Welcome from './components/login&register/loginregisterhandler';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
 
 
 
// function App_two() {
//   return (
//     <div >
      
//       <Header />
 
 
      
 
//       <MyCalendar />
   
 
      
//       <div>
//         <InsertLeaveButton />
 
//         <LeaveHistoryButton />
 
//       </div>
    
      
 
 
 
//     </div>
//   );
// }
 
// export default App_two;
 
function App_two() {
    return (
      <div className="app-two-container">
        <div className="header">
          Employee Leave Management System
        </div>
        <div className="calendar-container">
          <MyCalendar />
        </div>
        <div className="buttons-container">
          <InsertLeaveButton />
          <LeaveHistoryButton />
        </div>
      </div>
    );
  }
  
  export default App_two;