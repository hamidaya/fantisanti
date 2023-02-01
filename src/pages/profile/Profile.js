import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


    function Profile() {
        const [profileData, setProfileData] = useState({});
        const { user } = useContext(AuthContext);
        // useEffect(() => {
        //     // we receive the data for mounting point...
        //     async function fetchProfileData() {
        //
        //         //get the token from the local storage for Get-requested as membership
        //         const token = localStorage.getItem('token');
        //
        //         try {
        //             const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/auth/user', {
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                     Authorization: `Bearer ${token}`,
        //                 },
        //             });
        //             setProfileData(result.data);
        //         } catch (e) {
        //             console.error(e);
        //         }
        //     }
        //
        //     fetchProfileData();
        // }, [])

        return (
            <>
                <h1>My profile</h1>
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