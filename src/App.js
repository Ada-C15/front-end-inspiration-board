import './App.css';

import {useEffect, useState} from 'react';
import axios from 'axios';

import Board from './components/Board';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';


function App() {

  // create state for board (default: empty array, meaning no boards created)
  const [boardsData, setBoardsData] = useState([]) 
  // create state for selected board (default: no board is selected)
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
  return (
    <div>
      <h1>Inspiration Board</h1>
        <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {boardsElements}
            </ol>
        </section>
        <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'First select a board from list'}</p>
        </section>
      <h2>Create a New Board</h2>
      <h2>Create a New Card</h2>
      <h2>Selected Card</h2>
    </div>
  );
}

export default App;
