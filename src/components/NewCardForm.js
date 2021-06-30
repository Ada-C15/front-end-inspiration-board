import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = (props) => {
    const [cardForm, setCardForm] = useState({
        message: ''
    });
    
    const onMessageChange = (event) => {
        setCardForm({
            ...cardForm,
            message: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback({
            message: cardForm.message
        })

        setCardForm({
            message:''
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Message</label> 
                <input
                    value={cardForm.message}
                    onChange={ onMessageChange }
                />
            </div>
            <input 
                type="submit"
                value="Submit The Message"
            />
        </form>
    );
};

export default NewCardForm;

