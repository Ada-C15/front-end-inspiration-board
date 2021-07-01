import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = (props) => {

    const [formFields, setFormFields] = useState({
        title: "",
        owner: "",
        // cards: []
    })


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

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.addBoardCallback({
            title: formFields.title,
            owner: formFields.owner,
            // cards:[]
        });

        setFormFields({
            title: "",
            owner: "",
            // cards: []
        })
    };



    return (
        <section class= "new_board-form__container">
            <form class= "new-board-form__form" 
                onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Title </label>
                    <input
                        type="text"
                        name="title"
                        value={formFields.title}
                        onChange={onTitleChange} />
                </div>
                <div>
                    <label htmlFor="owner">Owner's Name </label>
                    <input
                        type="text"
                        name="owner"
                        value={formFields.owner}
                        onChange={onOwnerChange} />
                </div>
                <div>
                    <p> Preview: {formFields.title} </p>
                    <input 
                        className= "smallButton"
                        type="submit" 
                        value="submit"/>
                </div>
            </form>
        </section>


    )
}

NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;