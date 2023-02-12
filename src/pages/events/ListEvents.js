import React from 'react';
import EventsList from "../../components/eventlist/EventsList";
import "./ListEvents.css"
function ListEvents({styleState}) {
    return (

        <main className={styleState}>
            <section id="list-events" className="outer-list-events-container">
                <div className="inner-list-events-container">
                     <p className="events-List-title-text">
                         <h1>Overview League Europe</h1>
                     </p>
                <EventsList/>
            </div>
                </section>
             </main>
    );
}

export default ListEvents;