import React, {useState} from 'react';
import './App.css';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import {Route, Routes} from 'react-router-dom';
import logo from "./assets/icons/fantisanti.png"
import { AuthContext } from './context/AuthContext';
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import EventCreate from "./pages/events/EventCreate";

function App() {

    const [styleState, setStyleState] = useState('body')
    const { isAuth } = useContext(AuthContext);

    return (
            <body className={styleState}>
            <Navigation styleState={styleState} setStyleState={setStyleState} icon={logo} title="Fanti-Santi"/>
            <Routes>
                <Route path="/" element={<Home styleState={styleState}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/events" element={<EventCreate/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
            </body>
    );
}

export default App;