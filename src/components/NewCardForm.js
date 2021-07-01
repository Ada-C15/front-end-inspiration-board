import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newCardForm.css';

const NewCardForm = (props) => {

    const [card, setCard] = useState({
        message: "",
        // likes_count: ""
    })


    const onMessageChange = (event) => {
        setCard({
            ...card,
            message: event.target.value
        })
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback({
            messageData: card.message
        });

        setCard({
            message: "",
            // likes_count: ""
        })
    };

    return (
        <section class= "new_card-form__container">
            <form class= "new-card-form__form" 
                onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        name="message"
                        value={card.message}
                        onChange={onMessageChange} />
                </div>Preview: {card.message}<div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </section>
    )
}

export default NewCardForm;