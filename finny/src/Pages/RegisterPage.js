import React, {useCallback, useEffect, useState} from 'react';
import validateInfo from "../Validators/validate";
import validateInfo2 from "../Validators/validate2";
import useForm from "../Hooks/useForm";

import "./LogInPage.css";
import {Link, useNavigate} from "react-router-dom";


function RegisterPage({setToken}) {
    const [hidden, setHidden] = useState(true);
    const [hiddenConfirm, setHiddenConfirm] = useState(true);
    const [secondForm, setSecondForm] = useState(false);
    const [emails, setEmails] = useState([]);
    const [request, setRequest] = useState();
    const nav = useNavigate();

    async function registerUser(user) {
        console.log(user);
        let response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json());
        console.log(response);
        setToken({token: response.user.id.toString()});
        nav("/");
    }

    const getEmails = useCallback(async () => {
        let emailList = await fetch("http://localhost:8080/logins/emails")
            .then(value => value.json());

        setEmails(emailList);
    }, [])


    const submitEvent1 = () => {
        let _request = values;
        delete _request.passwordConfirmation;
        setRequest(_request)
        console.log(request)
        setSecondForm(true);
    }

    const goBack = () => {
        setSecondForm(false);
    }

    const submitEvent2 = () => {
        setRequest({...request, user: User.values});
        console.log(request)

        registerUser(request).then();

    }

    const {handleChange, handleSubmit, values, errors} = useForm(submitEvent1, validateInfo, emails);
    const User = useForm(submitEvent2, validateInfo2);



    useEffect(() => {

        getEmails().then();
        console.log(emails)


    },[values]);


    function toggleHidden() {
        setHidden(!hidden);
    }

    function toggleHiddenConfirm() {
        setHiddenConfirm(!hiddenConfirm);
    }


    if (secondForm === false)
        return (
            <form className="register-container"
                  onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label className='form-label'>Your e-mail:</label>
                    <input
                        className='email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Your password:</label>
                    <input
                        className="password-input"
                        type={hidden ? "password" : "text"}
                        name="password"
                        onChange={handleChange}/>
                    <i className={hidden ? "bi bi-eye-slash" : "bi bi-eye"}
                       id="togglePassword" onClick={toggleHidden}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Confirm password</label>
                    <input className="password-input"
                           type={hiddenConfirm ? "password" : "text"}
                           name="passwordConfirmation"
                           onChange={handleChange}/>
                    <i className={hiddenConfirm ? "bi bi-eye-slash" : "bi bi-eye"}
                       id="togglePassword" onClick={toggleHiddenConfirm}/>
                    {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
                </div>
                <label className='form-label here'>
                    If you have an account, log in <Link to='/login'>here</Link>
                </label>

                <input type="submit" value="Next step"/>
            </form>
        );
    else return (
        <form className="register-container"
              onSubmit={User.handleSubmit}
              autoComplete={null}>
            <div className='form-inputs'>
                <label className='form-label'>Your first name:</label>
                <input
                    className='firstName-input'
                    type='text'
                    name='firstName'
                    placeholder='Enter your first name'
                    value={User.values.firstName}
                    onChange={User.handleChange}
                />
                {User.errors.firstName && <p>{User.errors.firstName}</p>}
            </div>

            <div className='form-inputs'>
                <label className='form-label'>Your last name:</label>
                <input
                    className="lastName-input"
                    type="text"
                    name="lastName"
                    placeholder='Enter your last name'
                    value={User.values.lastName}
                    onChange={User.handleChange}/>
                {User.errors.lastName && <p>{User.errors.lastName}</p>}
            </div>

            <div className='form-inputs'>
                <label className='form-label'>Your phone number:</label>
                <input
                    className="phone-input"
                    type="tel"
                    name="phoneNumber"
                    placeholder='Ex. +39(012)345-6789'
                    value={User.values.phoneNumber}
                    onChange={User.handleChange}/>
                {User.errors.phoneNumber && <p>{User.errors.phoneNumber}</p>}
            </div>

            <div className='form-inputs'>
                <label className='form-label'>Your profile photo link:</label>
                <input
                    className="photo-input"
                    type="url"
                    name="photoLink"
                    value={User.values.photoLink}
                    onChange={User.handleChange}/>
                {User.errors.photoLink && <p>{User.errors.photoLink}</p>}
            </div>

            <input type="button" value="Go Back"
            onClick={goBack}/>
            <input type="submit" value="Sign in"/>

        </form>
    );
}

export default RegisterPage;