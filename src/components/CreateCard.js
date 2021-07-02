import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

const CreateCard = (props) => {

  const [formFields, setFormFields] = useState({
    message: ''
  });

  const onMessageChange = (event) => {
    setFormFields({
      message: event.target.value
    })
    console.log(`${formFields.message} Message on CreateCard LINE 18`);

  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('I am in onCardSubmit', event);
    console.log(formFields);
    const requestBody = {
      message: formFields.message
    }
    axios.post(`${BASE_URL}/boards/${props.selectedBoard?.board_id}/cards`, requestBody)
      .then((response) => {
      props.onUpdateCardDisplay()
      })
    setFormFields({
      // resets the form
      message: ''
    });
  };

  console.log(`${props.selectedBoard?.board_id} is the board id in CreateCard`);

  console.log(`${formFields.message} is the message on CreateCard`);



  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <h2>Create a new card</h2>

        <div>
          <label htmlFor="message">Message: </label>

          <input 
          type="text" 
          name="message" 
          value={formFields.message} 
          onChange={onMessageChange}/>

        </div>
        {/* Button gets disabled, how to update button value when disabled? */}
        <input type="submit" value="Create New Card" disabled={formFields?.message.length > 40 ? "invalid-input" : ""}/>
        {/* <input type="submit" value=(!disabled ? "Create New Card": "Input too long") disabled={formFields?.message.length > 10 ? "invalid-input" : ""}/> */}




      </form>
    </section>
  )
};

CreateCard.propTypes = {
  onUpdateCardList: PropTypes.func.isRequired
};

export default CreateCard;