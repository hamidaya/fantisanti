import React, { useContext, useEffect, useState } from 'react';
import './RegisterEvent.css';
import { AuthContext } from './.././../context/AuthContext';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function RegisterEvent() {

    const { isAuth, user } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!isAuth) {
            history.push('/SignIn/');
        }
    }, [isAuth, history]);

    const [registeredEvents, setRegisteredEvents] = useState([]);

    // Organization owner:
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    // Event information:
    const [attendees, setAttendees] = useState('');
    const [location, setLocation] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState("")
    const [email, setEmail] = useState('');
    const [eventName, setEventName] = useState('');
    const [remark, setRemark] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('attendees', attendees);
        localStorage.setItem('location', location);
        localStorage.setItem('zipcode', zipCode);
        localStorage.setItem('city', city);
        localStorage.setItem('email', email);
        localStorage.setItem('eventname', eventName);
        localStorage.setItem('remark', remark);
        localStorage.setItem('startDate', startDate);
        localStorage.setItem('endDate', endDate);
    }, [firstname, lastname, attendees, location, zipCode, city, email, eventName, remark, startDate, endDate]);

    useEffect(() => {
        const storedFirstname = localStorage.getItem('firstname');
        const storedLastname = localStorage.getItem('lastname');
        const storedAttendees = localStorage.getItem('attendees');
        const storedLocation = localStorage.getItem('location');
        const storedZipcode = localStorage.getItem('zipcode');
        const storedCity = localStorage.getItem('city')
        const storedEmail = localStorage.getItem('email');
        const storedEventname = localStorage.getItem('eventname');
        const storedRemark = localStorage.getItem('remark');
        const storedStartDate = localStorage.getItem('startDate');
        const storedEndDate = localStorage.getItem('endDate');

        if (storedFirstname) setFirstname(storedFirstname);
        if (storedLastname) setLastname(storedLastname);
        if (storedAttendees) setAttendees(storedAttendees);
        if (storedLocation) setLocation(storedLocation);
        if (storedZipcode) setZipCode(storedZipcode);
        if (storedCity) setCity(storedCity);
        if (storedEmail) setEmail(storedEmail);
        if (storedEventname) setEventName(storedEventname);
        if (storedRemark) setRemark(storedRemark);
        if (storedStartDate) setStartDate(storedStartDate);
        if (storedEndDate) setEndDate(storedEndDate);

    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const event = {
            firstname,
            lastname,
            attendees,
            location,
            zipcode: zipCode,
            city,
            remarks: remark,
            email,
            eventname: eventName,
            startDate,
            endDate
        };
        setRegisteredEvents([...registeredEvents, event]);
        localStorage.setItem('registeredEvents', JSON.stringify([...registeredEvents, event]));
        console.log('Event registered successfully!');
    }

    return (

<>
<section id="registerEvent" className="outer-registerEvent-container">
    <div className="inner-registerEvent-container">
        <p>Welcome to the event registration page.</p>
        <h1>Event organizer</h1>
        <form id="registerForm" className="RegisterForm" onSubmit={handleSubmit}>
            <section>
                <label htmlFor="firstname-field">Firstname</label>
                <input
                    name="firstname"
                    id="firstname-field"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="lastname-field">Lastname</label>
                <input
                    name="lastname"
                    id="lastname-field"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="email-field">Email Adress</label>
                <input
                    name="email-field"
                    id="email-field"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </section>

            <section>
             <h1>Event information</h1>

            <section>
                <label htmlFor="eventName-field">Event Name</label>
                <input
                    name="eventname"
                    id="eventname-field"
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}

                />
            </section>

            <label htmlFor="attendees-field">Expected attendees</label>
                <input
                    type="number"
                    name="expectedAttendees"
                    id="expected-attendees-field"
                    value={attendees}
                    onChange={(e) => setAttendees(Math.max(0, parseInt(e.target.value)))}
                    min="0"
                />
        </section>

            <section>
                <label htmlFor="location-field">Event Address</label>
                <input
                    name="location"
                    id="location-field"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                />

            </section>
            <section>
                <div>
                    <label htmlFor="startDate">Start Date:("") </label>
                    <input
                        name="startDate"
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{ display: "inline-block", marginRight: "10px" }}
                    />
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        name="endDate"
                        id="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        style={{ display: "inline-block" }}
                    />
                </div>
            </section>

        <section>
            <label htmlFor="zipcode-field">Zip/code</label>
            <input
                name="zipcode"
                id="zipcode-field"
                type="number/text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
        </section>

            <section>
                <label htmlFor="city-field">City</label>
                <input
                    name="city"
                    id="city-field"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}

                />
            </section>

        <section>
            <label htmlFor="remark-field">Event description</label>
            <textarea
                name="remark"
                id="remark-field"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows={20}
                cols={40}
                placeholder={"Describe the event so much as possible, " +
                    "including the  target audience, dresscode and policy.."}

            />
        </section>

            <button onClick={handleSubmit}>Register</button>
    </form>
            </div>
    </section>
</>
    )
};


export default RegisterEvent;