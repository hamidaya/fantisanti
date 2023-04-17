import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Profile.css';

function Profile() {
    const [favorites, setFavorites] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const events = JSON.parse(localStorage.getItem('registeredEvents')) || [];
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        setFavorites(favorites);
        setRegisteredEvents(events);
    }, []);

    const addFavorite = (favoriteItem) => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        const existingFavoriteIndex = favorites.findIndex(
            (item) => item.id === favoriteItem.id
        );
        if (existingFavoriteIndex >= 0) {
            return;
        }

        favorites.push(favoriteItem);

        localStorage.setItem('favorites', JSON.stringify(favorites));
        setFavorites(favorites);
    };

    return (
        <>
            <h1>My Profile page</h1>
            <section id="profile" className="outer-profile-container">
                <div className="inner-profile-container">
                    <h2>My account information</h2>
                    <p>
                        <strong>Username:</strong> {user.username}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            </section>

            {favorites.length > 0 && (
                <section id="my-profile" className="outer-profile-container">
                    <div className="inner-profile-container">
                        <h2>My favorite Events</h2>
                        <ul>
                            {favorites.map((favorite) => (
                                <li key={favorite.id}>
                                    {favorite.title} | {favorite.start.split('T')[0]} -{' '}
                                    {favorite.end.split('T')[0]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <section className="outer-profile-container">
                <div className="inner-profile-container">
                    <h2>My registered Events</h2>
                    {registeredEvents.length > 0 ? (
                        <table>
                            <thead>
                            <tr>
                                <span><th>My Events</th></span>
                                <th>Delete Event</th>
                            </tr>
                            </thead>
                            <tbody>
                            {registeredEvents.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.eventname}</td>
                                    <td>{event.start}</td>
                                    <td>{event.end}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                const events = [...registeredEvents];
                                                events.splice(index, 1);
                                                localStorage.setItem(
                                                    'registeredEvents',
                                                    JSON.stringify(events)
                                                );
                                                setRegisteredEvents(events);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>You have not registered for any events yet.</p>
                    )}
                </div>
                <h2>
                    Terug naar de <Link to="/">Homepagina</Link>
                </h2>
            </section>


        </>
    );
}

export default Profile;
