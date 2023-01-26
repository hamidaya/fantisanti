import React, { useEffect, useState } from 'react';
import "./EventCreate.css"

function EventCreate() {
        const [initialValues, setInitialValues] = useState({
            companyname: "",
            email: "",
            phone: "",
            website: ""
        });
        const [formValues, setFormValues] = useState([]);

        const submitForm = () => {
            setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
        };

        useEffect(() => {
            localStorage.setItem("formValues", JSON.stringify(formValues));
        }, [formValues]);
        return (
            <div className="App">
                <div>
                    companyname
                    <input
                        value={initialValues.companyname}
                        onChange={(e) =>
                            setInitialValues({ ...initialValues, companyname: e.target.value })
                        }
                    />
                </div>
                <div>
                    website
                    <input
                        value={initialValues.website}
                        onChange={(e) =>
                            setInitialValues({ ...initialValues, website: e.target.value })
                        }
                    />
                </div>
                <button onClick={submitForm}>onSubmit </button>
            </div>

//
// <>
//             <h1>register your event:</h1>
//     <p>Welcome to the registration for an Party or festival.</p>
//                 <form className="event-content_form">
//                     <label htmlFor="name-event-field">
//                        name of your party or festival
//                         <input type="text" id="name-event-field" name="name" placeholder="name of your event"/>
//                    </label>
//                     <label htmlFor="email-field">
//                         emailadress organisation:
//                         <input type="email" id="email-field" name="email" placeholder="Email"/>
//                     </label>
//                         <label htmlFor="Event date">
//                          when is your event?
//                         <input type="date" id="date-field" name="name" placeholder="start event"/>
//                      </label>
//                    <button
//                         type="submit"
//                         className="form-button"
//                          > Register
//                    </button>
//                 </form>
//  </>
    );
    }

export default EventCreate;