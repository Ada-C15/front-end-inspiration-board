import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './components/CardList'
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
// import logo from './star01.gif';

function App () {
  const BASE_URL = "https://inspiration-board-tashforce.herokuapp.com";
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);
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

  // Create a new board
  const createNewBoard = (boardFieldDict) =>{
    axios.post(`${BASE_URL}/boards`, boardFieldDict)
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
  const createNewCard = (cardFieldDict) =>{
    axios.post(`${BASE_URL}/boards/${selectedBoard.board_id}/cards`, cardFieldDict)
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
  const deleteCard = (card_id) =>{
    axios.delete(`${BASE_URL}/cards/${card_id}`)
      .then(() =>{
        const allCards = [...cards];
        let i = 0;
        for (const card of allCards){
          if (card_id === card.card_id){
            allCards.splice(i, 1)
            break;
          }
          i++;
        }
        setCards(allCards);
      })
      .catch(() => {
        setErrors("Fail to delete a card");
      });
  }

  // Hide the board form
  const toggler = () =>{
    setToggle(!toggle);
  }

  const buttonText = toggle === true ? "Hide New Board Form" : "Show New Board Form";

  let newBoard;
  if (toggle) {
    newBoard = <NewBoardForm setBoards={setBoards} createNewBoard={createNewBoard}/>
  } else{
    newBoard = null;
  }

  // Show all cards for the selected board
  const onClickBoard = (board) => {
    // update "selected board"
    setSelectedBoard(board);
    // update "cards for"
    axios.get(`${BASE_URL}/boards/${board.board_id}/cards`)
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
    axios.put(`${BASE_URL}/cards/${card_id}/like`)
    .then((response) => {
      const allCards = [...cards];
        // find the updated cards
      for (const card of allCards){
        if (card_id === card.card_id){
          card.likes_count = response.data.card.likes_count;
          break;
        }
      }
      setCards(allCards);
    })
    .catch(() => {
      setErrors("Fail to increase like");
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className="header">
          {/* <img src={logo} alt="" id="star" />  */}
          <h1>INSPIRATION BOARD</h1>
          {/* <img src={logo} alt="" id="star" />  */}
        </section>
          <div>{errors}</div>
        <main>
          {/* all boards section */}
          <div className="all-boards">
            <h2>BOARDS</h2> 
            {boards.map(board => (
              <p key={board.board_id} onClick={() => onClickBoard(board)}>
                {board.board_id}. {board.title}
              </p>
            ))}
          </div>
          {/* selected board section */}
          <div>
            <h2>SELECTED BOARD</h2>
            <div>{selectedBoard?.title}</div>
          </div>
          {/* new board section */}
          <div className="new-board">
            <h2>CREATE A NEW BOARD</h2>
            {newBoard}
            <button onClick={toggler}>{buttonText}</button>
          </div>
          {/* cards for selected board section */}
          <div className="cards">
            <h2>CARDS FOR {selectedBoard?.title}</h2>
            <CardList cards={cards} likeIncreaseCallback={likeIncrease} deleteCard={deleteCard}/>
          </div>
          {/* new card section */}
          <div className="new-card">
            <h2>CREATE A NEW CARD</h2>
            <NewCardForm createNewCard={createNewCard}/>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
