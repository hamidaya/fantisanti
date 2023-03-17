import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./SearchBar.css"
import {api} from "../../api/axios";
import axios from "axios";
import {unmountComponentAtNode} from "react-dom";
import {useEffect, useState} from "react";
const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';
const SearchBar = ({ events, setSearchResults }) => {
    const [countryId, setCountryId] = useState("")
    const [state, setState] = useState("")
    // const handleSubmit = (e) => e.preventDefault()
      const handleSubmit = async (e) => {

        e.preventDefault()
          try {
          const response = await axios.get(`https://api.predicthq.com/v1/places/?q=${state}`, {
            headers: {
                "Content-Type": "application/json", Authorization: `Bearer ${apiKey}`,

            },
        })
        console.log("Id", response.data.results[0])
          setCountryId(response.data.results[0].id)}
          catch (e) {
              console.error(e)
          }

          }
    useEffect(() => {

        const getEvents = async () => {

                        try {
                const response = await axios.get(`https://api.predicthq.com/v1/events/?place.scope=${countryId}&active.gte=2023-03-01&active.lte=2023-03-31&category=festivals&sort=rank`, {
                    headers: {
                        "Content-Type": "application/json", Authorization: `Bearer ${apiKey}`,

                    },
                })
                console.log("event", response.data)}
            catch (e) {
                console.error(e)
            }

        }
        getEvents()



    },[countryId] )

    //    const handleSearchChange = (e) => {
    //     if (!e.target.value) return setSearchResults(events)
    //
    //     const resultsArray = events.filter(event => event.title.includes(e.target.value) || event.description.includes(e.target.value))
    //
    //     setSearchResults(resultsArray)
    // }

    return (
        <header>
            <form id="searchbar" className="outer-searchbar-container" onSubmit={handleSubmit}>
                <div className="inner-searchbar-container">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Where are you going? "
                    id="search"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                    </div>
            </form>
        </header>
    )
}
export default SearchBar