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
    // alert(title);
    console.log(newBoardData);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardData)
      .then((response) => {
        console.log('success! New board Created');
        setBoardCount(boardCount + 1);
      })
      .catch((error) => {
        console.log(
          "Anything that isn't status code 2XX is an error:",
          error.response.status
        );
        console.log(
          "The data from response with an error:",
          error.response.data
        );
      });
  };

  const handleSubmit = (boardData) => {
    console.log(boardData);
    postNewBoard(boardData);
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>

      <main>
        <div className='BoardStuff'>
          <div className="BoardList">
            <h3>Boards List:</h3>
            {/* Created this as a drop-down list, not sure if I like it */}
            <select id="boards" onChange={handleChange} value={currentBoard.title}>
              <option value=""></option>
              {generateBoardTitles(boardData)}
            </select>
          </div>

          <div className="SelectedBoard">
            <h3>Selected Board: </h3>
            <h4>{currentBoard.title}</h4>
          </div>

          <div className="NewBoardForm">
            <h3>Create a New Board:</h3>
            <NewBoardForm onSubmitCallback={handleSubmit}></NewBoardForm>
          </div>
        </div>

        <div className='NewCardForm'>
          <h3>Create a New Card</h3>
          <NewCardForm board_id={currentBoard.board_id}></NewCardForm>
        </div>
        <Board data={currentBoard}></Board>
      </main>
    </div>
  );
}

export default App;
