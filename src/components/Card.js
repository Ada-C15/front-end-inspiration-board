import React from 'react';

const Card = (props) => {
    console.log(props)



    const upvoteClick = () => {
        const selectedCardId = props.id
        console.log(selectedCardId)
    props.upvoteCard(selectedCardId);

    };



    return (
    <section>
        <ul>
            <li> Sticky Note: { props.id }</li>
            <li>Board ID: { props.boardId }</li>
            <li>Message: { props.message }</li>
            <button type='button' onClick={upvoteClick}> Upvote: {props.likesCount}</button>
        </ul>
    </section>
    )
}
export default Card;