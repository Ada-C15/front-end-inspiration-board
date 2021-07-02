import PropTypes from 'prop-types';
import  React, { useState } from 'react';
import './NewCardsForm.css'


const NewCardForm = (props) => {
    const [message, setMessage] = useState('');

    const onInputChange = (event) => {
        console.log(event);
        console.log(event.target.name);
        setMessage(event.target.value);
    }

    const onSubmit = (event) => {
      // Prevent the browser submitting form
      // and reloading the page
        event.preventDefault();
      // POST 'localhost:3000'
        if (message !== '') {
            props.onSubmitCallback(message);
        }
    }

    return (
    <form onSubmit={onSubmit} >
        <label>Message</label>
        <input name="message-input" id="message-input" value={message} onChange={onInputChange} />
        {/*<button>Submit</button>*/}
        <input className= "submitButton" type="submit" />
    </form>
    )
}


export default NewCardForm;
