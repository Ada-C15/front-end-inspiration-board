import React, { useState, useEffect } from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList.js';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
    console.log("I'm in Board and this is the data passed to me: ", props.data);
    const [showNewCardForm, toggleNewCardForm] = useState(false);

    useEffect(() => {
        props.data.board_id ? toggleNewCardForm(true) : toggleNewCardForm(false);
    }, [props.data]);

    return (
        <div className="board">
            <div className="boardHeader">
                <h2>{props.data.title}</h2>
                <h3>{props.data.owner}</h3>
            </div>
            <div className='boardDisplay'>
                <div className='cardDisplay'>
                    <CardList cards={props.cards} onLikeClickCallback={props.onLikeClickCallback} onDeleteClickCallback={props.onDeleteClickCallback}></CardList>
                </div>
                { showNewCardForm ?
                    <div className='newCardForm'>
                        <h3>Create a New Card</h3>
                        <NewCardForm onSubmitCallback={(newCardData) => props.onSubmitCallback(newCardData)}></NewCardForm>
                    </div>
                    : ''
                }
            </div>
            <label>Sort By:</label>
            <select id='sort' onChange={(event) => props.onSortCallback(event)} value={props.sortMethod}>
                <option value=''>None</option>
                <option value='id'>Id</option>
                <option value='alphabetical'>Alphabetical</option>
                <option value='likes'># Likes</option>
            </select>
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