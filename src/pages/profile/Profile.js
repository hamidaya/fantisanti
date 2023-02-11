import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

    function Profile() {
        const [profileData, setProfileData] = useState({});
        const { user } = useContext(AuthContext);

        return (
            <>
                <h1>My profile information:</h1>
                <section>
                    <h2>Your personal information</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </section>

                <p>Go back to<Link to="/"> Homepage</Link></p>

           </>
        );
    }

export default Profile;