import "./Event.css"
import React from "react";

//Maak een functie event aan die we over hele project kunnen hergebruiken met een filter
//uit een object in de array. Split vervolgens de slash / bij de timezone.
// Split de UTC datum en geeft alleende eerst deel van de datum terug.
const event = ({ event }) => {
    return (
        <section id="search-events" className="outer-search-events-container">
            <div className="inner-popular-events-container">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.timezone.split('/')[1]}</p>
                <p>Date:{event.start.split('T')[0]}</p>
                <p>{event.entities[0] ? event.entities[0].formatted_address : ""}</p>
                <p>{event.entities[0] ? event.entities[0].description : ""}</p>

            </div>
        </section>
    )
}
export default event;