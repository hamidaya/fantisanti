import React, {useContext, useEffect, useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import { AuthContext } from './context/AuthContext';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import {getEvents} from "./api/axios";
import SearchBar from './components/searchBar/SearchBar'
import ListPage from "./components/eventlist/ListPage";
import ListEvents from "./pages/events/ListEvents";
import RegisterEvent from "./pages/events/RegisterEvent";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import termsConditions from "./pages/termsConditions/TermsConditions";
import privacyCookies from "./pages/privacyCookies/PrivacyCookies";


function App() {

    const [events, setEvents] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [styleState, setStyleState] = useState('body')
    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        getEvents().then(json => {
            setEvents(json)
            setSearchResults(json)
            setStyleState('body')
        })
    }, [])

    return (

        <>
             <div className={styleState}>
            <Navigation setStyleState={setStyleState}/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                     <Home />
                       <SearchBar data={events} setSearchResults={setSearchResults} />
                    </Route>
                    <Route path="/profile">
                        {isAuth ? <Profile /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/RegisterEvent">
                        {isAuth ? <RegisterEvent /> : <Redirect to="/signin" />}
                        </Route>
                    <Route path="/ListEvents" >
                        <ListEvents />
                    </Route>
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/termsConditions" component={termsConditions} />
                    <Route path="/privacyCookies" component={privacyCookies} />
                    </Switch>

            </div>
        </div>

</>
 );
}

export default App;