import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import "./SearchBar.css"
import {api, getEvents} from "../../api/axios";
import axios from "axios";
import {unmountComponentAtNode} from "react-dom";
import React, {useEffect, useState} from "react";

const apiKey = '4H5wT0s-2MfmRIH3Umki9KbT7hj4BBg0a-IXpkOL';

const SearchBar = () => {

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const [countryId, setCountryId] = useState("")
    const [event, setEvent] = useState("")
    const [date, setDate] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")
    const [state, setState] = useState("")
    const [fetch, setFetch] = useState([])

    const handleAddFavorite = (eventObj) => {
        // Check if the event is already in the favorites list
        const index = favorites.findIndex((fav) => fav.id === eventObj.id);
        if (index >= 0) {
            // If the item already exists, don't add it again
            return;
        }

        // Add the favorite item to the favorites list
        favorites.push(eventObj);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };



    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const response = await axios.get(`https://api.predicthq.com/v1/places/?q=${state}`, {
                headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${apiKey}`,

                },
            })
            console.log("Id", response.data.results[0])
            setCountryId(response.data.results[0].id)

        } catch (e) {
            console.error(e)
        }

    }
    useEffect(() => {

        const getEvents = async () => {

            try {
                const response = await axios.get(`https://api.predicthq.com/v1/events/?limit=550&sort=start&place.scope=${countryId}&N&category=festivals`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,

                    },
                })
                console.log("event", response.data)
                setFetch(response.data.results)
                setEvent(response.data.results[0].title)
                setDate(response.data.results[0].start.split("T")[0])
                setAdress(response.data.results[0].entities[0])
                setLocation(response.data.results[0].entities[0].name)
            } catch (e) {
                console.error(e)
            }

        }


        getEvents()


    }, [countryId])

    return (

        <header>
            <form id="searchbar" className="outer-searchbar-container" onSubmit={handleSubmit}>
                <div className="inner-searchbar-container">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Where are you going? enter city or country name "
                        id="search"
                        value={state}
                        onChange={(e) => setState(e.target.value)}

                    />
                    <button className="search__button">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>

                    {fetch && fetch
                        .filter((event) => {

                            const searchTerm = event.title.toLowerCase();
                            const formattedAddress = event.entities[0]?.formatted_address?.toLowerCase() ?? "";
                            return searchTerm.includes(state.toLowerCase()) || formattedAddress.includes(state.toLowerCase());
                        })
                        .map((event) => {

                            return (
                                <>
                                    <section id="search-events" className="outer-events-container">
                                        <div className="inner-events-container">
                                            <h2>{event.title}</h2>
                                            <p>{event.start.split("T")[0]}</p> - <p>{event.end.split("T")[0]}</p>
                                            <p>{event.entities[0] ? event.entities[0].formatted_address : ""}</p>
                                            <p>{event.entities[0] ? event.entities[0].description : ""}</p>
                                            <div className="button-container">
                                                <button className="left-btn"
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const description = event.entities[0] ? event.entities[0].description : "";
                                                            if (description) {
                                                                // Open a new window with the description text
                                                                window.open("", "event-description-window", "width=500,height=400");
                                                                const descriptionWindow = window.open("", "event-description-window");
                                                                descriptionWindow.document.write(description);
                                                                descriptionWindow.focus();
                                                            }
                                                        }}
                                                >More info</button>


                                                    <div className="event-description" style={{display: 'none'}}>
                                                        {/* The description will be inserted here dynamically */}
                                                    </div>
                                                    <button className="right-btn"
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                window.location.href='http://example.nl/tickets';
                                                            }}
                                                    > Tickets</button>



                                                    <button onClick={() => handleAddFavorite(myEvent)}>Add to Favorites</button>

                                                </div>
                                            </div>
                                        </section>

                                    </>
                                            )
                                            })}

        </div>
</form>
</header>

)
}
    export default SearchBar