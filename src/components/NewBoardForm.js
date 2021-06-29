import { useState } from 'react';

/*NewBoardForm

Props:
createNewBoard

State:
title
owner */

const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');
    const [ownerName, setOwnerName] = useState('');

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onOwnerNameChange = (event) => {
        setOwnerName(event.target.value);
    }

    const onBoardSubmit = (event) => {
        event.preventDefault();

        //Work on callback function
        props.createNewBoard({
            title: title, 
            ownerName: ownerName
        })

        //Reset fields
        setTitle('');
        setOwnerName('');
    }

    return (
        <form onSubmit={onBoardSubmit}>
            <label htmlFor="title-input">Title</label>
            <input
                name="title"
                value={title}
                onChange={onTitleChange}/>
            <label htmlFor="owner-input">Owner's Name</label>
            <input 
                name="owner-name"
                value={ownerName}
                onChange={onOwnerNameChange}/>
            <input type="submit" value="Submit"/>
        </form>
    )

}

export default NewBoardForm;
