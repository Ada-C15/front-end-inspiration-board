import Card from "./Card"
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

    console.log("Cards Data: ",cardsData);

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

    const postNewCard = (message) => {
        axios.post(`https://board-inspo-app.herokuapp.com/cards`,message)
        .then((response) => {
            console.log("My new card created: 🌻",response)
        // const cards = [...cardsData];
        // cards.push(response.data.card);
        // setCardsData(cards);
        }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new card.');
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