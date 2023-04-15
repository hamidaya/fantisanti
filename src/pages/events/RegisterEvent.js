import React, { useEffect, useState } from 'react';
import './RegisterEvent.css';

function RegisterEvent() {
    // Organization owner:
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    // Event information:
    const [attendees, setAttendees] = useState('');
    const [location, setLocation] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [eventName, setEventName] = useState('');
    const [remark, setRemark] = useState('');

    useEffect(() => {
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('attendees', attendees);
        localStorage.setItem('location', location);
        localStorage.setItem('zipcode', zipCode);
        localStorage.setItem('email', email);
        localStorage.setItem('eventname', eventName);
        localStorage.setItem('Remark', remark);
    }, [firstname, lastname, attendees, location, zipCode, email, eventName, remark]);

    useEffect(() => {
        const storedFirstname = localStorage.getItem('firstname');
        const storedLastname = localStorage.getItem('lastname');
        const storedAttendees = localStorage.getItem('attendees');
        const storedLocation = localStorage.getItem('location');
        const storedZipcode = localStorage.getItem('zipcode');
        const storedEmail = localStorage.getItem('email');
        const storedEventname = localStorage.getItem('eventname');
        const storedRemark = localStorage.getItem('Remark');

        if (storedFirstname) setFirstname(storedFirstname);
        if (storedLastname) setLastname(storedLastname);
        if (storedAttendees) setAttendees(storedAttendees);
        if (storedLocation) setLocation(storedLocation);
        if (storedZipcode) setZipCode(storedZipcode);
        if (storedEmail) setEmail(storedEmail);
        if (storedEventname) setEventName(storedEventname);
        if (storedRemark) setRemark(storedRemark);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
      firstname: ${firstname}
      lastname: ${lastname},
      attendees: ${attendees},
      location: ${location},
      postcode: ${zipCode},
      remarks: ${remark},
      email: ${email}
      eventname:${eventName}
    `);
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
                name="attendees"
                id="attendees-field"
                type="number"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
            />
        </section>

            <section>
                <label htmlFor="location-field">Event location/Address</label>
                <input
                    name="location"
                    id="location-field"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                />
            </section>

        <section>
            <label htmlFor="zipcode-field">Zip/code</label>
            <input
                name="zipcode"
                id="zipcode-field"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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