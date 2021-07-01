import './App.css';
import { useState, useEffect } from 'react';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import axios from 'axios';

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
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    // board_id: null
  })

  useEffect(() => {
    axios.get('http://localhost:5000/boards', 
    {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
    .then((response) => {
      console.log(response.data)
      setBoardsData(response.data)
    })
    .catch((error) => console.log(error));
  }, []);


  const CreateNewBoard = (newBoard) => {
    // const BASE_URL = "http://localhost:5000";
    console.log('newBoard ', newBoard)
    const board = [...boardsData];
    // board.push({
    //   title: newBoard.title,
    //   owner: newBoard.owner
    // })
    // setBoardsData(board);
    // axios.post(`${BASE_URL}/boards`, newBoard)
    axios.post("http://localhost:5000/boards", newBoard)
    // axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
        .then((response) => {
          console.log('response ', response.data.board)
          board.push(response.data.board);
          setBoardsData(board);
        }).catch((error) => {
          console.log('error ', error)
        });
    
  }
  console.log('boardData ', boardsData);

  const onBoardSelect = (board) => {
    // const test = () => {
      setSelectedBoard(board)
      console.log('boardSelect ', board)

      //   axios.get('http://localhost:5000/boards/board_id/cards', 
      //   {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
      //   .then((response) => {
      //     console.log(response.data)
      //     setCardsData(response.data)
      //   })
      //   .catch((error) => console.log(error));
      // };
  }

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  // const changeBoardForm = () => {
  //   if (isBoardFormVisible) {
  //     return "Hide Board Form"
  //   }else {
  //     return "Show Board Form"
  //   }
  // };
  const changeBoardForm = isBoardFormVisible ? 'Hide Board Form' : 'Show Board Form';

  //tenery is board form visible, render newboard form, if not ''
  return (
    <div>
      <div class="page__container">
        <div class="content__container" id="content_id">
          <h1>Inspiration Board</h1>
          <h2>Create a New Board</h2>
          <section class="board__container"> </section>
          {isBoardFormVisible ? <NewBoardForm createNewBoard={CreateNewBoard}/> : ''}
          <input type="button" value={changeBoardForm} onClick = {() => setIsBoardFormVisible(!isBoardFormVisible)}/>
          {/* <NewBoardForm createNewBoard={CreateNewBoard}/> */}
          {/* <input type="button" value="Hide Board Form" onClick = {() => setIsBoardFormVisible(false)}/> */}

          <section>
            <h3>Boards</h3>
            <BoardList boards={boardsData} onBoardSelect={onBoardSelect}/>
            <ol class= "boards_list">
            </ol>
          </section>
          <section>
            <h3>Selected Board</h3>
            <div> {selectedBoard.title} - {selectedBoard.owner}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
