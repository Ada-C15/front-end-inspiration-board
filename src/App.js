import './App.css';
import React,{useState, useEffect} from 'react';
import NewBoard from './components/NewBoard';
import BoardList from './components/BoardList';
import Board from './components/Board';
import axios from 'axios';


function App() {
  // sets up state variables for Board component
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  })
  const selectBoard = (board) => {setSelectedBoard(board)};
  const boardsElements = boardData.map(board => {
    return (
      <li><Board board={board} onBoardSelect={selectBoard} /></li>
    )
  })
  // Make sure the BoardData state variable updates to what is entered
  const updateBoardData = (event) => {
    setBoardData(event.target.value);
  }
// need to connect with backend API to run axios get call 
  
// delete all functionality
  const deleteAll = () => {
    if (window.confirm('Are you sure you want to delete all boards and cards?')) {
      // check endpoint name (destroy_all)
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/destroy_all`).then((response) => {
        console.log('repsonse'.response.data);
        setBoardData([response.data.default_board]);
        setSelectedBoard({
          title: '',
          owner: '',
          board_id: null
        });
      }).catch((error) => {
        console.log('Error:', error);
        alert('Oops! Something is not right!');
      });
    }
  }

  return (
    <div className="page">
      <div className="content">
        <h1>Stickie Board</h1>
        <section className="boards_container">
          <section>
            <h2>Boards</h2>
            <ol className="boards_list">
              {boardsElements}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List'}</p>
          </section>
          <section className="new_board_form">
            <h2>Let's make a new board!</h2>
            {isBoardFormVisible ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''}
            <span onClick={toggleNewBoardForm} className="new-board-form-toggle">{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</span>
          </section>
        </section>
          {selectedBoard.board_id ? <CardsList board={selectedBoard}></CardsList> : ''}
      </div>
      <footer>Click <span onClick={deleteAll} className="footer__delete-btn">here</span> to delete all boards and cards!</footer>
    </div>
  );
}

export default App;
