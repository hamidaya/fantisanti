import React from 'react';
import "./SearchBar.css"
const SearchBar = () => {

    return (

           <div className="search-bar">
            <label htmlFor="search-bar">
             <input className="search-bar" placeholder="Where are you going?" />
            </label>
             <button type="submit">Search</button>
              <p/>
           </div>

)
};
export default SearchBar;