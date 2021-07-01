import React, { useState } from "react";
import axios from "axios";


const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });
  // const [title, setTitle] = useState('');
  // const [owner, setOwner] = useState('');
  // const newBoard = () => {
  //   // alert(title);
  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, {"title":title,"owner":owner})
  //     .then((response) => {
  //       console.log(
  //         "The data we get back from the HTTP response:",
  //         response.data
  //       );
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "Anything that isn't status code 2XX is an error:",
  //         error.response.status
  //       );
  //       console.log(
  //         "The data from response with an error:",
  //         error.response.data
  //       );
  //     });
  // };
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitCallback({
      title: formFields.title,
      owner: formFields.owner
    });
    setFormFields({
      title: '',
      owner: ''
    });
  };

  const onTitleChange = (event) => {
    setFormFields({
        ...formFields,
        title: event.target.value
    })
};

const onOwnerChange = (event) => {
    setFormFields({
        ...formFields,
        owner: event.target.value
    })
};

  return (
    <form onSubmit={onFormSubmit}>
      <label>Board Title: </label>
      <input
        name="title"
        id="title"
        value={formFields.title}
        onChange={onTitleChange}
      />
      <label>Board Owner: </label>
      <input
        name="owner"
        id="owner"
        value={formFields.owner}
        onChange={onOwnerChange}
      />
      <button type='submit'>SUBMIT</button>
    </form>
  );
};

export default NewBoardForm;