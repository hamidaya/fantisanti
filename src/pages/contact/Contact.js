import React, {useState} from 'react';
import "./Contact.css"
function Contact (styleState) {

    // Contact person:
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [remark, setRemark] = useState('');

            return (

        <main className={styleState}>
            <section id="contact" className="contact">
            <form>
                <p>Contact form</p>
                <label htmlFor="firstname-field">Firstname</label>
                <input
                    name="firstname"
                    id="firstname-field"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <label htmlFor="lastname-field">Lastname</label>
                <input
                    name="lastname"
                    id="lastname-field"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <label htmlFor="email-field">Email</label>
                <input
                    name="email"
                    id="email-field"
                    type="email"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <label htmlFor="phone-field">Firstname</label>
                <input
                    name="phone"
                    id="phone-field"
                    type="Number"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <label htmlFor="remark-field">Event description</label>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={10}
                    cols={20}
                    placeholder={"enter your message here"}
                />
            </form>
                <button onClick={handleSubmit}>Send</button>
            </section>


</main>
    );
}

export default Contact;
