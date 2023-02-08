import React from 'react';
import EventsList from "../../components/eventlist/EventsList";

function ListEvents({styleState}) {
    return (
        <main className={styleState}>
                <div className="EventsList-container">
                <p className="EventsList-text">
                <h1>Overview League Europe</h1>
                </p>
                <EventsList/>
            </div>
             </main>
    );
}

export default ListEvents;