import React, { useState } from 'react';
import './styles/welcome.css';
import Login from './Login';
import Register from './Register';



const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const setToLogin = () => {
        setIsActive(false);
    };


    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <Register setToLogin={setToLogin} />
            <Login />
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Log in to seamlessly manage your leaves and help the team stay on top of the schedule.</p>
                        <button className="hidden" id="login" onClick={toggleActiveClass}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Welcome to the Team!</h1>
                        <p>Register now to manage your leave requests and enhance team collaboration.</p>
                        <button className="hidden" id="register" onClick={toggleActiveClass}>Sign Up</button>
                    </div>
                </div>
            </div>
         </div>
    );
};


const Welcome = () => {
    return <Home />;
  };
  
export default Welcome;