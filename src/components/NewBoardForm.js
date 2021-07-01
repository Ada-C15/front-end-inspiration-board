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
    };

    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    };

    const onSubmit= (event) => {
        event.preventDefault();
        props.createNewBoard(formFields);
      };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="owner">Owner:</label>
                <input name="owner"
                    value={formFields.owner}
                    onChange={onOwnerChange} />
            </div>
            <div>
                <p>Preview: {formFields.title} - {formFields.name}</p>
            </div>
            <input
                type="submit"
                value="Add Board" />
            {/* <button onClick={onButtonClick}>Add a board</button> */}
        </form>
    );
};

export default NewBoardForm;
