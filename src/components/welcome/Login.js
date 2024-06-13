import React, { useState } from 'react';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
// import { useState} from 'react';
import axios from 'axios';
import MyCalendar from '../calender/CalenderComponent';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/login', { email, password });
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('jwt', token);
                navigate('/calendar');
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="form-container sign-in">
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <h1>Sign In</h1>
                <div className="logo-container">
                    <img src="/logo.png" alt="Logo" className="logo" />
                </div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <a href="#">Forgot Your Password?</a>
                <button type="submit">Sign In</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;