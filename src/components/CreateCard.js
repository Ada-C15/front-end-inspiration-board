import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const BASE_URL = "https://sand-inspiration-board.herokuapp.com";

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


  return (
    <section>
      <form onSubmit={onFormSubmit} className="flex-col align-base">
        <h2>Create a new card</h2>

          <label htmlFor="message" className="bold-type">Message: </label>

          <input 
          type="text" 
          name="message" 
          value={formFields.message} 
          onChange={onMessageChange}/>

        <input type="submit" value="Create New Card" disabled={formFields?.message.length > 40 || formFields.message.length === 0}/>

      </form>
    </section>
  )
};

CreateCard.propTypes = {
  selectedBoard: PropTypes.func.isRequired,
  onUpdateCardDisplay: PropTypes.func.isRequired
};

export default CreateCard;