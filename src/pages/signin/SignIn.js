import React, {useContext, useState} from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function SignIn() {

    const { email, setEmail} = useState("");
    const { password, setPassword } = useState("");
    const { login } = useContext(AuthContext);
    const [error,toggleError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
           const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                email: email,
                password: password,
            });

            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (

        <>
            <h1>Login</h1>
            <p>Welcome to the login page</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadress:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Password:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                </form>

            <p>Don't Have an Account?<Link to="/signup"> Register </Link> first here..</p>

        </>
    );
}

export default SignIn;