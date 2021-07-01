import { useState } from 'react';
// import axios from 'axios';


const NewCardForm = (props) => {

    const [message, setMessage] = useState('');

    const onMessageEntry = (event) => {
        setMessage(event.target.value)
    };

    const submitCard = (event) => {
        event.preventDefault();

        props.createNewCard(message)

        setMessage('');
    };
    

//why doesnt this form render on the UI?
    return(
        <form onSubmit={submitCard}>
            <label htmlFor='message-input'>Message</label>
            <input 
                name='message'
                value={message}
                onChange={onMessageEntry} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default NewCardForm;
