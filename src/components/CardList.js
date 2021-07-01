import React from 'react';
import Card from './Card';

const CardList = (props) => { 

    const listofCards = props.cardsData.map((card) => {
        return (
            <li>
                <Card 
                id={ card.id } 
                message={ card.message }
                likesCount= { card.likes_count}
                boardId= {card.board_id }
                upvoteCard={props.upvoteCard}
                deleteCard={props.deleteCard}
                editCard={props.editCard}/>
            </li>
        );
    });
    return (
        <div>
            <ul>
                { listofCards }
            </ul>
        </div>
    )
}

export default CardList;

