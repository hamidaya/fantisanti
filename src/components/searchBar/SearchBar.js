
import React from 'react';
import "./SearchBar.css"
import {useState} from "react";
import {findAllByDisplayValue, logDOM} from "@testing-library/react";
import axios from "axios";


const apiKey = 'FME7MZEqvSTSTA3NrqgUg4V_X9zV2b4JPPIEb2a5';

// const data = require("./data.json");

export default function SearchBar(){
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch= async (searchTerm) => {
        //API fetch data integration.

        const URI = `https://api.predicthq.com/v1/events?category=festivals&country=${value}&phq_attendance.gt=1000`

        const ENDPOINT = "events"

        try {
            // haal data op die met een API.
            const responds = await axios.get(URI, {
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

        return (

<>
            <section id="searchbar" className="outer-searchbar-container">
                <div className="inner-searchbar-container">
                    <input type="text" placeholder="  Where are you going? enter your city" value={value}
                           onChange={onChange}/>
                    <button onClick={() => onSearch(value)}> Search</button>
                    <li>{value}</li>

                </div>
                <div className="dropdown">

                </div>
            </section>
</>
        )
    };