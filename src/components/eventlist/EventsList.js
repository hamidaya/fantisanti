import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./EventsList.css"
import { Children } from 'react';

const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';

const EventsList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchEvents()
            {
        const URI = ("https://api.predicthq.com/v1/");
        const ENDPOINT = "events"

        try {

            // haal data op die met een API.
            const responds = await axios.get(URI + ENDPOINT, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,

                },
            })

            console.log(responds.data);
            setEvents(responds.data.results)
            console.log(responds.data.events)

        } catch (e) {
            console.error(e);
        }
    }
        fetchEvents()
        console.log(fetchEvents())
    },[])

    return (
        <article>

            <div className="outer-event-block-container">
                {events && events.map((test) => {
                    return(
                      <div className="inner-events-block-container">
                          <span>Name:{test.title}</span>
                          <span>Date:{test.start.split('T')[0]}</span>
                          <span>Location:{test.timezone.split('/')[1]}</span>


                      </div>
                    )})}
            </div>
        </article>

    );

};

export default EventsList;

