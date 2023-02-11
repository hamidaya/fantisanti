import React from 'react';
import EventsList from "../../components/eventlist/EventsList";
import "./ListEvents.css"
function ListEvents({styleState}) {
    return (

        <main className={styleState}>
                <div className="EventsList-sub-items">
                <p className="EventsList-title-text">
                <h1>Overview League Europe</h1>
                </p>
                <EventsList/>
            </div>
             </main>
    );
}

export default ListEvents;