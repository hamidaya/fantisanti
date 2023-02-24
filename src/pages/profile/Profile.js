import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./Profile.css"
    function Profile() {
        const [profileData, setProfileData] = useState({});
        const { user } = useContext(AuthContext);

        return (
            <>
               <section>
                    <div className="outer-profile-container">
                    <h2>Your personal information</h2>
                    <p className="inner-profile-container">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    </p>
                    </div>
               </section>

                <p>Go back to<Link to="/"> Homepage</Link></p>

           </>
        );
    }

export default Profile;