import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

// getBoardData
function App() {
  //STATES:
  const [boardData, setBoardData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`,
    {
      params: {
      format: 'json'
      }
    })
    .then( (response) => {
      setBoardData(response.data);
      console.log('success in finding boardList')
    })
    .catch( (error) => {
      console.log('error in getting board list');
      console.log(error.response)
      alert("Could not connect to boards")
    });
  }, []);


  const selectBoard = (event) => {
    if (event.target.value) {
      for (let board of boardData) {
        if (event.target.value === board.title) {
          setCurrentBoard(board);
        }
      }
    } else {
      setCurrentBoard({});
    }
  }


  const handleChange = (event) => { 
    selectBoard(event);
  }


  const generateBoardTitles = (boardData) => {
    const boardTitles = [];
    for (let board of boardData) {
        boardTitles.push(<option key={board.id} value={board.title}>{board.title}</option>);
    }
    return boardTitles;
  }


  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      
      <main>
        <h3>Boards List:</h3>
        {/* Created this as a drop-down list, not sure if I like it */}
        <select id="boards" onChange={handleChange} value={currentBoard.title}>
          <option value=""></option>
          {generateBoardTitles(boardData)}
        </select>
        
        <h3>Selected Board: {currentBoard.title}</h3>
        
        <h3>Create a New Board:</h3>
        <NewBoardForm></NewBoardForm>

        <Board data={currentBoard}></Board>

        <h3>Create a New Card</h3>
        <NewCardForm board_id={currentBoard.board_id}></NewCardForm>

      </main>
    </div>
  );
}

export default App;
