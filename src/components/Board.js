import React from 'react';
// import './Board.css';
import CardList from './CardList.js';
import PropTypes from 'prop-types';

const Board = (props) => {
    console.log("I'm in Board and this is the data passed to me: ", props.data);
    
    return (
        <div className="board">
            <h2>{props.data.title}</h2>
            <h4>{props.data.owner}</h4>
            <CardList cards={props.cards}></CardList>
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
    )
};
export default Board;