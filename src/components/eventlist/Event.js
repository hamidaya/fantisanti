import "./Event.css"
const event = ({ event }) => {
    return (
        <section id="search-events" className="outer-search-events-container">
            <div className="inner-search-events-container">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.timezone.split('/')[1]}</p>
                <p>Date:{event.start.split('T')[0]}</p>
            </div>
        </section>
    )
}
export default event;