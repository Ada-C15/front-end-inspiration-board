import React from 'react';
import './Card.css'

const Card = ({message, likeIncreaseCallback, id, deleteCard, likeCount}) => {

    const onLikeClick = ()  =>{
        likeIncreaseCallback(id);
    }

    const deleteClick = ()  =>{
        deleteCard(id);
    }

    return (
        <div className="card_div">
            <p>{message}</p>
            <div>{likeCount}</div>
            <div className='btn_div'>
                <button onClick={onLikeClick}>UP ❤️</button>
                <button onClick={deleteClick}>DELETE</button>
            </div>
        </div>
    );
};

export default Card;



