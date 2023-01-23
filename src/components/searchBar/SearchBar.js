import React from 'react';
import "./SearchBar.css"
const SearchBar = () => {
    return (
        <div>
            <div className="search-bar">
            <p>Type een stad in:</p>
            <input className="search-bar" type="text"/>
        </div>
            </div>
    );
};

export default SearchBar;