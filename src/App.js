import './App.css';

import {useEffect, useState} from 'react';
import axios from 'axios';

import Board from './components/Board';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';

// I cannot get the process.env object to work so this is
// will have to do for now:
const REACT_APP_BACKEND_URL = 'http://localhost:5000'

function App() {

  // creates state for board (default: empty array, meaning no boards created):
  const [boardsData, setBoardsData] = useState([]);
  // creates state for selected board (default: no board is selected):
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '', 
    board_id: null
  });

  // useEffect utilized to send GET request to boards endpoint
  // > response object contains data for all boards
  // > response used to update boardsData state

  useEffect(() => {
    axios
    .get(`${REACT_APP_BACKEND_URL}/boards`, {
    })
    .then((response) => {
      setBoardsData(response.data);
    })
  }, []); 
  
  // event handler responsible for updating setSelectedBoard state
  const selectBoard = (board) => { setSelectedBoard(board) };

  // maps the response data from a successful GET request to 
  // a list of boards:
  const allBoardsList = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });

  const postNewBoard = (newBoardData) => {
    axios
      .post(`${REACT_APP_BACKEND_URL}/boards`, {
        title: newBoardData.title,
        owner: newBoardData.owner
      })
      .then((response) => {
        console.log('response:', response);
        console.log('response data:', response.data);
      })
      .catch((error) => {
        console.log('error:', error);
        console.log('error response:', error.response);
        alert('Could not create board.');
      });
  };

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}


  // ----------------- MELISSA'S CARD CODE ----------------------------------- 

  // new card function to connect cards to board
  const addNewCard = (message) => {
    console.log('message', message)
    const newCard = {
      message: message,
      board_id: selectedBoard.id
    }
    axios.post(`${REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`, newCard)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!")
      });
  };

  // create function for card likes
  const cardLikes = (cardId) => {
    axios.put(`${REACT_APP_BACKEND_URL}/cards/${cardId}/like`, )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!")
      });
  };

  // create function to delete cards
  const cardDelete = (cardId) => {
    axios.delete(`${REACT_APP_BACKEND_URL}/cards/${cardId}`, )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error!")
      });
  };

  // --------------------------------------------------------------------------

  return (
    <div className="page_container">

      <div className="header_container">
        <h1>INSPIRATION BOARD</h1>
      </div>

      <div className="boards_container">

        <section>
          <h2>BOARDS</h2>
          <ul> {allBoardsList} </ul>       
        </section>

        <section className="selected_board">
          <h2>SELECTED BOARD</h2>
          <p>{selectedBoard.id ? `"${selectedBoard.title}" by ${selectedBoard.owner}` : 'Please select a board from the list!'}</p>
        </section>

        <section className="new-board-form_container"> 
          <h2>CREATE A NEW BOARD</h2>
          <button onClick={toggleNewBoardForm}>{isBoardFormVisible ? 'Hide Form' : 'Show Form'}</button>
          {isBoardFormVisible ? <NewBoardForm addBoardCallBack={postNewBoard}></NewBoardForm> : ''}
        </section>
        
      </div>

      <div className="cards_container">

        <section className="card_items_container">
          {selectedBoard.board_id ? <CardList board={selectedBoard} /> : ''}
        </section> 

      </div>

    </div>
  );
}

export default App;
