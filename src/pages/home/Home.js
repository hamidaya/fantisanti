import React from 'react';
import './Home.css';
function Home({styleState}) {
    return (
            <main className={styleState}>
            <section id="home" className="outer-home-welcome-container">
              <div className="inner-home-welcome-container">
                  <h2>ONE place for all parties & festivals</h2>
                  <h1>Where is my next party? </h1>
                   </div>
              </section>
            </main>


    );
}
export default Home;