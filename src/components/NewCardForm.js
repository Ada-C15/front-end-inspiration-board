import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

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

        props.createNewCard({
            message: cardForm.message
        })

        setCardForm({
            message:''
        })
    }

    return (
        <form className='flex-container' onSubmit={onFormSubmit}>
            <div>
                <label>Message</label> 
                <input
                    value={cardForm.message}
                    onChange={ onMessageChange }
                    className={(cardForm.message.length === 0) || (cardForm.message.length > 40)? 'invalid-form-input' : ''}
                />
            </div>

            <input className='submitTheMessage'
                type="submit"
                value="Submit The Message"
                disabled={((cardForm.message.length === 0) || (cardForm.message.length >40))}
            />
        </form>
    );
};

export default NewCardForm;


NewCardForm.propTypes = {
    createNewCard: PropTypes.func.isRequired
}

