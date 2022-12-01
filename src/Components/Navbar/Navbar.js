import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <Link to="home"><img className='logo' src={logo} alt="" /></Link>
        </div>
    );
};

export default Navbar;