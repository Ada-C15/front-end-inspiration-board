import React from 'react';
import './App.css';
import BoardList from './components/BoardList';
import CreateBoard from './components/CreateBoard';
import {useState, useEffect} from 'react';
import axios from 'axios';

//Add this in .env
const BASE_URL = "https://sand-inspiration-board.herokuapp.com"

function App() {

  const [boards, setBoards] = useState([]);
  //     {
  //       title: "Welcome!",
  //       owner: "Desperate One",
  //       board_id: 2021
  //     }
  // ]);

  const [selectedBoard, setSelectedBoard] = useState(null);

  // const [selectedBoard, setSelectedBoard] = useState(
  //     {
  //       title: "Welcome!",
  //       owner: "Desperate One",
  //       board_id: 2021
  // });

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

  console.log(`${selectedBoard?.board_id} LINE 48`);


  return (
    <section className="App">
      <header className="Header">
        {/* image below is for CSS purposes */}
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTs4k73tsmQGuUInH-lVvYy0S7yOhO4z3hQ&usqp=CAU" className="App-logo" alt="sandy beach" /> */}
        {/* //"safe navigation operator" '?' asking if null, use null, but if not null, use look up*/}
        <h1>{selectedBoard?.title} Inspiration Board</h1>
      </header>
      <main>

        {/* <BoardList { ...{selectedBoard, onBoardSelected, boards} }/> */}
        <BoardList selectedBoard={selectedBoard} onBoardSelected={onBoardSelected} boards={boards}/>
        <CreateBoard onUpdateBoardList={refreshBoards} />
      </main>
    </section>
  );
}

export default App;

