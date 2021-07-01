import './App.css';
import React, { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';

function App() {

  // Get list of boards
  const [boardsData, setBoardsData] = useState([
    {
    id: 1,
    titleData:"Shopping List",
    ownerData:"Priscille",
    cards:[]
  }
])


  // Select a board

  const [selectedBoard, setSelectedBoard] = useState({
    id: 0,
    titleData:"",
    ownerData:"",
    cards:[]
  })


// Hide and Show Board
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true)

  
// Add a new board
  const addBoardsData = newBoard => {
    const newBoardList = [...boardsData];

    const nextId = Math.max(...newBoardList.map(board => board.id)) + 1;

    newBoardList.push({
      id: nextId,
      titleData: newBoard.titleData,
      ownerData: newBoard.ownerData,
      cards:[]
    });
    console.log(selectedBoard)
    setBoardsData(newBoardList)
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
      messageData: newCard.messageData
      // likes_count
    });

    // newCardList.push({
    //   id: nextId,
    //   messageData: newCard.messageData
    //   // likes_count
    // });

    setSelectedBoard({
      ...selectedBoard,
      cards:listOfCards
    })
    // setSelectedBoard({
    //   ...selectedBoard,
    //   cards:newCardList
    // })

  }

  // Select a board
  // const selectABoard = (board) =>{
  //     setSelectedBoard(board)
  //       }

    // Select a board
  const selectABoard = (id) =>{
    const boards = boardsData.map(board => {
      if(board.id === id) {
      
      setSelectedBoard(board)
        }
        console.log(selectedBoard)
        return board
      })
    setBoardsData(boards)
  }
    

  // rendering the boards to the Board component

  const boardComponent = boardsData.map((board) => {
    // return (<li key={board.id}><Board board={board} onBoardSelect={selectABoard}></Board></li>)
    return <li key={board.id}><Board id={board.id} title={board.titleData} owner={board.ownerData} onBoardSelect={selectABoard}></Board></li>
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
              <p>{selectedBoard.id ? `${selectedBoard.titleData} - ${selectedBoard.ownerData}` : 'Select a Board from the Board List!'}</p>
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
              <CardList oneBoard={selectedBoard}></CardList>
            {/* {selectedBoard.id ? <CardList board={selectedBoard}></CardList> : ''} */}
          </div>
          <div className="bottom-right">
            <section className= "newCardForm">
              <h2>Create a new card</h2>
              <NewCardForm addCardCallback={addCardsData}></NewCardForm>
            </section>
          </div>

          
        </section>  
      </main>
    </div>

  );
}

export default App;
