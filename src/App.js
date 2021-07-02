import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import CreateBoard from './components/CreateBoard';
import {useState, useEffect} from 'react';
import axios from 'axios';


const BASE_URL = "https://sand-inspiration-board.herokuapp.com";

function App() {
  
  const [boards, setBoards] = useState([]);
  
  // format for each board:
  //     {
  //       title: "Welcome!",
  //       owner: "Desperate One",
  //       board_id: 2021
  //     }

  const [selectedBoard, setSelectedBoard] = useState(null);

  console.log(`${selectedBoard?.board_id} LINE 28`);

  const onBoardSelected = (selectedBoard) => {
    setSelectedBoard(selectedBoard);
  };

  useEffect (() => {
    refreshBoards()
    },[]);

  const refreshBoards = () => {
    return axios
    .get(`${BASE_URL}/boards`)
    .then((boardsResponse) => {
      const boards = boardsResponse.data
      console.log(boards);
      setBoards(boards)})
    .catch((error)=>{console.log(error)})
  };

  const deleteBoard = (board_id) => {
    return axios
    .delete(`${BASE_URL}/boards/${board_id}`)
    .then(() => refreshBoards())
    .catch((error) => {console.log(error)})
  };

  return (
    <section className="app">
      <header className="header">
        <h1>{selectedBoard?.title} Inspiration Board</h1>
      </header>
      <main class="large-font">
        <CreateBoard onUpdateBoardList={refreshBoards} />
        <BoardList { ...{selectedBoard, onBoardSelected, boards} }/>
      </main>
      <footer>©copyright 2021</footer>

    </section>
  );
}

export default App;

