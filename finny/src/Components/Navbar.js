import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import './Navbar.css';

function Navbar() {
    const [logIn, setLogIn] = useState(() => {
        return {isLogged: false}
    });
    const [smallNav, setNav]= useState(window.innerWidth <= 800);

    const handleResize = () => {
        setNav(window.innerWidth <= 800);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('hi there');

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div className='center'>
        <nav className={smallNav ? 'navbar small-nav' : 'navbar'}>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    <img src='images/logo.png' alt='logo' className='logo-img'/>
                    <i className='logo-text'>Finny</i>
                </Link>
            </div>
            <div className={logIn.isLogged ? 'account-container':
                            'account-container log-in'}>
                {!logIn.isLogged ?
                    <>
                        <button className='navbar-login' onClick={
                            () => {setLogIn({isLogged: true, userName: 'Default User Name'})}
                        }>Log in</button>
                        <button className='navbar-signin'>Sign in</button>
                    </>
                    :
                    <>
                        <img src='images/default_pfp.jpg' alt='Profile Photo'
                             className='user-pfp'/>
                        <i className='user-name'>{logIn.userName}</i>
                    </>
                }
            </div>
        </nav>
        </div>
    );
}

export default Navbar;