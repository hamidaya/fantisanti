import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <h1>Register</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form>
                <p>*Invoervelden*</p>
            </form>
            <p>Do you have an account already? <Link to="/signin">here</Link> login.</p>
        </>
    );
}

export default SignUp;