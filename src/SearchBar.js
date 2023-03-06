import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import "./SearchBar.css"
const SearchBar = ({ events, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(events)

        const resultsArray = events.filter(event => event.title.includes(e.target.value) || event.description.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form id="searchbar" className="outer-searchbar-container" onSubmit={handleSubmit}>
                <div className="inner-searchbar-container">
                <input
                    className="search__input"
                    type="text"
                    placeholder="Where are you going? "
                    id="search"
                    onChange={handleSearchChange}
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