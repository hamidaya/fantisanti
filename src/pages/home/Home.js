import React from 'react';
import './Home.css';
function Home({styleState}) {
    return (
        <main className={styleState}>
            <section id="home" className="outer-home-welcome-container">
              <div className="inner-home-welcome-container">
                  <h2>ONE palace for all parties & festivals over the world</h2>
                </div>
              </section>
            </main>
    );
}
export default Home;