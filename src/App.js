import './App.css';

import {useEffect, useState} from 'react';
import axios from 'axios';

import Board from './components/Board';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';


function App() {


  //  ---------------------------- BOARD STATES ------------------------------
  // create state for board (default: empty array, meaning no boards created)
  const [boardsData, setBoardsData] = useState([]) 
  // create state for selected board (default: no board is selected)
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '', 
    board_id: null
  });

  // 

  // useEffect utilized to send GET request to boards endpoint
  // > response object contains data for all boards
  // > response used to update boardsData state
  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
    })
    .then((response) => {setBoardsData(response.data);
    })
  }, []); // <-- Because we want this API call to happen only when the component
  // mounts, and not when any updates are made, our dependency list is an empty array []
  
  // event handler responsible for updating setSelectedBoard state
  const selectBoard = (board) => { setSelectedBoard(board) };

  // mapping the response data from a successful GET request to 
  // a list of boards (boardsElements)
  const boardsElements = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });

  // Board component will display a blue border if rendered correctly
  // here

  // ----------------- MELISSA'S BOARD CODE ----------------------------------- 
  // new board function submission button - references call back function
  const createNewBoard = (newBoardData) => {
    console.log('newBoardData', newBoardData)

    const newBoard = {
      title: newBoardData.title,
      owner: newBoardData.owner
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!")
      });
  };

  // new card function to connect cards to board
  const addNewCard = (message) => {
    console.log('message', message)
    const newCard = {
      message: message,
      board_id: selectedBoard.id
    }
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`, newCard)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!")
      });
  };

  return (
    <div className="page_container">

      <div className="header_container">
        <h1>INSPIRATION BOARD</h1>
      </div>

      <div className="boards_container">
        <section>
          <h2>BOARDS</h2>
          <ol className="boards_list">
            {boardsElements}
          </ol>
        </section>
        <section className="selected_board">
          <h2>SELECTED BOARD</h2>
          <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'First select a board from list'}</p>
        </section>
        <section className="new-board-form_container"> 
          <h2>CREATE A NEW BOARD</h2>
          <NewBoardForm addBoardCallBack={createNewBoard}></NewBoardForm>
        </section>
      </div>

      <div className="cards_container">
        <section className="card_items_container">
          

        </section>
        <section className="new-card-form_container">
          <h2>CREATE A NEW CARD</h2>
          <NewCardForm addCardCallBack={addNewCard}></NewCardForm>
        </section>
      </div>

    </div>
  );
}

export default App;
