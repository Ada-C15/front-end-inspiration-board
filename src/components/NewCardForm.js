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
    };

    const onSubmit= (event) => {
        event.preventDefault();
        props.createNewCard(formFields);
      };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="message">message:</label>
                <input name="message"
                    value={formFields.message}
                    onChange={onMessageChange}
                />
            </div>
            <div>
                <p>Preview: {formFields.message}</p>
            </div>
            <input
                type="submit"
                value="Add Card" />
        </form>
    );
};

export default NewCardForm;