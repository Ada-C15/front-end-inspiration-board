import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardList from './CardList';
import CreateCard from './CreateCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

const Board = (props) => {
  //use board id to get cards via useEffect
  
  const [cards, setCards] = useState([]);
    // [
    //   {
    //     board_id: null,
    //     card_id: null,
    //     likes_count: 0,
    //     message: ""
    //   }
    // ]
  // );

  // if board value changes, useEffect hears it and re renders the cards
  useEffect (() => {
    refreshCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.selectedBoard]);

  const refreshCards = () => {
    console.log(props.selectedBoard);
    // console.log(props.selectedBoard.board_id);
    return axios
    .get(`${BASE_URL}/boards/${props.selectedBoard?.board_id}/cards`)
    .then((cardsResponse) => {
      const cards = cardsResponse.data
      console.log(`${cards} GET request from AXIOS in Boards`);
      console.log(cards);
      setCards(cards)})
    .catch((error)=>{console.log(error)})
  };

  const plusOneStar = () => {
    return <div></div>
  }

  const deleteCard = (card_id) => {
    return axios
    .delete(`${BASE_URL}/cards/${card_id}`)
    .then((cardsResponse) => refreshCards())
    .catch((error) => {console.log(error)})
  };

  console.log(`${props.selectedBoard?.board_id} Board`);
  console.log(`${props.message} Message on card in the Board file`);

  return (
    <section>
        <div>
          <CreateCard selectedBoard={props.selectedBoard} onUpdateCardDisplay={refreshCards} />
        </div>

        <div>
          <CardList selectedBoard={props.selectedBoard} cards={cards} deleteCard={deleteCard} plusOneStar={plusOneStar}/>
        </div>
    </section>
  )
};

Board.propTypes = {
  selectedBoard: PropTypes.func.isRequired,
  board_id: PropTypes.number.isRequired
};

export default Board;
