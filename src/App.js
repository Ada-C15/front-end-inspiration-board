import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board'
import CardList from './components/CardList'
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';


function App () {
  const BASE_URL = "http://localhost:5000"
  const [boards, setBoards] = useState([])
  const [likeCount, setLikeCount] = useState(1);
  const [errors, setErrors] = useState(null);

  // What functionalities to be incluced in this App file?
  // render the current list of boards with the newly added board

  // Displaying all boards
  useEffect(() => {
    axios.get(`${BASE_URL}/boards`)
    .then((response) => setBoards(response))
    .catch((error) =>{
      setErrors(error.response.data.error);
    })
  }, []);

  // Do we need this here?
  const onSubmit = (event) =>{
    event.preventDefault();
    axios.post();
  };

  // Create a new board function here? Or it's done in Form.js?
  const createNewBoard ()

  // Create a new card
  const createNewCard ()

  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h1>INSPIRATION BOARD</h1>
        </header>
          <h2>BOARDS</h2> 
        <main>
          <Board />
          <CardList cards={cards}/>
          <NewBoardForm />
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
