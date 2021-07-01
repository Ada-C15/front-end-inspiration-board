import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

    const onLikeClick = () => {
        props.onLikeClickCallback(props.id);
    }

    const onDeleteClick = () => {
        props.onDeleteClickCallback(props.id);
    }

    return (
    <div className='card'>
        <p>{props.message}</p>
        <span>{props.likes} </span>
        <button onClick={ onLikeClick }>❤️</button>
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