import './NewBoardForm.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = (props) => {
    
    //  create state to handle 'title' and 'owner name' changes
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    // function to handle new title input
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    };

    //  function to handle new owner input
    const onOwnerChange = (event) => {
        setOwner(event.target.value)
    };

    // function to submit board
    const submitBoard = (event) => {
    
    };

    // return jsx w/ label & input

    return (
        //  form needs a submit button....
        <form>
        <div>
            <label htmlFor="title-input">Title</label>
            <input name="title" value={title} onChange={onTitleChange} />
        </div>
        <div>
            <label htmlFor="owner-input">Owner's Name</label>
            <input name="owner" value={owner} onChange={onOwnerChange} />
        </div>
        </form>
    );
};

export default NewBoardForm;