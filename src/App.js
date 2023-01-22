import React, {useContext, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import { AuthContext } from './context/AuthContext';
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";


function App() {

    const [styleState, setStyleState] = useState('body')
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <Navigation/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/profile">
                        {isAuth ? <Profile /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;