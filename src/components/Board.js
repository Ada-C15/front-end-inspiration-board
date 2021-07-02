import React, { useState, useEffect } from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList.js';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
    console.log("I'm in Board and this is the data passed to me: ", props.data);
    const [showBoardContent, toggleBoardContent] = useState(false);

    useEffect(() => {
        props.data.board_id ? toggleBoardContent(true) : toggleBoardContent(false);
    }, [props.data]);

    return (
        <div className="board">
            { showBoardContent ?
            <div className='boardContent'>
                <div className="boardHeader">
                    <h2>{props.data.title}</h2>
                    <h3>{props.data.owner}</h3>
                </div>
                <div className='boardDisplay'>
                    <div className='cardDisplay'>
                        <CardList cards={props.cards} onLikeClickCallback={props.onLikeClickCallback} onDeleteClickCallback={props.onDeleteClickCallback}></CardList>
                    </div>
                    
                        <div className='newCardForm'>
                            <h3>Create a New Card</h3>
                            <NewCardForm onSubmitCallback={(newCardData) => props.onSubmitCallback(newCardData)}></NewCardForm>
                        </div>
                        
                </div>
                <div className='cardSort'>
                    <select id='sort' onChange={(event) => props.onSortCallback(event)} value={props.sortMethod}>
                        <option value=''>Sort Cards:</option>
                        <option value='id'>Id</option>
                        <option value='alphabetical'>Alphabetical</option>
                        <option value='likes'># of Likes</option>
                    </select>
                </div>
            </div>
            : ''
        }
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