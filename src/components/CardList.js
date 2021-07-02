
import PropTypes from 'prop-types';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CardList = (props) => {

    // state to set cards
    const [cards, setCards] = useState([])

    // get request - get cards from back end & set the data in setCards state
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
            .then((response) => {
                console.log(response.data)
                setCards(response.data)
            })
    }, [props.board.id])

    const addNewCard = (message) => {
        console.log('message', message)
        const newCard = {
            message: message,
            board_id: props.board.id
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`, newCard)
            .then((response) => {
                console.log(response);
                const newCard = [...cards]
                newCard.push(response.data)
                setCards(newCard)
        })
            .catch((error) => {
                console.log("error!")
            });
    };
    
      // create function for card likes
    const cardLikes = (cardId) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`, )
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => {
        console.log("error!")
        });
    };
    
      // create function to delete cards
    const cardDelete = (cardId) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`, )
        .then((response) => {
            const deleteCard = cards.filter((existingCard) => {
                return existingCard.cardId !== cards.cardId;
            });
            setCards(deleteCard);
        })
        .catch((error) => {
        console.log("error!")
        });
    };

    // map out values for each individual card
    const cardsDisplayed = cards.map((card) => {
        return (<Card 
            key={card.id} 
            id={card.id} 
            message={card.message} 
            likesCount={card.likes_count}
            likeCallBack={cardLikes}
            deleteCallBack={cardDelete}
            />
        )
    });

    return (
        <section>
            <h2>Cards for {props.board.title}</h2>
            {cardsDisplayed}
            <NewCardForm addCardCallback={addNewCard}></NewCardForm>
        </section>
    );
};

export default CardList;