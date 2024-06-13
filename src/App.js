// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/Header';
// import About from './components/about/About';
// import { Button, Container } from '@mui/material';
// import InsertLeaveButton from './components/insert_leave/InsertLeaveButton';
// import DeleteLeaveButton from './components/delete_leave/DeleteLeaveButton';
// import FetchLeaveDetailsButton from './components/leave_data/FetchLeaveDetailsButton';
// // import MyCalendar from './components/calender/CalenderComponent';
// import CustomizedTables from './components/table/InfoTable';
// import MyCalendar from './components/calender/CalenderComponent';
// import VerticalTabs from './components/scrollable_tab/Tab';
// import ScrollableTabsButtonPrevent from './components/scrollable_tab/Tab';
// import LeaveHistoryButton from './components/leave_data/LeaveHistoryButton';
// import RootRouter from './components/router/RootRouter';


// function App() {
//   return (
//     <div className="App">
      
//       <Header />


      

//       <div>
//       <MyCalendar />
      
//       </div>
      
//       <InsertLeaveButton />

//       <LeaveHistoryButton />
      



//     </div>
//   );
// }

// export default App;


import Welcome from './components/welcome/Welcome';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App_two from './App_two';
import { SnackbarProvider } from 'notistack';
 

 
function App() {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/calendar" element={<App_two />} />
        </Routes>
      </SnackbarProvider>
    </Router>
  );
}
 
export default App;
