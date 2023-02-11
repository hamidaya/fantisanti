import React from 'react';
import './Home.css';
import SearchBar from "../../components/searchBar/SearchBar";

function Home({styleState}) {
    return (
        <main className={styleState}>
            <SearchBar/>
               <div className="home-welcome-container">
                <p className="home-welcome-text">
                    ONE place for all Parties & Festivals
                    all over the world.
                </p>
            </div>
            <p className="home-container-sub">
            </p>

            </main>
    );
}
export default Home;