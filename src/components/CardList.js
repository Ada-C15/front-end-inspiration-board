import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'


const CardList = (props) => {
    const cardsList = props.cardsData.map((card) => {
        return (
        <Card 
        key={card.card_id} 
        id={card.card_id} 
        message={card.value} 
        likes_count={card.likes_count}/>)
    });

    return (
        <ul>
            {cardsList}
        </ul>)



    
    
}
export default CardList;



// const cardElements = props.cardsData.map((card) => {
//     return (<Card
//         card={card}
//         plusOneCardItem={plusOneCardItem}
//         deleteCardItem={deleteCardItem}></Card>)


//     return (<section className='cards__container'>
//         <section>
//             <h2>Cards for {props.board.title}</h2>
//             <div className='card-items__container'>
//             {cardElements}
//             </div>
//         </section>
//         <NewCardForm postNewCard={postNewCard}></NewCardForm>
//         </section>)
// };


