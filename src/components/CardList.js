import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js'
import PropTypes from 'prop-types';

const generateCardComponents = (cards) => {
    const cardList = [];
    for (let card of cards) {
        cardList.push(<Card id={card.card_id} message={card.message} likes={card.likes_count} />);
    }
    return cardList;
}

const CardList = (props) => {

    const cardList = generateCardComponents(props.cards);

    return (
        <div>
            { cardList }
        </div>
    );

};

CardList.propTypes = {
    cards: PropTypes.array
}

export default CardList;
