import React, {useContext} from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function SignIn() {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <p>*invoervelden*</p>
                <button type="submit">LogIn</button>
            </form>

            <p>You have an accound already? <Link to="/signup">Register</Link> first...</p>
        </>
    );
}

export default SignIn;