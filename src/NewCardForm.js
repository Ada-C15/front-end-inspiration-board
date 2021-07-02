import {useEffect, useState} from 'react';
import React from 'react';
import './NewCardForm.css';
import PropTypes from 'prop-types';

//keeps track of its own state

const NewCardForm = (props) => {
    const [message, setMessage] = useState('')
    // const [owner, setOwner] = useState('')
    

    
    //need to add event.target.title
    const handleMessageChange = (message) => { 
        setMessage(message.target.value)
    };
    // const handleOwnerChange = (owner) => { 
    //     setOwner(owner.target.value)
    // };
    

return (
        <div className='new-card-form_container'>
        <h2> Create A Message </h2>
        <form className='new-card-form' onSubmit={(event) => props.createNewCard(event,{message})}>
            <label> Message </label>
            <input type='text' value={message} onChange={handleMessageChange}/>
            <div className='submit-new-card-form'>
                <input type='submit' value='Submit'/>
            </div>
        </form>
        </div>
)
};

export default NewCardForm;

// <label> Owner's Name </label>
// <input type='text' value={owner} onChange={handleOwnerChange}/> 