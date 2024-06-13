// import logo from './logo.svg';
import InsertLeaveButton from '../insert_leave/InsertLeaveButton';
import DeleteLeaveButton from '../delete_leave/DeleteLeaveButton';
import MyCalendar from '../calender/CalenderComponent';
import LeaveHistoryButton from '../leave_data/LeaveHistoryButton';
import './styles/homepage.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header';


 
function Home_page() {

  
return (
  // <div className='app-two-container'>
  <div>
     <Header />
      <div >
        
  
          <MyCalendar />
          {/* <Header /> */}

      </div>
      <div className="buttons-container">
          <InsertLeaveButton />
        <LeaveHistoryButton />
      </div>
 </div>
// </div>
);
}
  
export default Home_page;