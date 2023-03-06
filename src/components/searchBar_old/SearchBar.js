import React from 'react';
import "./SearchBar.css"
import {useState} from "react";
import axios from "axios";


const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';


export default function SearchBar(){
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch= async (searchTerm) => {
        //API fetch data integration.

        const URI = `https://api.predicthq.com/v1/events/?category=festivals&country=${value}&phq_attendance.gt=1000`
                     // https://api.predicthq.com/v1/events/?category=festivals&country=NL%2CDE&limit=10&offset=10&phq_attendance.gt=2000

        // const ENDPOINT = "events"

        try {
            // Fetch data op die met een API.
            const responds = await axios.get(URI, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            })

            console.log(responds.data);
            setValue(responds.data)
            console.log(responds.data.results)

            console.log(responds)
        } catch (e) {
            console.error(e);

        }
    }

        return (

            <section id="searchbar" className="outer-searchbar-container">
                <div className="inner-searchbar-container">
                    <input type="text" placeholder="Where are you going? enter your city" value={value}
                           onChange={onChange}/>
                    <button onClick={() => onSearch(value)}> Search</button>
                    <li>{value}</li>
                </div>
                <div className="dropdown">
                </div>
            </section>
        )
    };