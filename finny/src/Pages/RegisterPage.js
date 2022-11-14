import React, {useState} from 'react';
import validateInfo from "../Hooks/validate";
import useForm from "../Hooks/useForm";

import "./LogInPage.css";

async function registerUser(user) {
    console.log(user);
    return fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
}

function RegisterPage({setToken}) {
    const [hidden, setHidden] = useState(true);
    const [hiddenConfirm, setHiddenConfirm] = useState(true);
    const [password, setPassword] = useState("");
    const {handleChange, handleSubmit, values, errors} = useForm(() => {
    }, validateInfo);

    function toggleHidden() {
        setHidden(!hidden);
    }

    function toggleHiddenConfirm() {
        setHiddenConfirm(!hiddenConfirm);
    }

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
                <i className={hidden ? "bi bi-eye-slash" : "bi bi-eye"}
                   id="togglePassword" onClick={toggleHiddenConfirm}/>
                {errors.email && <p>{errors.email}</p>}
            </div>

            <input type="submit" value="Log In"/>
        </form>
    );
}

export default RegisterPage;