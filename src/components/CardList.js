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

    // const deleteCardItem = (card) => {
    //     axios.delete(`https://board-inspo-app.herokuapp.com/cards/${card.card_id}`).then((response) => {
    //     const newCardsData = cardsData.filter((existingCard) => {
    //         return existingCard.card_id !== card.card_id;
    //     });
    //     setCardsData(newCardsData);
    //     }).catch((error) => {
    //     console.log('Error:', error);
    //     alert('Couldn\'t delete the card.');
    //     });
    // };

    // const plusOneCardItem = (card) => {
    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`).then((response) => {
    //     const newCardsData = cardsData.map((existingCard) => {
    //     return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
    //     });
    //     setCardsData(newCardsData);
    //     }).catch((error) => {
    //     console.log('Error:', error);
    //     alert('Couldn\'t +1 the card.');
    //     });
    // };

    const cardElements = cardsData.map((card) => {
        return (<Card
            card={card}
            // plusOneCardItem={plusOneCardItem}
            ></Card>)
    });
    

    const postNewCard = (text) => {
        const message = {"message":text}
        console.log("This is the message that will be send from CardList: ",message)
        axios.post(`https://board-inspo-app.herokuapp.com/cards`,message)
        .then((response) => {
            console.log("ID new card created: 🌻",response.data.id)
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

    return (<section className='cards__container'>
                <section>
                    <h2>Cards for {props.board.title}</h2>
                    <div className='card-items__container'>
                    {cardElements}
                    </div>
                </section>
                <section className= "newCardForm">
                    <NewCardForm postNewCard={postNewCard}></NewCardForm>
                </section>
            </section>)

};

export default CardList;