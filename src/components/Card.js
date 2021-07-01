import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';


const Card = (props) => {
  console.log('Card:', props)



  // const handleDeleteClick = () => {
  //   props.deleteCallback(props.id)
  // }


  const handleLikeClick = () => {
    props.likeCallback(props.id)
  }

  return (
    <div>
        <span>{props.message}</span>
        {/* <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
        <div>
          <span className="likeCount">{props.like_count}</span>
          <button className='likeButton' onClick={handleLikeClick}>Like</button>
        </div>
    </div>
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Card;