import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import EventsList from "../../components/eventlist/EventsList";
function Profile() {

    const { user } = useContext(AuthContext);

    const addFavorite = (favoriteItem) => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        // Check if the favorite item already exists in the favorites list
        const existingFavoriteIndex = favorites.findIndex(
            (item) => item.id === favoriteItem.id
        );
        if (existingFavoriteIndex >= 0) {
            // If the item already exists, don't add it again
            return;
        }

        // Add the favorite item to the favorites list
        favorites.push(favoriteItem);

        // Store the updated favorites list in localStorage
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    return (


        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p>
                    <strong>Gebruikersnaam:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
            </section>

            {/* Render the user's favorites */}
            {favorites.length > 0 && (
                <section>
                     <ul>
                        {favorites.map((favorite) => (
                        <li key={favorite.id}>{favorite.title} | {favorite.start.split("T")[0]} - {favorite.end.split("T")[0]}</li>

                            ))}
                    </ul>
                </section>
            )}

            {/* Render the events list and pass the addFavorite function as a prop */}
            <EventsList addFavorite={addFavorite} />

            <p>
                Terug naar de <Link to="/">Homepagina</Link>
            </p>
        </>
    );
}

export default Profile;



//
// <p>{favorite.start.split("T")[0]}</p> - <p>{myEvent.end.split("T")[0]}</p>
// <p>{favorite.entities[0] ? favorite.entities[0].formatted_address : ""}</p>
// <p>{favorite.entities[0] ? favorite.entities[0].description : ""}</p>