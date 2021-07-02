import React from 'react';
import './Card.css'
// import PropTypes from 'prop-types';


const Card = (props) => {
  console.log('Card:', props)


  return (
    <div className='card_container'>
        <div className='card_message'>
            <span>{props.message}</span>
        </div>
        <div className='card_like'>
            <span className="likeCount">{props.like_count}🔥</span>
            <button className='likeButton' onClick={() => props.likeCallback(props.id)}>Like</button>
            <button className="deleteButton" onClick={() => props.deleteCallback(props)}>Delete</button>
        </div>
    </div>
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Card;