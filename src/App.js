import React, {useContext, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import { AuthContext } from './context/AuthContext';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import RegisterEvent from './pages/events/EventCreate';


function App() {

    const [styleState, setStyleState] = useState('body')
    const { isAuth } = useContext(AuthContext);

    return (
        <div className={styleState}>
            <Navigation setStyleState={setStyleState}/>
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
                    <Route exact path="/RegisterEvent">
                    {isAuth ? <Profile /> : <Redirect to="/signin" />}
                    </Route>

                </Switch>
            </div>
        </div>
    );
}

export default App;