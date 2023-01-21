import React, {createContext, useState } from 'react';


export const AuthContext = createContext({});

function AuthContextProvider({children});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState ("false");
}
function login() {
    console.log("user is already logged in")
}
export default AuthContextProvider;
