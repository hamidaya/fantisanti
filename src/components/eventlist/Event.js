import "./Event.css"

//Maak een functie event aan die we over hele project kunnen hergebruiken met een filter
//uit een object in de array. Split vervolgens de slash / bij de timezone.
// Split de UTC datum en geeft alleende eerst deel van de datum terug.
const event = ({ event }) => {
    return (
        <section id="popular-events" className="outer-popular-events-container">
            <div className="inner-popular-events-container">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.timezone.split('/')[1]}</p>
                <p>Date:{event.start.split('T')[0]}</p>
            </div>
        </section>
    )
}
export default event;