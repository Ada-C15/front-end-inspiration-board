import { useState } from 'react';

const NewCardForm = () => {

    const [formFields, setFormFields] = useState({
        message: ''
    });

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="message">message:</label>
                <input name="message"
                    value={formFields.message}
                    onChange={onMessageChange} />
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