import React from 'react';
import './Home.css';
import SearchBar from "../../components/searchBar/SearchBar";

function Home({styleState}) {
    return (
        <main className={styleState}>
            <section id="home" className="outer-home-welcome-container">
              <div className="inner-home-welcome-container">
                <p className="home-welcome-text">
                    ONE place for all Parties & Festivals
                    all over the world.
                </p>
                </div>
            <SearchBar/>
              </section>
            </main>
    );
}
export default Home;