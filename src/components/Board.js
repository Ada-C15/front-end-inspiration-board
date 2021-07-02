import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CardList from './CardList';
import CreateCard from './CreateCard';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

const Board = (props) => {

  const MOST_RECENT = "id_desc";
  const LEAST_RECENT = "id_asc";
  const MOST_LIKED = "likes_desc";
  const LEAST_LIKED = "likes_asc";
  const A_TO_Z = "alphab_asc";
  const Z_TO_A = "alphab_desc";

  const [sort, setSorting] = useState(MOST_RECENT);

  const [cards, setCards] = useState([]);

  // format for each card:
  //   {
  //     board_id: null,
  //     card_id: null,
  //     likes_count: 0,
  //     message: ""
  //   }

  const handleSortingChange = (event) => {
    const sort = event.target.value;
    setSorting(sort);
  };


  const refreshCards = useCallback(() => {
    return axios
    .get(`${BASE_URL}/boards/${props.selectedBoard?.board_id}/cards`, {
      params: {
        sort
      }
    })
    .then((cardsResponse) => {
      const cards = cardsResponse.data
      setCards(cards)})
    .catch((error)=>{console.log(error)})
  }, [props.selectedBoard, sort]);


  // if board value changes, useEffect hears it and re renders the cards
  useEffect(() => {
    refreshCards()
  }, [props.selectedBoard, refreshCards, sort]);

  const plusOneStar = (card_id) => {
    return axios
      .patch(`${BASE_URL}/cards/${card_id}/like`)
      .then(() => refreshCards())
      .catch((error) => { console.log(error) })
  };

  const deleteCard = (card_id) => {
    return axios
      .delete(`${BASE_URL}/cards/${card_id}`)
      .then(() => refreshCards())
      .catch((error) => { console.log(error) })
  };

  return (
    <section>
      {props.selectedBoard && <div>
        <CreateCard selectedBoard={props.selectedBoard} onUpdateCardDisplay={refreshCards} />
      </div>}

      <div>
        <section>
          <form className="order-by">
            <label  className="bold-type">Order by:</label>
            <select onChange={handleSortingChange}>
              <option value={MOST_RECENT}>most recent</option>
              <option value={LEAST_RECENT}>least recent</option>
              <option value={MOST_LIKED}>most liked</option>
              <option value={LEAST_LIKED}>least liked</option>
              <option value={A_TO_Z}>a to z</option>
              <option value={Z_TO_A}>z to a</option>
            </select>
          </form>
        </section>

        <div>
          <CardList selectedBoard={props.selectedBoard} cards={cards} deleteCard={deleteCard} plusOneStar={plusOneStar} />
        </div>
        </div>
      </section>
      )
};

      Board.propTypes = {
      selectedBoard: PropTypes.func.isRequired,
      board_id: PropTypes.number.isRequired
};

      export default Board;
