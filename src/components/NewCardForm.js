import { useState } from 'react';
import './newCardForm.css';

const NewCardForm = (props) => {

    const [message, setMessage] = useState('');

    const messageChange = (event) => { 
        setMessage(event.target.value) 
    };

    const submitNewCard = (event) => {
        event.preventDefault();
        console.log("This is the message that will be send from NewCardForm: ",message)
        props.postNewCard(message);
        setMessage('');
    };

    return (
        <div className="bottom-right">
            <section className="new_card-form__container">
                <h2>Create a New Card</h2>
                <form onSubmit={submitNewCard} 
                    className="new-card-form">
                    <div>
                        <label htmlFor="message">Message    </label>
                        <input size="30" type="text" onChange={messageChange} value={message}></input>
                    </div>
                    <p> <div>Preview: {message}</div></p>
                        <div>
                        <p> <input 
                            type="Submit" 
                            disabled={message.length === 0 || message.length > 40} 
                            className="new-card-submit-btn"></input></p>
                        </div>
                </form>
            </section>
        </div>
    );
};

export default NewCardForm;
