import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = (props) => {
    //creating state variable for new car
    const [newCardMessage, setNewCardMessage] = useState({''});
    // updating newMessage state
    const changeNewMessage = (event) => {
        setNewCardMessage(event.target.value)
    };

    const submitNewMessage = (event) => {
        event.preventDefault();
        //add addCardCallback in main app
        props.addCardCallback({newMessage});

        setNewMessage('');
    };

    return (
        <section>
            <h2>Post a New Card</h2>
            <form onSubmit={submitNewMessage}>
                <label>Message:</label>
                <input
                    value={newCardMessage}
                    onChange={changeNewMessage}/>
                <p> Preview: {newCardMessage}</p>
            </form>
        </section>
    );
};

export default NewCardForm;