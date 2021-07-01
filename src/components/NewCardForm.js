import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

//need to connect NewCardForm to Selected Board & BoardsList
const NewCardForm = (props) => {
  const [message, setTitle] = useState("");

  const newCard = () => {
    // alert(title);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board_id}/cards`,
        { "message": message }
      )
      
      .then((response) => {
        console.log("...", response.data)
      })
      .catch((error) => {
        console.log("...", error.response.status);
      });
  };

  return (
    <form>

      <input
        name="message"
        id="message"
        value={message}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button onClick={newCard}>SUBMIT</button>

    </form>
  );
};

NewCardForm.propTypes = {
  board_id: PropTypes.number,
};

export default NewCardForm;
