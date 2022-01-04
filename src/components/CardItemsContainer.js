import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import './CardItemsContainer.css'

const CardItemsContainer = (props) => {
     
    const cardItems = props.cards.map((card) => {
     
        //console.log(`CardItemContainer card ${card.id}: ${card.message}`);

      return (
         <CardItem cardId={card.id} message={card.message} likeCount={card.likeCount} selectedBoardId={props.selectedBoardId} onCardDeleteCallback={props.onCardDeleteCallback}></CardItem>
       );
      });
    
    return (
        <div class="card-items__container">
            {cardItems}
        </div>
    );
}

export default CardItemsContainer;