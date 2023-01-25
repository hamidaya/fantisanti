import React from 'react';
import './Home.css';
import SearchBar from "../../components/searchBar/SearchBar";

function Home({styleState}) {
    return (
        <main className={styleState}>
            <div className="home-welcome-container">
                <p className="home-welcome-text">
                    Ieder jaar worden er door de stad
                    evenementen georganiseerd die ons allen weer even een geheel maken.
                    Events die verspreid door de stad,
                    in de gezamenlijkheid worden georganiseerd.
                </p>
            </div>
            <p className="home-container-sub">
                ONE place for all Parties & Festivals
                all over the world.
            </p>
            <SearchBar/>
        </main>
    );
}

export default Home;