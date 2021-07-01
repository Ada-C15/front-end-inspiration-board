import React, { useState } from "react";


const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });
  
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