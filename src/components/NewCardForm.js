import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: ''
    });

    const onNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value
        })
    };

    const onEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    name="fullName"
                    value={formFields.name}
                    onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email"
                    value={formFields.email}
                    onChange={onEmailChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;