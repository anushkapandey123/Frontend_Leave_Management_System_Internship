import logo from './logo.svg';
import './App.css';
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


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />

      

      <div>
      <MyCalendar />
      {/* <ScrollableTabsButtonPrevent /> */}
      {/* <CustomizedTables /> */}
      </div>
      
      <InsertLeaveButton />
      



    </div>
  );
}

export default App;
