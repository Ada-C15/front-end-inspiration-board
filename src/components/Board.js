import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList.js';
import PropTypes from 'prop-types';

const Board = (props) => {
    console.log("I'm in Board and this is the data passed to me: ", props.data);
    
    return (
        <div className="board">
            <h2>{props.data.title}</h2>
            <h4>{props.data.owner}</h4>
            <CardList cards={props.cards} onLikeClickCallback={props.onLikeClickCallback} onDeleteClickCallback={props.onDeleteClickCallback}></CardList>
            <div className='NewCardForm'>
                <h3>Create a New Card</h3>
                <NewCardForm onSubmitCallback={(newCardData) => props.onSubmitCallback(newCardData)}></NewCardForm>
            </div>
        </div>
    );

};

Board.propTypes = {
    data: PropTypes.shape({
            board_id: PropTypes.number,
            owner: PropTypes.string,
            title: PropTypes.string
    }),
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number,
            message: PropTypes.string,
            likes_count: PropTypes.number
        })
    ),
    onLikeClickCallback: PropTypes.func,
    onDeleteClickCallback: PropTypes.func,
    onSubmitCallback: PropTypes.func
};
export default Board;