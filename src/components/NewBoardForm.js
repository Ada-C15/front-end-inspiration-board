import React, { useState } from "react";
import axios from "axios";


const NewBoardForm = (props) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  const newBoard = () => {
    // alert(title);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {"title":title,"owner":owner})
      
      .then((response) => {
        console.log(
          "The data we get back from the HTTP response:",
          response.data
        );
      })
      .catch((error) => {
        console.log(
          "Anything that isn't status code 2XX is an error:",
          error.response.status
        );
        console.log(
          "The data from response with an error:",
          error.response.data
        );
      });
  };

  return (
    <form>
      <label>Board Title: </label>
      <input
        name="title"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Board Owner: </label>
      <input
        name="owner"
        id="owner"
        value={owner}
        onChange={(event) => setOwner(event.target.value)}
      />
      <button onClick={newBoard}>SUBMIT</button>
    </form>
  );
};

export default NewBoardForm;
