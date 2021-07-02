import React from 'react';
// import PropTypes from 'prop-types';


const Card = (props) => {
  console.log('Card:', props)


  return (
    <div>
        <span>{props.message}</span>

        <span className="likeCount">{props.like_count}</span>
        <button className='likeButton' onClick={() => props.likeCallback(props.id)}>Like</button>
        <button className="deleteButton" onClick={() => props.deleteCallback(props)}>Delete</button>


    </div>
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Card;