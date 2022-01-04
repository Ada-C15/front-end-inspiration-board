import React, { useState } from 'react';
import CardsContainer from './components/CardsContainer';
import './App.css';
import { useEffect } from 'react';
import axios from "axios";
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const BASE_URL = 'https://inspiration-board.herokuapp.com/board';
  const [board, setBoard] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: -1
  });
  const [newBoardFormDisplay, setNewBoardFormDisplay] = useState(true)
// getting boards
  const fetchBoards = () => {
    axios
    .get(`${BASE_URL}`)
    .then((response) => {
      console.log(response.data)
      setBoard(response.data)
    })
    .catch((err) => console.log(err));
  }

  const hideNewBoardForm = () => { setNewBoardFormDisplay(!newBoardFormDisplay) }

  useEffect(() => {
    fetchBoards()
  }, [selectedBoard.board_id]);

  //--------- update "selected board"
  const selectBoard = (board) => {
    setSelectedBoard(board)
    console.log('Currently selected board ', board)
    //refreshCardsForSelectedBoard();
  };

  // deleting one specific board
  const onBoardDelete =(board_id) => {
    axios.delete(`${BASE_URL}/${selectedBoard.board_id}`).then((response) => {
      console.log(response.data);
      fetchBoards();
      setSelectedBoard(
        selectBoard.title = "",
        selectBoard.owner = ""
      )
  }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the board.');
  });

};

  const onSubmitCallbackForNewBoard = (title,owner) => {
    // call API to create card with provided message
    axios.post(`${BASE_URL}`, {
        title: title,
        owner: owner
      })
      .then((response) => {
        console.log(response.data, '!');
        fetchBoards()
      }, (error) => {
        console.log(error);
      });
};

return (
  <div className="App">
    <header className="App-header">
      <h1> :sparkles: :star2: :sparkles: :star2: Inspiration Board :star2: :sparkles: :star2: :sparkles: </h1>
    </header>
    <main>
      <section className="container">
        <section className="boards_container">
          <div className="forBoards change">Boards</div>
            <section className="allBoards">
              <BoardList 
              board={board}
              onSelectBoardCallBack={selectBoard} />
            </section>
            <section>
              <h2 className="forSingleBoard change">Selected Board</h2>
              <p>{selectedBoard.title} - {selectedBoard.owner}</p>
            </section>
            <section className="new_board">
              <h2 className="forCreateBoard change">Create a new board</h2>
              {newBoardFormDisplay ? <NewBoardForm onSubmitCallback={onSubmitCallbackForNewBoard}></NewBoardForm> : ""}
              <div className="hideForm" onClick={hideNewBoardForm}>{newBoardFormDisplay ? "Hide Form" : "Show Form"}</div>
              <button className= "deleteButton"
                onClick={() => {onBoardDelete(selectedBoard.id)}}> Delete Board</button>
            </section>
            <section className="new_card">
              <CardsContainer boardName={selectedBoard.title} selectedBoardId={selectedBoard.board_id} />
            </section>
        </section>
      </section>
      </main>
  </div>
);
}
  

export default App;

