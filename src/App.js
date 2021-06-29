import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LOCATIONIQ_API_KEY } from './secrets.js'
import './App.css';
import Board from './components/Board'
import CardList from './components/CardList'
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';


function App () {
  const BASE_URL = "http://localhost:5000"
  const [boards, setBoards] = useState([])
  const [boardContent, setBoardContent] = useState("")
  const [likeCount, setLikeCount] = useState(1);
  const [errors, setErrors] = useState(null);

  // Displaying all boards
  useEffect(() => {
    axios.get(`${BASE_URL}/boards`)
    .then((response) => setBoards(response))
    .catch((error) =>{
      setErrors(error.response.data.error);
    })
  }, []);

  const onSubmit = (event) =>{
    event.preventDefault();
    axios.post();
  };

  // const getLocation = (city) => {
  //   axios.get(`${ URL }?key=${ LOCATIONIQ_API_KEY }&q=${ city }&format=json`)
  //     .then((response) => {
  //       // console.log(response.data);
  //       setLocation({
  //         lat: response.data[0].lat,
  //         lon: response.data[0].lon,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       setErrors(error.response.data.error);
  //     });
  // }

  // useEffect(() => {
  //   getLocation('Seattle');
  // }, []);


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
