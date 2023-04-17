import React, {useContext, useState,} from 'react';
import './SignIn.css';
import "./SignIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);

        try {
            const response = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
                {
                    username: username,
                    password: password,
                }
            );

            console.log(response.data);
            login(response.data.accessToken);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    return (
        <>
            <section id="login" className="outer-login-container">
                <div className="inner-login-container">
                    <h1>Login</h1>
                    <p>Welcome to the login page.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username-field">
                            Username
                            <input
                                type="text"
                                id="username-field"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <button type="submit" className="form-button">
                            Login
                        </button>
                        <p>
                            Don't have an account?{" "}
                            <Link to="/SignUp">Register</Link> first here.
                        </p>
                        {error && (
                            <p className="error-message">Invalid username or password</p>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignIn;