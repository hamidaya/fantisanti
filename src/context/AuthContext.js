import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            if (decoded.exp * 1000 > Date.now()) {

                fetchUserData(token, '/profile');
            } else {

                logout();
            }
        } else {
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(JWT, '/profile');
        history.push('/profile');
    }

    function logout() {
        localStorage.removeItem('token');
        setIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('User is logged out!');
        history.push('/');
    }

    async function fetchUserData(token, redirectUrl) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            setIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if (redirectUrl) {
                history.push(redirectUrl);
            }
        } catch (e) {
            console.error(e);
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
