import Card from "./Card"
import './CardsList.css';
import NewCardForm from "./NewCardForm";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CardList = (props) => {

    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get(`https://board-inspo-app.herokuapp.com/boards/${props.board.id}/cards`).then((response)=> {
        setCardsData(response.data.cards);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get cards for this board.');
        });
    }, [props.board]);

    console.log("Cards Data in UseEffect: ",cardsData);

    const deleteCard = (card) => {
        axios.delete(`https://board-inspo-app.herokuapp.com/cards/${card.card_id}`).then((response) => {
        const newCardsData = cardsData.filter((existingCard) => {
            return existingCard.card_id !== card.card_id;
        });
        console.log("New Cards Data: ", newCardsData)
        setCardsData(newCardsData);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t delete the card.');
        });
    };

    const plusOneCard = (card) => {
        console.log("This is the card to plus one: ",card)
        const request_body = {"likes_count":card.likes_count};
        axios.put(`https://board-inspo-app.herokuapp.com/cards/${card.card_id}/likes`,request_body)
        .then((response) => {
        const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: response.data.likes}
        });
        setCardsData(newCardsData);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t +1 the card.');
        });
    };

    const cardElements = cardsData.map((card) => {
        return (<Card
            card={card}
            deleteCard={deleteCard}
            plusOneCard={plusOneCard}
            ></Card>)
    });
    

    const postNewCard = (text) => {
        const message = {"message":text}
        axios.post(`https://board-inspo-app.herokuapp.com/cards`,message)
        .then((response) => {
            const new_card_id = response.data.id
            const bodyToLinkToBoard = {"card_ids": [new_card_id]}
            axios.post(`https://board-inspo-app.herokuapp.com/boards/${props.board.id}/cards`, bodyToLinkToBoard)
            .then((response) => {
                axios.get(`https://board-inspo-app.herokuapp.com/boards/${props.board.id}/cards`).then((response)=> {
                    setCardsData(response.data.cards);
                }).catch((error) => {
                console.log('Error:', error);
                alert('Couldn\'t get cards for this board.');
                });
            })
            .catch((error) => {console.log(error.response.data)})
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t create a new board.');
        });
    };

    return (<section className="cards_container">
                <section className="cards-left">
                    <h2>Cards for {props.board.title}</h2>
                    <div className="card-items-container">
                    <p>{cardElements}</p>
                    </div>
                </section>
                <section className="cards-right">
                    <NewCardForm postNewCard={postNewCard}></NewCardForm>
                </section>
            </section>)

};

export default CardList;