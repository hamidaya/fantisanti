import React from 'react';
import axios from "axios";

const EventsList = () => {
    async function fetchEventData("") {
        try {
            // haal events op die met een APo.
            const result = await axios.get(`apinaam hier vullen`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },
            });

            return (

    );
};

export default EventsList;