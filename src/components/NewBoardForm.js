import { useState } from 'react';
const NewBoardForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: ''
                
    });

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
    })
    }

    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
    })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addBoardCallback({
            title: formFields.title,
            owner: formFields.owner
        });
    
        setFormFields({
            title: '',
            owner: '',
        });
    }
    return (
        <form onSubmit={onFormSubmit} className="new-board-form__form">
            <label>Title </label>
            <input type="text" class="invalid-form-input" value={formFields.title} onChange={onTitleChange}/>
            <label>Owner's Name </label>
            <input type="text" className="invalid-form-input" value={formFields.owner} onChange={onOwnerChange} />
            <p>Preview: </p>
            <input type="Submit" className="new-board-form__form-submit-btn" />
        </form>
    )

};

export default NewBoardForm;


