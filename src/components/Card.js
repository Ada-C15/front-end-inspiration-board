import React from 'react';
import { useState } from 'react';

const Card = (props) => {

    const [newMessage, setNewMessage] = useState({'message': props.message});

    const [showEditBox, setShowEditBox] = useState(false)

    const editButtonClick = () => {
        setShowEditBox(!showEditBox);
    }

    const upvoteClick = () => {
        const selectedCardId = props.id
        props.upvoteCard(selectedCardId);

    };

    const deleteCardClick = () => {
        const selectedCardId = props.id
        props.deleteCard(selectedCardId)
    };

    const onMessageChange = (message) => {
        setNewMessage({
            ...newMessage,
            'message': message.target.value
        })
    }

    const onSubmitMessage = () => {
        props.editCard(props.id, newMessage);
        setShowEditBox(!showEditBox)
    };

    return (
    <section>
        <ul>
            <>
                {showEditBox ? (
                <>
                    <textarea defaultValue={props.message} onChange={ onMessageChange }></textarea>
                    <button onClick={() => onSubmitMessage(newMessage)}>Save</button>
                </>
                ) : <li>Message: { props.message }</li>}
                </>
            <button type='button' onClick={upvoteClick}> Upvote: {props.likesCount}</button>
            <button type='button' onClick={deleteCardClick}>Delete</button>
            <button type='button' onClick={editButtonClick}>Edit</button>
        </ul>
    </section>
    )
}
export default Card;

