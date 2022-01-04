import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './NewBoardForm.css'

// next step is the board list 
// props are 
// next step is the board list
// props are
const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');
    const [submitButtonDisableState, setSubmitButtonDisableState] = useState(true);
    const [inputCssClass, setInputCssClass] = useState("empty-inputs");

    const BASE_URL = "https://localhost:5000/board";
// onTitleChange takes in one argument, event, which we expect to be information about the event that triggers our event handler.
    const onTitleChange = (event) => {
        setTitle(event.target.value);
        //updateSubmitButtonState(owner, title);
    }
    const onOwnerChange = (event) => {
        setOwner(event.target.value);
        //updateSubmitButtonState(owner, title);
    }
    // Handling Form Submissions - event handler
    const onFormSubmit = (event) => {
      // Prevent the browser submitting form and reloading the page
        event.preventDefault();
        // POST 'localhost:3000'
        if (title !== '' && owner !== '') {
            props.onSubmitCallback(title, owner);}

        setOwner('');
        setTitle('');
    }

    useEffect(() => {

        updateSubmitButtonState(owner, title);

        if (owner.length > 0 && title.length > 0){
            setInputCssClass("filled-inputs");
        }
        else{
            setInputCssClass("empty-inputs");
        }

    }, [owner, title]);

    const updateSubmitButtonState = (owner, title) => {
        if (owner.length === 0 || title.length === 0){
            setSubmitButtonDisableState(true);
        }
        else{
            setSubmitButtonDisableState(false);
        }
    };

    return (
    <form class="new-board-form__form" onSubmit={onFormSubmit} >
        <label>Title</label>
        <input class={inputCssClass} type="text" class="invalid-form-input" name="title-input" id="title-input" value={title} onChange={onTitleChange} />
        <label>Owner's Name </label>
        <input class={inputCssClass} name="owner-input" id="owner-input" value={owner} onChange={onOwnerChange} />
        {/*<button>Submit</button>*/}
        {/*<input type="submit" />*/}
        <button disabled={submitButtonDisableState} className= "submitButton" onClick={onFormSubmit}>Create New Board</button>
        
    </form>
    
    )
};
export default NewBoardForm;
// After hitting Submit, the board list gets updated 
// board form - takes in form data and sends it back to app 
// app will re render and display the newly added board 