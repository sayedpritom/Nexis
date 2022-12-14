import React, { useState } from 'react'
import peopleImage from '../../Images/people.png'
import arrow from '../../Images/Arrow.svg'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Signup = () => {

    const [index, setIndex] = useState(1)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmitNames = e => {
        e.preventDefault()
        setIndex(2)
    }

    const handleSubmitPhoneEmail = e => {
        e.preventDefault()
        setIndex(3)
    }

    const user = {
        "first_name": firstName,
        "last_name": lastName,
        "phone_number": phone,
        "email": email,
        "password": password
    }

    const handleSubmitPassword = (e) => {
        e.preventDefault()

        fetch(`https://test.nexisltd.com/signup`, {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                data.sucess? toast.success(data.sucess) : toast.error(data.error)
                console.log(data);
                data.sucess && navigate('/login')
            })
    }


    return (
        <div className='signup'>
            <div className='peopleImage'><img src={peopleImage} alt="" /></div>
            <div className='form-container'>
                <h3 className='sign-up-form'>SignUp Form</h3>
                {index === 1 &&
                    <form onSubmit={handleSubmitNames}>
                        <input required autoFocus onChange={(e) => setFirstName(e.target.value)} type="text" value={firstName} placeholder='Write First Name' />
                        <p className='eight-character'>Your password must be 8 character</p>
                        <br />
                        <input required onChange={(e) => setLastName(e.target.value)} type="text" value={lastName} placeholder='Write Last Name' />
                        <div className="buttons">
                            <button type='submit' className='next-step-btn'>Next Step <img src={arrow} alt="" /></button>
                        </div>
                    </form>}
                {index === 2 &&
                    <form onSubmit={handleSubmitPhoneEmail}>
                        <input required autoFocus onChange={(e) => setPhone(e.target.value)} type="tel" value={phone} placeholder='01XXXXXXXXX' />
                        <br />
                        <input required type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Write Email Address' />
                        <div className="buttons">
                            <button type='submit' className='next-step-btn'>Next Step <img src={arrow} alt="" /></button>
                            <p className='back-btn' onClick={() => setIndex(1)}>Back</p>
                        </div>
                    </form>}
                {index === 3 &&
                    <form onSubmit={handleSubmitPassword}>
                        <input required autoFocus onChange={(e) => setPassword(e.target.value)} type="text" pattern="().{8,}" title="Must contain at least 8 or more characters" value={password} placeholder='Write Password' />
                        <br />
                        <div className="buttons">
                            <button type='submit' className='next-step-btn'>Next Step <img src={arrow} alt="" /></button>
                            <p className='back-btn' onClick={() => setIndex(2)}>Back</p>
                        </div>
                    </form>}
                <p className='already-have-account'>Already have an account? <Link to="/login">Login here</Link> </p>
            </div>
        </div>
    );
};

export default Signup;