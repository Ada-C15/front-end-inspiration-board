import { useState } from 'react';

const NewBoardForm = () => {

    const [formFields, setFormFields] = useState({
        title: '',
        name: ''
    });

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="name">Owner:</label>
                <input name="name"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <p>Preview: {formFields.title} - {formFields.name}</p>
            </div>
            <input
                type="submit"
                value="Add Board" />
        </form>
    );
};

export default NewBoardForm;

// lskdfjd