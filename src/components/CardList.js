import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


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
                deleteCard={props.deleteCard}/>
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


CardList.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likesCount: PropTypes.number.isRequired,
        boardId: PropTypes.number.isRequired,
    })),
    upvoteCard: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired

}

