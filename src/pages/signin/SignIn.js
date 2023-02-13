import React, {useContext, useState,} from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

function SignIn() {

    const [user, setUser] = useState("");
    const [ password, setPassword ] = useState("");
    const [error,toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
           const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: user,
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
            <section id="login" className="outer-login-container">
                <div className="inner-login-container">
            <h1>Login</h1>
            <p>Welcome to the login page.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-field">
                    Username
                    <input
                        type="text"
                        id="user-field"
                        name="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </label>
                <label htmlFor="password-field">
                    Password
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                 <button
                    type="submit"
                    className="form-button"
                 >                    Login
                </button>
                <p>Don't Have an Account?<Link to="/SignUp"> Register </Link> first here..</p>
            </form>
                    </div>
        </section>
        </>
    );
}

export default SignIn;