import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
    return (
        <>
            <h1>Profile page</h1>
            <section>
                <h2>Information</h2>
                <p><strong>Username:</strong> hardcoded-test</p>
                <p><strong>Email:</strong> hardcoded@test.com</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            </section>
            <p>Go to <Link to="/">Homepage</Link></p>
        </>
    );
}

export default Profile;