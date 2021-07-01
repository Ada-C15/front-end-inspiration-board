import { useState } from 'react';

const NewCardForm = (props) => {
    const [formFields, setFormFields] = useState({
        message: ''

    });

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
    })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addCardCallback({
            message: formFields.message
        });

        setFormFields({
            message: '',
        });
    }
    return (
        <section className="new-card-form__container">
            <h2>Create a New Card</h2>
            <form onSubmit={onFormSubmit} className="new-card-form__form">

                <label htmlFor="owner">Enter Your Message</label>
                <input type="text" className="invalid-form-input" value={formFields.message} onChange={onMessageChange} />
                <input type="Submit" className="new-board-form__form-submit-btn" />
            </form>
        </section>
    )

};

export default NewCardForm;
