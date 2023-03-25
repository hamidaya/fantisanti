import React from 'react';
import EventsList from "../../components/eventlist/EventsList";
import "./ListEvents.css"

function ListEvents({styleState}) {

    return (

        <main className={styleState}>
            <section id="popular-events" className="outer-popular-events-container">
                <p>Most popular events</p>
            </section>
            <EventsList/>
        </main>
    );
}

export default ListEvents;