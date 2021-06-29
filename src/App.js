import './App.css';
import { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';

// process.env.REACT_APP_BACKEND_URL
// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
  // ...
/*In the container component that holds data about boards

State:
boardsData
selectedBoard
isBoardFormVisible */

function App() {
  const [boardsData, setBoardsData] = useState([])

  const CreateNewBoard = (newBoard) => {
    console.log('newBoard ', newBoard)
    const board = [...boardsData];
    board.push({
      title: newBoard.title,
      owner: newBoard.ownerName
    })
    setBoardsData(board);
    console.log('boardData ', boardsData);
  }


  return (
    <div>
      <h2>Create a New Board</h2>
      <NewBoardForm createNewBoard={CreateNewBoard}/>
    </div>
  );
}

export default App;
