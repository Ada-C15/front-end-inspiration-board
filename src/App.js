import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';

// getBoardData
function App() {
  //STATES:
  const [boardData, setBoardData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  const [boardCount, setBoardCount] = useState(0);
  
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
  }, [boardCount]);


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

  const postNewBoard = (newBoardData) => {
    console.log(newBoardData);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardData)
      .then((response) => {
        console.log('success! New board Created');
        console.log(response.data);
        setBoardCount(boardCount + 1);
      })
      .catch((error) => {
        console.log('Yeah that did not work quite right...');
        console.log(error.response.data);
      });
  };

  const postNewCard = (newCardData) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.board_id}/cards`, newCardData, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    }})
      .then((response) => {
        console.log('success! New card Created');
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Error. That didn't work.")
        console.log(error.response.status);
      });
  };

  const handleBoardSubmit = (newBoardData) => {
    console.log(newBoardData);
    postNewBoard(newBoardData);
  }

  const handleCardSubmit = (newCardData) => {
    console.log(newCardData);
    console.log(currentBoard);
    if (Object.keys(currentBoard).length === 0) {
      alert('You must first select a board!');
    } else {
      postNewCard(newCardData);
    }
    
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
        <NewBoardForm onSubmitCallback={handleBoardSubmit}></NewBoardForm>

        <Board data={currentBoard} onSubmitCallback={handleCardSubmit}></Board>

      </main>
    </div>
  );
}

export default App;
