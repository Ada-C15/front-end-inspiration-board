import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react';
import axios from 'axios';


import Board from './components/Board';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';


function App() {

  // create a state for board -> set useSate to ([]), empty list == array of empty boards
  const [boardsData, setBoardsData] = useState([]) 
  // create state for selected board
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '', 
    board_id: null
  });

  //  utilize useEffect for API call -> will call backend .env 



  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <h2>Selected Boards</h2>
      <h2>Create a New Board</h2>
      <h2>Create a New Card</h2>
      <h2>Selected Card</h2>
    </div>

  );
}

export default App;
