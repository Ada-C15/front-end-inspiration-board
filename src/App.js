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
  const createNewBoard = () =>{
    axios.post(`${BASE_URL}/boards`)
      .then((response) =>{
        setBoards(response.data);
      })
  }

  // Create a new card
  const createNewCard = () =>{
    axios.post(`${BASE_URL}/boards/{board_id}/cards`)
      .then((response) =>{
        setCards(response.data);
      })
  }

  // Delete a card
  const deleteCard = () =>{
    axios.delete(`${BASE_URL}/boards/{board_id}/cards`)
      .then((response) =>{
        setCards("");
      })
  }

  // Hide the board form
  const toggler = () =>{
    setToggle(!toggle);
    // setToggle(() => !toggle);
    // what exactly is callback
  }

  const onClickBoard = (boardId, boardTitle) => {
    // update "selected board"
    setSelectedBoard(boardTitle);
    // update "cards for"
    axios.get(`${BASE_URL}/boards/${boardId}/cards`)
    .then((response) => {
      setCards(response.data.cards);
    })
    .catch(() => {
      setErrors("Fail to show cards");
    });
  }

  const buttonText = toggle === true ? "Hide" : "Show";

  let newBoard;
  if (toggle){
    newBoard = <NewBoardForm />
  } else{
    newBoard = null;
  }

  const likeIncrease = (card_id) => {
    // axios.put(`${BASE_URL}/cards/${card_id}/like`)
    axios.put(`${BASE_URL}/cards/1/like`)
    .then((response) => {
      // setLikeCount(likeCount + 1);
      setCards(response.data.card);
      // setCards(response.data.card.likes_count);
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
          <h2>Create new board</h2>
          {newBoard}
          <button onClick={toggler}>{buttonText}</button>
          {/* cards for selected board section */}
          <CardList cards={cards} likeIncreaseCallback={likeIncrease}/>
          {/* new card section */}
          <NewCardForm />
        </main>
        <div>
          {/* <FindCityForm onSubmitCallback={getLocation} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
