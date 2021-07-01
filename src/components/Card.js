import React from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';


const Card = (props) => {
  console.log('Card:', props)

<<<<<<< HEAD
  const handleLikeClick = () => {
    props.likeCallback(props.id)
  }
=======

>>>>>>> 4b0427fcaebb9ac97ade65adf0919df92c7851c5

  const handleDeleteClick = () => {
    props.deleteCallback(props.id)
  }


  const handleLikeClick = () => {
    props.likeCallback(props.id)
  }

  return (
    <div>
        <span>{props.message}</span>
<<<<<<< HEAD
        <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
        <span className="likeCount">{props.like_Count}</span>
        <button className='likeButton' onClick={handleLikeClick}>Like</button>
    </div> 
=======
        {/* <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
        <div>
          <span className="likeCount">{props.like_count}</span>
          <button className='likeButton' onClick={handleLikeClick}>Like</button>
        </div>
    </div>
>>>>>>> 4b0427fcaebb9ac97ade65adf0919df92c7851c5
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Card;