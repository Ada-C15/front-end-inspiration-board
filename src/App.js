import './App.css';
import React, { useState, useEffect } from 'react';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';
import axios from 'axios';

function App() {

const [boardsData, setBoardsData] = useState([])
  useEffect(() => {
    axios.get("https://board-inspo-app.herokuapp.com/boards", {})
    .then((response) => {
      console.log(response)
      setBoardsData(response.data);
    })
  }, []);


 


// Hide and Show Board
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true)

  
// Add a new board
  const addBoardsData = newBoard => {
    axios.post("https://board-inspo-app.herokuapp.com/boards", newBoard)
    .then((response) => {
      axios.get("https://board-inspo-app.herokuapp.com/boards")
      .then((response) => {
        setBoardsData(response.data)

      })
      .catch((error) => {console.log(error.response.data)})
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }
  

  

  // Add a new card
  const addCardsData = newCard => {
    // const newCardList = selectedBoard.cards;
    const newCardList = selectedBoard

    // const nextId = Math.max(...newCardList.map(card => card.id)) + 1;
    const listOfCards = newCardList.cards
    // const nextId = Math.max(...newCardList.map(card => card.id)) + 1
    const nextId = Math.max(...listOfCards.map(card => card.id)) + 1
    // const nextId = newCard.card_id + 1

    listOfCards.push({
      id: nextId,
      message: newCard.message
      // likes_count
    });

    // newCardList.push({
    //   id: nextId,
    //   messageData: newCard.messageData
    //   // likes_count
    // });

    // setSelectedBoard({
    //   ...selectedBoard,
    //   cards:listOfCards
    // })
    // setSelectedBoard({
    //   ...selectedBoard,
    //   cards:newCardList
    // })

  }



   // Select a board

  const [selectedBoard, setSelectedBoard] = useState({
    id: 0,
    title:"",
    owner:"",
    // cards:[]
  })

  // Select a board
  const selectABoard = (id) =>{
    axios.get(`https://board-inspo-app.herokuapp.com/boards/${id}`)
    .then((response) => {
      console.log("This is my response in the selectboard",response.data);
      setSelectedBoard(response.data)
      console.log("This is my variable in the selectboard",selectedBoard);
    })
    .catch((error) => {console.log(error)})

  }
  

  // rendering the boards to the Board component
  const boardComponent = boardsData.map((board) => {
    return <li key={board.id}><Board id={board.id} title={board.title} owner={board.owner} onBoardSelect={selectABoard}></Board></li>
      })

  // ClikButton to hide or show the board form
  const onClickCallback = () => {
    setIsBoardFormVisible(!isBoardFormVisible)
  }

  // display cards
  // const cardelements = selectedBoard.cards.map((card) => {
  //   return
  // })


  return (
    <div className="App">
      <header className="App-header">
        <h1> ✴ Inspiration Board ✴ </h1>
      </header>
      <main>
        <section className= "boards__container">
          <div className="left">
            <section className="displayBoard">
                <h2>Boards</h2>
                <ol>
                  {boardComponent}
                </ol>
            </section>
          </div>
          <div className="middle">
            <section>
              <h2> ✴ Selected Board ✴ </h2>
              <p>{selectedBoard.id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>

            </section>
          </div>
          <div className="right">
            <section className= "newBoardForm">
            <h2>Create a new board</h2>
              {isBoardFormVisible ? <NewBoardForm addBoardCallback = {addBoardsData}/> : ""}
            <div>
              <input 
                className= "newFormHideButton"
                type="button" 
                value={isBoardFormVisible? "Hide New Board Form" : "Show New Board Form" } 
                onClick={onClickCallback}/>
            </div>
            </section>
          </div>
          <div className="bottom-left"> 
              {/* <CardList oneBoard={selectedBoard}></CardList> */}
            {selectedBoard.id ? <CardList board={selectedBoard}></CardList> : ''}
          </div>
          <div className="bottom-right">
          </div>

          
        </section>  
      </main>
    </div>

  );
}

export default App;
