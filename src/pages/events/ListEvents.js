import React from 'react';
import EventsList from "../../components/eventlist/EventsList";
import "./ListEvents.css"
function ListEvents({styleState}) {
    return (

        <main className={styleState}>
            <section id="list-events" className="outer-list-events-container">
                <div className="inner-list-events-container">
                    <h1>Overview festivals Netherlands and Germany</h1>
                     <p className="events-List-title-text">
                      </p>
                <EventsList/>

            </div>
                </section>
             </main>
    );
}

export default ListEvents;