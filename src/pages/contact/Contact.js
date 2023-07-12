import React, {useState} from 'react';
import "./Contact.css"
function Contact (styleState) {

    // Contact person:
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [remark, setRemark] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    function handleSubmit() {

    }

    return (

        <main className={styleState}>
            <form id="registerForm" className="RegisterForm" onSubmit={handleSubmit}>
            <section id="contact" className="contact">

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="phone-field">Phone number</label>
                <input
                    name="phone"
                    id="phone-field"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={"example: +3168348334"}
                />
                <label htmlFor="remark-field">Your message</label>
                <textarea
                    name="remark"
                    id="remark-field"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={10}
                    cols={20}
                    placeholder={"enter your message here"}
                />

            <button onClick={handleSubmit}>Contact</button>

            </section>
            </form>
                </main>
    );
}

export default Contact;
