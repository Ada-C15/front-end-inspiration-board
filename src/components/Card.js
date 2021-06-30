import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css'

const Card = ({message, likeCount, likeIncreaseCallback, id}) => {

    const onLikeClick = ()  =>{
        likeIncreaseCallback(id);
    }

    // const{likesCount} = props;

    // const likeIncrease = () => {
    //     setLikeCount(likeCount + 1);
    // };

    return (
        <div className="card_div">
            <p>{message}</p>
            <div>{likeCount}</div>
            <div className='btn_div'>
                <button onClick={onLikeClick}>UP ❤️</button>
                <button className="delete-btn">DELETE</button>
                {/* Make a delete function */}
            </div>
        </div>
    );
};

export default Card;



