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

    // return jsx w/ label & input

    return (
        <form>
        <div>
            <label>Title</label>
            <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div>
            <label>Owner's Name</label>
            <input type="text" value={owner} onChange={onOwnerChange} />
        </div>
        </form>
    );
};

export default NewBoardForm;