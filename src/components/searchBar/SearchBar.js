import React from 'react';
import "./SearchBar.css"
import {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

const data = require("./data.json");

export default function SearchBar(){
    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch= (searchTerm) => {
        //API fetch data here integration later.
        setValue(searchTerm);
        console.log("search", searchTerm)
};
    return (
        <section id="searchbar" className="outer-searchbar-container">
                <div className="inner-searchbar-container">
                    <input type="text" placeholder=" Where are you going? enter your city" value={value} onChange={onChange} />
                        <button onClick={() =>onSearch(value)}> Search </button>
                </div>
                <div className="dropdown">

                   {data.filter(item => {
                       const searchTerm = value.toLowerCase();
                       const city = item.City.toLowerCase();

                       return searchTerm &&  city.includes(searchTerm) &&
                           city !== searchTerm;
                        })
                       .slice(0,8)
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
};
