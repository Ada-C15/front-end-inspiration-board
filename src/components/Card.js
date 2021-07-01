import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    // this will go in App.js, card_id will be provided by lifting up state
    const increaseLikeCount = (card_id) => {
        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}/like`,
        {
            params: {
                format: 'json'
            }
        })
        .then( (response) => {
            // somehow get the card to re-render, so it reflects the updated like count
            console.log(response.data);
        })
        .catch( (error) => {
            console.log(error.response);
            alert("Could not like card")
        });
    }

    return (<div>
        <p>{props.message}</p>
        <span>{props.likes}</span>
        <button onClick={ () => increaseLikeCount(props.id) }>Like</button>
    </div>);

};

Card.propTypes = {
    id: PropTypes.number,
    message: PropTypes.string,
    likes: PropTypes.number
};

export default Card;