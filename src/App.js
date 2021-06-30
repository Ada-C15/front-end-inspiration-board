import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList'
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

function App () {
  const BASE_URL = "https://inspiration-board-tashforce.herokuapp.com";
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);
  // const [likeCount, setLikeCount] = useState(0);
  const [errors, setErrors] = useState(null);
  const [toggle, setToggle] = useState(true);

  // Displaying all boards
  useEffect(() => {
    axios.get(`${BASE_URL}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch(() => {
        setErrors("Fail to show boards");
      });
  }, []);


  // const onSubmit = (event) =>{
  //   event.preventDefault();
  //   axios.post();
  // };

  // Create a new board
  const createNewBoard = (event) =>{
    event.preventDefault();
    axios.post(`${BASE_URL}/boards`)
      .then((response) =>{
        const newboards = [...boards];
        newboards.push(response.data)
        setBoards(newboards);
      })
      .catch(() => {
        setErrors("Fail to create a new board");
      });
  }

  // Create a new card
  const createNewCard = (event) =>{
    event.preventDefault();
    axios.post(`${BASE_URL}/boards/{board_id}/cards`)
      .then((response) =>{
        const newcards = [...cards];
        newcards.push(response.data)
        setCards(newcards);
      })
      .catch(() => {
        setErrors("Fail to create a new card");
      });
  }

  // Delete a card
  const deleteCard = (event) =>{
    event.preventDefault();
    axios.delete(`${BASE_URL}/boards/{board_id}/cards`)
      .then((response) =>{
        const newcards = [...cards];
        newcards.push(response.data)
        setCards(response.data);
      })
      .catch(() => {
        setErrors("Fail to delete a card");
      });
  }

  // Hide the board form
  const toggler = () =>{
    setToggle(!toggle);
  }

  const buttonText = toggle === true ? "Hide" : "Show";

  let newBoard;
  if (toggle){
    newBoard = <NewBoardForm setBoards={setBoards} createNewBoard={createNewBoard}/>
  } else{
    newBoard = null;
  }

  // Show all cards for the selected board
  const onClickBoard = (boardId, boardTitle) => {
    // update "selected board"
    setSelectedBoard(boardTitle);
    // update "cards for"
    axios.get(`${BASE_URL}/boards/${boardId}/cards`)
    .then((response) => {
      const allCards = [...cards];
      allCards.push(response.data)
      setCards(response.data.cards);
    })
    .catch(() => {
      setErrors("Fail to show cards");
    });
  }

  // Increase like for a card
  const likeIncrease = (card_id) => {
    // axios.put(`${BASE_URL}/cards/${card_id}/like`)
    axios.put(`${BASE_URL}/cards/1/like`)
    .then((response) => {
      // setLikeCount(likeCount + 1);
      setCards(response.data.card);
      // setCards(response.data.card.likes_count);
    })
    .catch(() => {
      setErrors("Fail to increase like");
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h1>INSPIRATION BOARD</h1>
        </header>
          <div>{errors}</div>
        <main>
          {/* all boards section */}
          <div className="all-boards">
            <h2>BOARDS</h2> 
            {boards.map(board => (
              <p key={board.board_id} onClick={() => onClickBoard(board.board_id, board.title)}>
                {board.board_id}. {board.title}
              </p>
            ))}
          </div>
          {/* selected board section */}
          <div>
            <h2>SELECTED BOARD</h2>
            <div>{selectedBoard}</div>
          </div>
          {/* new board section */}
          <h2>CREATE A NEW BOARD</h2>
          {newBoard}
          <button onClick={toggler}>{buttonText}</button>
          {/* cards for selected board section */}
          <h3>CARDS FOR {selectedBoard}</h3>
          <CardList cards={cards} likeIncreaseCallback={likeIncrease}/>
          {/* new card section */}
          <NewCardForm createNewCard={createNewCard} deleteCard={deleteCard}/>
        </main>
        <div>
          {/* <FindCityForm onSubmitCallback={getLocation} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
