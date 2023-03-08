import Event from "./Event";

const ListPage = ({ searchResults }) => {

    const results = searchResults.map(event => <Event key={event.id} event={event} />)

    const content = results?.length ? results : <article><p>No Matching Events found</p></article>

    return (
        <main>{content}</main>
    )
}
export default ListPage