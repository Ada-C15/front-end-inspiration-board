import React from 'react';

const Card = (props) => {


    const upvoteClick = () => {
        const selectedCardId = props.id
        console.log(selectedCardId)
        props.upvoteCard(selectedCardId);

    };

    const deleteCardClick = () => {
        const selectedCardId = props.id
        props.deleteCard(selectedCardId)
    };

    return (
    <section>
        <ul>
            <li> Sticky Note: { props.id }</li>
            <li>Board ID: { props.boardId }</li>
            <li>Message: { props.message }</li>
            <button type='button' onClick={upvoteClick}> Upvote: {props.likesCount}</button>
            <button type='button' onClick={deleteCardClick}>Delete</button>
        </ul>
    </section>
    )
}
export default Card;