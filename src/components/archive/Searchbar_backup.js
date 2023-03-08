import React, {useEffect} from 'react';
import "./SearchBar.css"
import {useState} from "react";
import axios from "axios";

const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';

export default function SearchBar_bak(){
    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch= (searchTerm) => {

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
                        //API fetch data here integration later.
                        console.log(responds.data);
                        setValue(responds.data.results)

                        console.log(responds.data.events)

                    } catch (e) {
                        console.error(e);
                    }
                }
                  fetchEvents()
                  console.log(fetchEvents())



                  console.log(responds.data);
                  setValue(responds.data)
                  console.log(responds.data.results)
                   setValue(value)
        console.log("search", searchTerm)
              });

    return (
        <section id="searchbar" className="outer-searchbar-container">
            <div className="inner-searchbar-container">
                <input type="text" placeholder="  Where are you going? enter your city" value={value} onChange={onChange} />
                <button onClick={() =>onSearch(value)}> Search </button>
            </div>
            <div className="dropdown">

                {data.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const city = item.City.toLowerCase();

                    return searchTerm &&  city.includes(searchTerm) &&
                        city !== searchTerm;
                })
                    .slice(0,10)
                    .map((item) => (
                        <div onClick={() => onSearch(item.City)}
                             className="dropdown-row"
                             key={item.City}
                        >

                            {item.City}</div>
                    ))}
            </div>
        </section>

    )
}};