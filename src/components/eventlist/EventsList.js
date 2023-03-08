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
        const URI = ("https://api.predicthq.com/v1/events/?category=festivals&label=music%2Cfestival&limit=10&offset=10&phq_attendance=1000 ");
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
        <section>
            <div>
                {events && events.map((event) => {
                    return(
                    <section id="popular-events" className="outer-popular-events-container">
                        <div className="inner-popular-events-container">
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <p>{event.timezone.split('/')[1]}</p>
                            <p>{event.start.split('T')[0]}</p>
                        </div>
                    </section>


                    )})}
            </div>
        </section>);

};

export default EventsList;

