import React, {useEffect, useState} from 'react';
import axios from "axios";

const apiKey = 'FME7MZEqvSTSTA3NrqgUg4V_X9zV2b4JPPIEb2a5';

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
        <div>
            <ul>
                {events && events.map((test) => {
                    return( <li>{test.title}</li>

                    )})}
            </ul>
        </div>);

};

export default EventsList;

