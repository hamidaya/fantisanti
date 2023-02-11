import React, {useEffect, useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";


const EventsList = () => {

    const [leagues, setLeagues] = useState([])

    useEffect(() => {
        async function fetchEvents()
            {
        const URI = 'https://www.thesportsdb.com/api/v1/json/3/'
        const ENDPOINT = 'all_leagues.php'

        try {
            // haal competities op die met een API.
            const responds = await axios.get(URI + ENDPOINT);
            console.log(responds.data);
            setLeagues(responds.data.leagues)
            console.log(responds.data.leagues)
        } catch (e) {
            console.error(e);

        }

    }

        fetchEvents()
        console.log(fetchEvents())
    },[])

    return (
        <div>
            <ul>
                {leagues &&
                    leagues.map((test) => {
                        return <li>{test.strLeague}</li>
                    })}
            </ul>
        </div>
    );
};

export default EventsList;