import React from 'react';
// import './Board.css';
import CardList from './CardList.js';
import PropTypes from 'prop-types';

const Board = (props) => {
    console.log(props.data);
    
    return (
        <div className="board">
            <h2>{props.data.title}</h2>
            <h4>{props.data.owner}</h4>
            <CardList boardId={props.data.board_id}></CardList>
        </div>
    );

};

Board.propTypes = {
    data: PropTypes.shape({
            board_id: PropTypes.number,
            owner: PropTypes.string,
            title: PropTypes.string
    })
};
export default Board;