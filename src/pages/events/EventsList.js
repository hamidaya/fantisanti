import React from 'react';
import axios from "axios";

        const list = document.getElementById('list-of-code-countries')

        async function fetchEvents() {
        const URI = 'https://www.thesportsdb.com/api/v1/json/3/'
        const ENDPOINT = 'all_leagues.php'

        try {
            // haal competities op die met een API.
            const responds = await axios.get(URI + ENDPOINT);
            console.log(responds.data);

            responds.data.map((all_league)=> {
            const item = document.createElement("li")
                item.setAttribute(" class", "idLeague")
                item.textContent = all_league.idLeague;
                list.appendChild(item);
                console.log(item);
            })
            console.log(responds.data)
            history.push('signin');
        } catch (e) {
            console.error(e);
   }
}
fetchEvents()


