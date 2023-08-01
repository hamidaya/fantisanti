import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import axios from 'axios';
import Footer from "../footer/Footer";

    const apiKey = 'qkcRDItD4_tnoTNMw_RfPCDSROr083OAYDn8HH4S';

const handleAddFavorite = (eventObj) => {

    // Check if the event is already in the favorites list
    const index = favorites.findIndex((fav) => fav.id === eventObj.id);
    if (index >= 0) {
        // If the item already exists, don't add it again
        return;
    }

    // Add the favorite item to the favorites list
    favorites.push(eventObj);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const SearchBar = () => {

    const [countryId, setCountryId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [events, setEvents] = useState([]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.predicthq.com/v1/places/?q=${searchTerm}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            console.log('Id', response.data.results[0]);
            setCountryId(response.data.results[0].id);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.get(
                    `https://api.predicthq.com/v1/events/?limit=200&sort=start&place.scope=${countryId}&active.gte=2023-07-14&active.lte=2024-12-31&category=festivals`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${apiKey}`,
                        },
                    }
                );
                console.log('event', response.data);
                setEvents(response.data.results);
            } catch (e) {
                console.error(e);
            }
        };

        getEvents();
    }, [countryId]);

    return (
        <header>
            <form id="searchbar" className="outer-searchbar-container" onSubmit={handleSubmit}>
                <div className="inner-searchbar-container">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Where are you going?"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search__button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </form>

            {events
                .filter((event) => {
                    const title = event.title.toLowerCase();
                    const formattedAddress = event.entities[0]?.formatted_address?.toLowerCase() ?? '';
                    return title.includes(searchTerm.toLowerCase()) || formattedAddress.includes(searchTerm.toLowerCase());
                })
                .map((event) => (
                    <section id="search-events" className="outer-events-container" key={event.id}>
                        <div className="inner-events-container">
                            <h2>{event.title}</h2>
                            <p>{event.start.split('T')[0]} − {event.end.split('T')[0]}</p>

                            <p>{event.entities[0] ? event.entities[0].formatted_address : ''}</p>
                            <p>{event.entities[0] ? event.entities[0].description : ''}</p>
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
                                <button onClick={() => handleAddFavorite(event)}>Add to Favorites</button>
                            </div>
                        </div>
                    </section>
                ))}
        </header>
    );
};

export default SearchBar;
export {handleAddFavorite};