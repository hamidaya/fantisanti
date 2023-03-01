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
        <div>
            <h1> Overview Festivals </h1>
                  {events && events.map((test) => {
                    return(
                      <div>
                          <span>{test.title}</span>
                          <span>Date:{test.start}</span>
                          <span>{test.timezone.split('/')[1]}</span>

                      </div>



                    )})}


        </div>

    );

};

export default EventsList;

