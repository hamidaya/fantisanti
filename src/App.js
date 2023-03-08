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
                       <SearchBar events={events} setSearchResults={setSearchResults} />
                       <ListPage searchResults={searchResults} />
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
                    <Route path="/registerevent">
                    {isAuth ? <Profile /> : <Redirect to="/signin" />}
                    </Route>
                    <Route path="/ListEvents">
                        <ListEvents />
                    </Route>
                </Switch>

            </div>
        </div>
</>
 );
}

export default App;