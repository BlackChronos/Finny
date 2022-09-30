import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import './Navbar.css';

function Navbar() {


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    <img src='images/logo.png' alt='logo' className='logo-img'/>
                    <i className='logo-text'>Finny</i>
                </Link>
            </div>
            <div className='account-container'>
                <button className='navbar-login'>Log in</button>
                <button className='navbar-signin'>Sign in</button>


            </div>
        </nav>
    );
}

export default Navbar;