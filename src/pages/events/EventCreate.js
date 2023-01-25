import React, { useEffect, useState } from 'react';
import "./EventCreate.css"

function EventCreate(){

return (

<>
            <h1>register your event:</h1>
    <p>Welcome to the registration for an Party or festival.</p>
                <form className="event-content_form">
                    <label htmlFor="name-event-field">
                       name of your party or festival
                        <input type="text" id="name-event-field" name="name" placeholder="name of your event"/>
                   </label>
                    <label htmlFor="email-field">
                        emailadress organisation:
                        <input type="email" id="email-field" name="email" placeholder="Email"/>
                    </label>
                        <label htmlFor="Event date">
                         when is your event?
                        <input type="date" id="date-field" name="name" placeholder="start event"/>
                     </label>
                   <button
                        type="submit"
                        className="form-button"
                         > Register
                   </button>
                </form>
 </>
    );
    }

export default EventCreate;