import React, { useState } from 'react';
import "./RegisterEvent.css"
function RegisterEvent() {

    //Event information:


    const [attendees, setAttendees] = useState(0);
    const [zipcode, setZipcode] = useState('');
    // const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    // const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
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
    console.log(`Fruitmand bestelling - aardbeiden: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
}

return (

<>
    <section id="registerEvent" className="outer-registerEvent-container">
        <div className="inner-registerEvent-container">
            <p>Welcome to the event registration page.</p>
            <h1>Event organizer</h1>
        <form onSubmit={handleSubmit}>
        <section>
            <label htmlFor="firstname-field">Voornaam</label>
            <input
                name="firstname"
                id="firstname-field"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
        </section>
        <section>
            <label htmlFor="lastname-field">Achternaam</label>
            <input
                name="lastname"
                id="lastname-field"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}

            />
        </section>

        <section>
             <h1>Event information</h1>
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
            <label htmlFor="zipcode-field">Postcode</label>
            <input
                name="zipcode"
                id="zipcode-field"
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
            />
        </section>
        {/*<section>*/}
        {/*    <label htmlFor="delivery-field">Bezorgfrequentie</label>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*    <select*/}
        {/*        name="delivery"*/}
        {/*        id="delivery-field"*/}
        {/*        value={deliveryFrequency}*/}
        {/*        onChange={(e) => toggleDeliveryFrequency(e.target.value)}*/}
        {/*    >*/}
        {/*        <option value="week">Iedere week</option>*/}
        {/*        <option value="two-week">Om de week</option>*/}
        {/*        <option value="month">Iedere maand</option>*/}
        {/*    </select>*/}
        {/*</section>*/}
        {/*<section>*/}
        {/*    <input*/}
        {/*        type="radio"*/}
        {/*        value="daytime"*/}
        {/*        name="timeslot"*/}
        {/*        id="timeslot-field-daytime"*/}
        {/*        checked={deliveryTimeslot === 'daytime'}*/}
        {/*        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}*/}
        {/*    />*/}
        {/*    <label htmlFor="timeslot-field-daytime">Overdag</label>*/}
        {/*    <input*/}
        {/*        type="radio"*/}
        {/*        value="evening"*/}
        {/*        checked={deliveryTimeslot === 'evening'}*/}
        {/*        onChange={(e) => toggleDeliveryTimeslot(e.target.value)}*/}
        {/*        name="timeslot"*/}
        {/*        id="timeslot-field-evening"*/}
        {/*    />*/}
        {/*    <label htmlFor="timeslot-field-evening">'s Avonds</label>*/}
        {/*</section>*/}
        <section>
            <label htmlFor="remark-field">Comments</label>
            <textarea
                name="remark"
                id="remark-field"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows={36}
                cols={60}
            />
        </section>
        <section>
            <input
                type="checkbox"
                name="agree"
                id="agree-field"
                value={agreeTerms}
                onChange={(e) => toggleAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agree-field">I agree with requirements</label>
        </section>
        <button type="submit">Send</button>
    </form>
            </div>
    </section>
</>
    )
};


export default RegisterEvent;