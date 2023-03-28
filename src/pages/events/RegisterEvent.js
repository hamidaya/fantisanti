import React, { useState } from 'react';
import "./RegisterEvent.css"
function RegisterEvent() {

    //Event information:


    const [attendees, setAttendees] = useState(0);
    const [location, setLocation] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [eventName, setEventName] = useState('');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);



    // Organization owner:

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');


function handleSubmit(e) {

    e.preventDefault();
    console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
   // Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    // Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${remark},
    Algemene voorwaarden: ${agreeTerms}
    
    `);
   }

return (

<>
    <section id="registerEvent" className="outer-registerEvent-container">
        <div className="inner-registerEvent-container">
            <p>Welcome to the event registration page.</p>
            <h1>Event organizer</h1>
        <form onSubmit={handleSubmit}>
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



{/*//************************************************************/}


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
                <label htmlFor="location-field">Event Adress</label>
                <input
                    name="location"
                    id="location-field"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                />
            </section>





        <section>
            <label htmlFor="zipcode-field">Postcode</label>
            <input
                name="zipcode"
                id="zipcode-field"
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
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

        <button type="submit">Send</button>
    </form>
            </div>
    </section>
</>
    )
};


export default RegisterEvent;