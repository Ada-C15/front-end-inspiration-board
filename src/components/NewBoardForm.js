import React from 'react';
import { useState } from 'react';
import './NewBoardForm.css'
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
            <div className='fieldItself'>
                <label>Title</label> 
                <input
                    value={boardForm.title}
                    onChange={ onTitleChange }
                    className={(boardForm.title.length === 0)? 'invalid-form-input' : ''}
                />
            </div>
            <div className='fieldItselfs'>
                <label>Owner</label> 
                <input
                    value={boardForm.owner}
                    onChange={ onOwnerChange }
                    className={(boardForm.owner.length === 0)? 'invalid-form-input' : ''}
                />
            </div>
            <input className='fieldPrompt'
                type="submit"
                value="Submit The Board"
                disabled={((boardForm.title.length === 0) || (boardForm.owner.length === 0))}
            />
        </form>
    );
};

export default NewBoardForm;

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
}