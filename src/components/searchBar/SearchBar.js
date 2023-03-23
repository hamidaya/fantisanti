import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import "./SearchBar.css"
import {api, getEvents} from "../../api/axios";
import axios from "axios";
import {unmountComponentAtNode} from "react-dom";
import React, {useEffect, useState} from "react";

const apiKey = 'iN0CXdYCb_xPw1woOtk7CSUI2l8cKjF5X_zYmOoO';
const SearchBar = ({events, setSearchResults}) => {
    const [countryId, setCountryId] = useState("")
    const [event, setEvent] = useState("")
    const [date, setDate] = useState("")
    const [adress, setAdress] = useState("")
    const [location, setLocation] = useState("")
    const [state, setState] = useState("")
    const [test, setTest] = useState([])
    // const handleSubmit = (e) => e.preventDefault()
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
                const response = await axios.get(`https://api.predicthq.com/v1/events/?place.scope=${countryId}&active.gte=2023-03-22&active.lte=2026-12-31&category=festivals&sort=rank`, {
                    headers: {
                        "Content-Type": "application/json", Authorization: `Bearer ${apiKey}`,

                    },
                })
                console.log("event", response.data)
                setTest(response.data.results)
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
                        placeholder="Where are you going? "
                        id="search"
                        value={state}
                        onChange={(e) => setState(e.target.value)}

                    />
                    <button className="search__button">
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>

                    {test &&
                        test.map((hoi) => {
                            console.log('test', test)
                            return (
                                <>
                                    <section id="search-events" className="outer-events-container">
                                        <div className="inner-events-container">
                                            <h2>{hoi.title}</h2>
                                            <p>{hoi.start.split("T")[0]}</p> - <p>{hoi.end.split("T")[0]}</p>
                                            <p>{hoi.entities[0] ? hoi.entities[0].formatted_address : ""}</p>
                                            {/*    <>*/}
                                            {/*<p>{hoi.entities[0].formatted_address}</p>*/}
                                            {/*<p>{hoi.entities[0].name}</p>*/}
                                            {/*    </>*/}
                                            {/*}*/}
                                        </div>
                                    </section>
                                        </>
                                        )
                                        })}




            {/*<section id="search-events" className="outer-searchbar-container-container">*/}
            {/*    <div className="inner-search-events-container">*/}
            {/*        <h1>{event}</h1>*/}
            {/*        <p>{date}</p>*/}
            {/*        <p>{adress}</p>*/}
            {/*        <p>{location}</p>*/}
            {/*    </div>*/}
            {/*</section>*/}


        </div>
</form>
</header>

)
}
    export default SearchBar