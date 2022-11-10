import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import './Navbar.css';

// async function getUserInfo(token) {
//     if(!token) return null;
//     console.log(token);
//     let request = token;
//     let response = await fetch("http://localhost:8080/users/"+request)
//         .then(response => response.json());
//
//     return response;
// }


function Navbar({isMobile, userToken}) {
    const [logIn, setLogIn] = useState({});

    useEffect(() =>{
        let request = userToken;

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/users/" + request);
                const json = await response.json();
                setLogIn(json)
                console.log(json);
                console.log(json.firstName);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [userToken])

    let navigate = useNavigate();
    const toLogIn = () =>{
        navigate("/login");
    }
    const toSignIn = () =>{
        navigate("/register");
    }


    return (
        <>
            <div className='center'>
                <nav className={isMobile ? 'navbar mobile-version' : 'navbar'}>
                    <div className='navbar-container'>
                        <Link to="/" className='navbar-logo'>
                            <img src={process.env.PUBLIC_URL + 'images/logo.png'}
                                 alt='logo' className='logo-img'/>
                            <i className='logo-text'>Finny</i>
                        </Link>
                    </div>
                    <div className={logIn.firstName
                                 ? 'account-container'
                                 : 'account-container log-in'}>
                        {!logIn.firstName ?
                            <>
                                <button className='navbar-login'
                                        onClick={toLogIn}>Log in
                                </button>
                                <button className='navbar-signin'
                                        onClick={toSignIn}>Sign in
                                </button>
                            </>
                            :
                            <>
                                <img src={logIn.photoLink} alt='Profile Photo'
                                     className='user-pfp'/>
                                <i className='user-name'>{logIn.firstName + " " + logIn.lastName}</i>
                            </>
                        }
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;