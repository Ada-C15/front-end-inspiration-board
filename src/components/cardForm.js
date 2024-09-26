import { useState } from 'react';
import './cardForm.css';

const CardForm = ({ createNewCard }) => {
    const [message, setMessage] = useState('');
    const [stickyNoteColor, setStickyNoteColor] = useState('yellow');

    const handleMessageChange = (e) => { setMessage(e.target.value) };
    const handleCardColorChange = (e) => {setStickyNoteColor(e.target.value);}

    const submitNewCard = (e) => {
        e.preventDefault();
        createNewCard(message, stickyNoteColor);
        setMessage('');
    };

    

    return (
        <div>
            <h2>Create a New Card</h2>
            <form onSubmit={submitNewCard} className='new-card-form'>
                <label className="form-title">Message</label>
                <textarea
                    value={message}
                    onChange={handleMessageChange} 
                    placeholder='Add a message'
                    className="message-box"
                />
                <p>Preview: {message} </p>
                <p className="form-title">Select a sticky note color:</p>
                <select onChange={handleCardColorChange}>
                    <option value="yellow">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <input type="Submit" className='submit-btn'/>
            </form>
        </div>
    )
}

export default CardForm;