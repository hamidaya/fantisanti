import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import "./SignUp.css"
function SignUp() {

    // state for event registration
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");


    // User functionality logging to the GUI
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
           const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email: email,
                password: password,
                username: userName,
                role:["user"],

            });
            console.log(result.data)
            //Redirection to the login page after approved credentials
            history.push('/signin');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }
    return (
        <>
            <section id="signup" className="outer-signup-container">
                <div className="inner-signup-container">
                 <h1>SignUp</h1>
                    <p>Welcome to the registration page.
                    After this step you will be able to register your festival or party on our website.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email-field">
                        Emailadress
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="username-field">
                      Username
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label htmlFor="user-password">
                      Password
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                            {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                            <button
                            type="submit"
                            className="form-button"
                            disabled={loading}
                 >
                     Register
        </button>

        </form>
                </div>
            </section>
    <p>Do you have an account already? <Link to="/signin"> Please login </Link>here.</p>
        </>
);
}
export default SignUp;