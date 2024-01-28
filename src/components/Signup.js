import React, { useState } from 'react';
import "./HomePage.css"


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dataFromDatabase, setDataFromDatabase] = useState([]);

    // const [data, setData] = useState([]);
    // const [agreed, setAgreed] = useState(false);


    return (
        <div className='form-container'>
            {/* <h2>Signup</h2> */}
            <form>
                {/* Include input fields for name, email, password, confirm password, phone, and data */}
                <label>Name:</label>
                <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Confirm Password:</label>
                <input className='input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <label>Phone:</label>
                <input className='input' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <button className='register-btn' type="button">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
