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

        // props.addBoardCallback(formFields.title, formFields.owner);

        props.addCardCallback({
            message: formFields.message
        });

        setFormFields({
            message: '',
        });
    }
    return (
        <form onSubmit={onFormSubmit} className="new-card-form__container">
            
            <label htmlFor="owner">Enter Your Message</label>
            <input type="text" className="invalid-form-input" value={formFields.message} onChange={onMessageChange} />
            <input type="Submit" className="new-board-form__form-submit-btn" />
        </form>
    )

};

export default NewCardForm;
