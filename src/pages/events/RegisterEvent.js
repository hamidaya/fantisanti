import React from 'react';
import "./RegisterEvent.css"
import {useForm} from "react-hook-form";

const RegisterEvent = () => {

    const {register} = useForm()

    return (
        <>
            <Section>
                <h2>
                    op mijn pagina kan je eigen event verwijderen of aanpassen.
                </h2>
                <form>
                <label htmlFor="first-name">
                    Naam:
                    <input
                        type="txt"
                        id="first-name"
                        {...register("firstname")}
                    />
                </label>
                <label htmlFor="last-name">
                    Lastname:
                    <input
                        type="txt"
                        id="last-name"
                        {...register("lastname")}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                    />
                </label>

                <label htmlFor="details-postcode">
                    Postcode:
                    <input
                        type="number"
                        name="postcode"
                        id="details-postcode"
                    />

                </label>

                <label htmlFor="bezorg-tijden">Bezorgfrequentie</label>
                <select name="bezorg-tijden" id="bezorg-tijden">
                    <option value="iedere-week">iedere week</option>
                    <option value="om-de-week">om de week</option>
                    <option value="iedere-maand">iedere maand</option>
                </select>

                <fieldset>
                    <legend>Opties</legend>
                    <div>
                        <input type="checkbox" id="overdag" name="overdag"/>
                        <label htmlFor="overdag">Overdag</label>
                    </div>
                    <div>
                        <input type="checkbox" id="s avonds" name="savonds"/>
                        <label htmlFor="'s avonds">'s avonds</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Opmerkingen</legend>

                    <label htmlFor="comments">

                    <textarea
                        id="comments"
                        rows="4"
                        cols="40"
                        placeholder="vul hier je opmerkingen"
                        {...register("comments")}
                    >
          </textarea>
                    </label>
                    <label htmlFor="voorwaarden">
                        <input
                            type="checkbox"
                            name="voorwaarden"
                            // checked={voorwaarden}
                            // onChange={() => setFormNewsletter(!formNewsletter)}
                        />
                        Ik ga akkoord met de voorwaarden.
                    </label>

                </fieldset>

                <Button type="submit"/>Verzend<Button/>
            </form>

            </Section>


        </>
    );
};

export default RegisterEvent;