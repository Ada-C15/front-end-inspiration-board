
import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    const onLikeClick = () => {
        props.onLikeClickCallback(props.id);
    }

    const onDeleteClick = () => {
        props.onDeleteClickCallback(props.id);
    }

    return (<div>
        <p>{props.message}</p>
        <span>{props.likes}</span>
        <button onClick={ onLikeClick }>Like</button>
        <button onClick={ onDeleteClick }>Delete</button>
    </div>);

};

Card.propTypes = {
    id: PropTypes.number,
    message: PropTypes.string,
    likes: PropTypes.number,
    onLikeClickCallback: PropTypes.func,
    onDeleteClickCallback: PropTypes.func
};

export default Card;