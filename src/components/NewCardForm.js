import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitCallback({
      message: formFields.message
    });
    setFormFields({
      message: ''
    });
  };

  const onMessageChange = (event) => {
    setFormFields({
        ...formFields,
        message: event.target.value
    })
  };
  return (
    <form onSubmit={onFormSubmit}>

      <input
        name="message"
        id="message"
        value={formFields.message}
        onChange={onMessageChange}
        required
      />

      <button type='submit'>SUBMIT</button>

    </form>
  );
};

NewCardForm.propTypes = {
  board_id: PropTypes.number,
};

export default NewCardForm;
