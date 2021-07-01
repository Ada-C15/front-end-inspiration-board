import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList';

function App() {
  // state of the list of boards
  const [boardData, setBoardData] = useState([]);
  // state of the current board (state is the same structure as the response in flask)
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    cards: [],
    board_id: null
  });

  const getBoards = () => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    .then((response) => {
      console.log(response.data);
      const newData = response.data
      setBoardData(newData);
    })
    // .catch((error) => {
    //   console.log('error.response.data');
    // });
  }

  useEffect(() => {
    getBoards();
  }, [])

  const createBoard = (newBoard) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log(response.data);
        const boardThing = response.data
        const newData = [...boardData]
        newData.push(boardThing)
        setBoardData(newData)
      })
  }

  // const createCard = (newCard, selectedBoard) => {
  //   axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.board.board_id}/cards`, newCard)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  // }

  const selectBoard = (board) => {
    setSelectedBoard(board)
  }

  const boardComponents = boardData.map(board => {
    return (
    <li key={board.board_id}>
        <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });



  const createCard = (newCard, selectedBoard) => {

    const board_id = selectedBoard.board.board_id

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/${board_id}/cards`, newCard)
      .then((response) => {
        console.log(response.data);
        const cardThing = response.data
        // const cardList = getCardList(board_id)

        // cardList.push(cardThing)

        const newData = boardData.map(board => {
          if (board.board_id === board_id) {
            board.cards.push(cardThing)
          }
          return board
        })

        setBoardData(newData)

          })
        };



  const displayCards = (board_id) => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
    .then((response) => {
      console.log(response.data.cards)
      const cardData = response.data.cards
    })
  }



  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {boardComponents}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.title} - {selectedBoard.owner}</p>
          </section>
          <section className="new-board-form__container">
            <h2>Create a New Board</h2>
            <NewBoardForm addBoardCallback={createBoard}/>
            {/* <span className="new-board-form__toggle-btn">Hide New Board Form</span> */}
          </section>
        </section>
        {<CardList board={selectedBoard} />}
      </div>
      <footer>
        <span>Copyright 2021 Just a Flask Wound</span>
      </footer>
    </div>
  );
}

export default App;
