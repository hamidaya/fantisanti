import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./EventsList.css";
import{handleAddFavorite} from "./../searchBar/SearchBar"

const apiKey = 'XcDnZDvntgJYkLYVLKcT1281Zzlp4UogZw1RDuPa';

const EventsList = ({ addFavorite }) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const URI = "https://api.predicthq.com/v1/events/?category=festivals&label=music%2Cfestival&limit=100&offset=100&phq_attendance=10000";
            const ENDPOINT = "events";

            try {
                const response = await axios.get(URI + ENDPOINT, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                    },
                });

                console.log(response.data);
                setEvents(response.data.results);
                console.log(response.data.events);
            } catch (error) {
                console.error(error);
            }
        }

        fetchEvents();
    }, []);

    return (
        <section>
            <div>
                {events &&
                    events.map((event) => {
                        return (
                            <section
                                id="popular-events"
                                className="outer-popular-events-container"
                                key={event.id}
                            >
                                <div className="inner-popular-events-container">
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                    <p>{event.timezone.split("/")[1]}</p>
                                    <p>{event.start.split('T')[0]} − {event.end.split('T')[0]}</p>
                                    <p>{event.entities[0] ? event.entities[0].formatted_address : ""}</p>
                                    <p>{event.entities[0] ? event.entities[0].description : ""}</p>
                                    <div className="button-container">
                                        <button
                                            className="left-btn"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const description = event.entities[0] ? event.entities[0].description : '';
                                                if (description) {
                                                    window.open('', 'event-description-window', 'width=500,height=400');
                                                    const descriptionWindow = window.open('', 'event-description-window');
                                                    descriptionWindow.document.write(description);
                                                    descriptionWindow.focus();
                                                }
                                            }}
                                        >
                                            More info

                                        </button>
                                        <button onClick={() => handleAddFavorite(event)}>Add to Favorites</button>

                                        <button
                                            className="right-btn"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'http://voorbeeldje.nl/tickets';
                                            }}
                                        >
                                            Tickets
                                        </button>

                                        <button
                                            className="right-btn"
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = 'http://localhost:3000/registerevent';
                                            }}
                                        >
                                            Register event
                                        </button>


                                </div>
                                </div>
                            </section>
                        );
                    })}
            </div>
        </section>
    );
};

export default EventsList;
