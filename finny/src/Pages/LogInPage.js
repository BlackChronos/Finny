import React, {useEffect, useState} from 'react';
import "./LogInPage.css"


async function loginUser(login) {
    console.log(login);
    let request = "email=" + login.email/*.replace('@', '/40')*/ + "&password=" + login.password;
    return fetch("http://localhost:8080/login?"+request)
        .then(response => response.json())
}

function LogInPage({setToken}) {
    const [hidden, setHidden] = useState(true);
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    function toggleHidden() {
        setHidden(!hidden);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser(login);
        setToken({token: token.user.id.toString()});
    }

    return (
        <form className="login-container"
              onSubmit={handleSubmit}>

            <label htmlFor="email">E-mail address:</label>

            <input type="email" name="email" required
                   minLength="4" size="32"
                   onChange={(e) => {
                       setLogin(previousState => {
                           return { ...previousState, email: e.target.value }
                       });
                       console.log(login);
                   }}/>

            <label htmlFor="password">Password:</label>

            <input className="password-input"
                   type={hidden ? "password" : "text"}
                   name="password" required
                   minLength="8" size="32"
                   onChange={(e) => {
                       setLogin(previousState => {
                           return { ...previousState, password: e.target.value }
                       });
                       console.log(login);
                   }}/>
            <i className={hidden ? "bi bi-eye-slash" : "bi bi-eye"}
               id="togglePassword" onClick={toggleHidden} />
            <input type="submit" value="Log In"/>
        </form>
    );
}

export default LogInPage;