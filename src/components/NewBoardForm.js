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
                <label htmlFor="title">Board Title:</label>
                <input
                    name="title"
                    value={formFields.title}
                    onChange={onTitleChange} />
            </div>
            <div className ='new_board_owner'>
                <label htmlFor="owner">Owner:</label>
                <input name="owner"
                    value={formFields.owner}
                    onChange={onOwnerChange} />
            </div>
            <input className='add_board_btn'
                type="submit"
                value="Add Board"
                // required 
                // minLength="1" 
                // maxLength="40"
                disabled={((formFields.title.length === 0) || (formFields.owner.length === 0) || (formFields.title.length > 40) || (formFields.owner.length > 40))}
            />
            {/* <button onClick={onButtonClick}>Add a board</button> */}
        </form>
    );
};

export default NewBoardForm;
