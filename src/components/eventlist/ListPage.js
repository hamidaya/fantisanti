import Event from "./Event";

//maak een functie ListPage aan die we kunnen hergebruiken in de zoekopdracht.
const ListPage = ({ searchResults }) => {

    //gebruik de map methode door te filteren uit de Array op Event.id.
    const results = searchResults.map(event => <Event key={event.id} event={event} />)

    const content = results?.length ? results : <article><p>No Matching Events found</p></article>

    return (
        <main>{content}</main>
    )
}
export default ListPage