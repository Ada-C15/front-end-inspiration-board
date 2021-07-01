import { useState } from 'react';
import axios from 'axios';


const NewCardForm = (props) => {

    const [message, setMessage] = useState('');

    const onMessageEntry = (event) => {
        setMessage({
            ...message,
            message: event.target.value
        })
    };

    const submitCard = (event) => {
        event.preventDefault();


        props.createNewCard({
            message: message.message
        })


        setMessage({
            message: ''
        })
    };
    

//why doesnt this form render on the UI?
    return(
        <form onSubmit={submitCard}>
            <div>
                <label htmlFor='message'>Message</label>
                <input 
                    name='message'
                    value={message.message}
                    onChange={onMessageEntry} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default NewCardForm;
