import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './Navbar.css';

function Navbar({isMobile}) {
    const [logIn, setLogIn] = useState(() => {
        return {isLogged: false}
    });

    return (
        <>
            <div className='center'>
                <nav className={isMobile ? 'navbar mobile-version' : 'navbar'}>
                    <div className='navbar-container'>
                        <Link to="/" className='navbar-logo'>
                            <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt='logo' className='logo-img'/>
                            <i className='logo-text'>Finny</i>
                        </Link>
                    </div>
                    <div className={logIn.isLogged ? 'account-container' :
                        'account-container log-in'}>
                        {!logIn.isLogged ?
                            <>
                                <button className='navbar-login' onClick={
                                    () => {
                                        setLogIn({isLogged: true, userName: 'Default User Name'})
                                    }
                                }>Log in
                                </button>
                                <button className='navbar-signin'>Sign in</button>
                            </>
                            :
                            <>
                                <img src={process.env.PUBLIC_URL + 'images/default_pfp.jpg'} alt='Profile Photo'
                                     className='user-pfp'/>
                                <i className='user-name'>{logIn.userName}</i>
                            </>
                        }
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;