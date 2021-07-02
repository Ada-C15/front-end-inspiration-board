import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import NewCardForm from '../NewCardForm';

// Card component is responsible for maintaining and rendering its own state

const Card = (props) => {
    const [likes, setLikes] = useState(0)
    // const onLikeSubmitClickHandler = (props.id) => {

    // }

    return (
        <section class="like-button-form_container">
            <button type='button'> Like </button>
        </section>

    )
};
export default Card; 

// onSubmit={onLikeSubmitClickHandler}