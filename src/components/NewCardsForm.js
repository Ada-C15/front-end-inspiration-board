import PropTypes from 'prop-types';
import  React, { useState, useEffect } from 'react';
import './NewCardsForm.css'


const NewCardForm = (props) => {
    const [message, setMessage] = useState('');
    const [submitButtonDisableState, setSubmitButtonDisableState] = useState(false);
    const [messageCssClass, setMessageCssClass] = useState("empty-message");

    const onInputChange = (event) => {
        setMessage(event.target.value);
    }

    useEffect(() => {

        updateSubmitButtonState(message);

        if (message.length > 0){
            setMessageCssClass("filled-message");
        }
        else{
            setMessageCssClass("empty-message");
        }

    }, [message]);

    const updateSubmitButtonState = (message) => {
        if (message.length > 40 || message.length === 0){
            setSubmitButtonDisableState(true);
        }
        else{
            setSubmitButtonDisableState(false);
        }
    };


    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
      // POST 'localhost:3000'
        if (message !== '') {
            props.onSubmitCallback(message);
        }

        setMessage('');
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Message</label>
        <input class={messageCssClass} name="message-input" id="message-input" value={message} onChange={onInputChange} />
        {/*<button>Submit</button>*/}
        <input type="submit" className= "submitButton" disabled={submitButtonDisableState}/>
        
    </form>
    )
}


export default NewCardForm;
