import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.js'
import PropTypes from 'prop-types';

const CardList = (props) => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.boardId}/cards`,
            {
            params: {
            format: 'json'
            }
            })
        .then( (response) => {
            setCards(response.data);
            console.log(cards);
            console.log('success in finding card list')
        })
        .catch( (error) => {
            console.log('error in getting card list');
            console.log(error.response)
        });
    }, [cards]);

    const listCards = (cards) => {
        const cardList = [];
        for (let card of cards) {
            cardList.push(<Card id={card.card_id} message={card.message} likes={card.likes_count} />);
        }
        return cardList;
    }

    return (
        <div>
            { listCards(cards) }
        </div>
    )

};

CardList.propTypes = {
    boardId: PropTypes.number
}

export default CardList;
