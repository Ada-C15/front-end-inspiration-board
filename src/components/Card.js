import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
        <section>
            <ul>
                <li> Sticky Note: { props.id }</li>
                <li>Board ID: { props.boardId }</li>
                <li>Message: { props.message }</li>
                <button type='button' onClick={upvoteClick}> Upvote: {props.likesCount}</button>
                <button type='button' onClick={deleteCardClick}>Delete</button>
            </ul>
        </section>
        <section></section>
    </div>
    )
}
export default Card;


Card.propTypes = {
id: PropTypes.number.isRequired,
message: PropTypes.string.isRequired,
likesCount: PropTypes.number.isRequired,
boardId: PropTypes.number.isRequired,
upvoteCard: PropTypes.func.isRequired,
deleteCard: PropTypes.func.isRequired

}

