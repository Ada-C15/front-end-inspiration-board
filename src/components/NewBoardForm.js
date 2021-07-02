import {useEffect, useState} from 'react';
import React from 'react';
import './NewBoardForm.css';
import PropTypes from 'prop-types';

//keeps track of its own state

const NewBoardForm = (props) => {
    const [title, setTitle] = useState('')
    const [owner, setOwner] = useState('')
    

    
    //need to add event.target.title
    const handleTitleChange = (title) => { 
        setTitle(title.target.value)
    };
    const handleOwnerChange = (owner) => { 
        setOwner(owner.target.value)
    };
    

return (
        <div className='new-board-form_container'>
        <h2> Create A New Board </h2>
        <form className='new-board-form' onSubmit={(event) => props.createNewBoard(event,{title,owner})}>
            <label> Title </label>
            <input type='text' value={title} onChange={handleTitleChange}/>
            <label> Owner's Name </label>
            <input type='text' value={owner} onChange={handleOwnerChange}/>
            <div className='submit-new-board-form'>
                <input type='submit' value='Submit'/>
            </div>
        </form>
        </div>
)
};

export default NewBoardForm;