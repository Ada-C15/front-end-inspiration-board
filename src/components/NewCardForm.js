import './NewCardForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewCardForm = (props) => {
    //  create state to handle changes to card form
    const [formFields, setFormFields] = useState('');

    // function to handle new message on card
    const onMessageChange = (event) => {
        setFormFields(event.target.value)
    };

    // callback function to submit message
    const submitNewCard = (event) => {
        event.preventDefault();
        props.addCardCallback(formFields);
        setFormFields('');
    }

    return (
        <section className="new-card-form_container">
            <form onSubmit={submitNewCard} className="new-card-form_form">
                <div>
                    <label htmlFor="message">Message</label>
                    <input name="message" value={formFields} onChange={onMessageChange} />
                </div>
                <div>
                    <input type="submit" value="Add New Card" className="new-card-form_submit" />
                </div>
            </form>
        </section>
    );
}

export default NewCardForm;