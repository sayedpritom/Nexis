import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import peopleImage from '../../Images/people.png'
import './Login.css'


const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = {
        "email": email,
        "password": password
    }

    const handleLogin = (e) => {
        e.preventDefault()

        fetch(`https://test.nexisltd.com/login`, {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("access_token", data.access_token)
                !data.error ? toast.success('Login Successful') : toast.error(data.error)
                !data.error && navigate('/attendance')
            })
    }

    return (
        <div className='signup'>
            <div className='peopleImage'><img src={peopleImage} alt="" /></div>
            <div className='form-container'>
                <h3 className='sign-up-form'>Login Form</h3>
                <form onSubmit={handleLogin}>
                    <input required autoFocus onChange={(e) => setEmail(e.target.value)} type="text" value={email} placeholder='Write Email Address' />
                    <br />
                    <input required onChange={(e) => setPassword(e.target.value)} type="text" value={password} placeholder='Write Password' />
                    <div className="buttons">
                        <button type='submit' className='next-step-btn'>Login</button>
                    </div>
                    <p className='already-have-account'>Don't have an account? <Link to="/signup">SIGN UP HERE</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;