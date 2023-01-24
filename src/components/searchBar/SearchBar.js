import React from 'react';
import "./SearchBar.css"
const SearchBar = () => {
    return (
        <div>
            <div className="search-bar">
            <p>Type een stad in:</p>
             <label search-bar="search-bar">
             <input className="search-bar" name="name" placeholder="Where are you going?" />
            </label>
        </div>
            </div>

    );
};

export default SearchBar;