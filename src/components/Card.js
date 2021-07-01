import '../App.css';
import App from '../App.js';
import CardList from './CardList.js';
import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


const Card = (props) => {
  console.log('Card:', props)

  const handleLikeClick = () => {
    props.likeCallback(props.id)
  }

  const handleDeleteClick = () => {
    props.deleteCallback(props.id)
  }

  return (
    <div>
        <span>{props.message}</span>
        <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
        {/* <span className="likeCount">{props.likeCount}</span> */}
        <button className='likeButton' onClick={handleLikeClick}>Like</button>
    </div>
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Card;