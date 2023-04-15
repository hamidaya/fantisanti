import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./EventsList.css"


const apiKey = '4H5wT0s-2MfmRIH3Umki9KbT7hj4BBg0a-IXpkOL';

const EventsList = ({addFavorite}) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchEvents()
            {
        const URI = ("https://api.predicthq.com/v1/events/?category=festivals&label=music%2Cfestival&limit=100&offset=100&phq_attendance=10000 ");
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
                {events &&
                    events.map((event) => {
                        return (
                            <section
                                id="popular-events"
                                className="outer-popular-events-container"
                            >
                                <div className="inner-popular-events-container">
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                    <p>{event.timezone.split("/")[1]}</p>
                                    <p>{event.start.split("T")[0]}</p>
                                    <p>
                                        {event.entities[0] ? event.entities[0].formatted_address : ""}
                                    </p>
                                    <p>
                                        {event.entities[0] ? event.entities[0].description : ""}
                                    </p>
                                    <button onClick={() => addFavorite(event)}>Add to Favorites</button>
                                    </div>
                            </section>
                        );
                    })}
            </div>
        </section>
    );
};


export default EventsList;

