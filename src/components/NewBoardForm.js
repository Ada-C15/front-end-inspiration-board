import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
    const [boardForm, setBoardForm] = useState({
        title: '',
        owner: ''  
    });
    
    const onTitleChange = (event) => {
        setBoardForm({
            ...boardForm,
            title: event.target.value
        })
    }

    const onOwnerChange = (event) => {
        setBoardForm({
            ...boardForm,
            owner: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createNewBoard({
            title: boardForm.title,
            owner: boardForm.owner
        })

        setBoardForm({
            title: '',
            owner: '' 
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Title</label> 
                <input
                    value={boardForm.title}
                    onChange={ onTitleChange }
                />
            </div>
            <div>
                <label>Owner</label> 
                <input
                    value={boardForm.owner}
                    onChange={ onOwnerChange }
                />
            </div>
            <input 
                type="submit"
                value="Submit The Board"
            />
        </form>
    );
};

export default NewBoardForm;

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
}