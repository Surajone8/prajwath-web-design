import React, { useState } from 'react';
import axios from 'axios';
// import { useUser } from './UserContext';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className='form-container'>
            <form>
                <label>Name:</label>
                <input
                    className='input'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Password:</label>
                <input
                    className='input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='register-btn' type="button" >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
