import './App.css';
import React, { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';

function App() {

  const [boardsData, setBoardsData] = useState([{
    id: 1,
    titleData:"Shopping List",
    ownerData:"Priscille"
  }])

  const [selectedBoard, setSelectedBoard] = useState([])

  // const [cardsData, setCardsData] = useState(
  //   [{

  //   }])

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true)

  const addBoardsData = newBoard => {
    const newBoardList = [...boardsData];

    const nextId = Math.max(...newBoardList.map(board => board.id)) + 1;

    newBoardList.push({
      id: nextId,
      titleData: newBoard.titleData,
      ownerData: newBoard.ownerData
    });
    setBoardsData(newBoardList)
  }

  const addCardsData = newCard => {
    const newCardList = [...selectedBoard];

    const nextId = Math.max(...newCardList.map(card => card.id)) + 1;

    newCardList.push({
      id: nextId,
      messageData: newCard.messageData
      // likes_count
    });
    setSelectedBoard(newCardList)

  }

  const selectABoard = (id) =>{
    const boards = boardsData.map(board => {
      if(board.id === id) {
      
      board["cards"] = {selectedBoard}
        }
        return board
      })
    setBoardsData(boards)
  }

  const boardComponent = boardsData.map( board => {
    return <li key={board.id}><Board id={board.id} title={board.titleData} owner={board.ownerData} onBoardSelect={selectABoard}></Board></li>
  })
  
  const onClickCallback = () => {
    setIsBoardFormVisible(!isBoardFormVisible)
  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>Inspiration Board</h1>
      </header>
      <main>
      <div className="left">
      <section className="displayBoard">
          <ol>
            {boardComponent}
          </ol>
        </section>
    
      </div>
      <div className="middle">
      <section>
          <h2>Selected Board</h2>
          {/* <p>{board.title}</p> */}
        </section>
      </div>
      <div className="right">
      <h2>Create a new board</h2>
          {isBoardFormVisible ? <NewBoardForm addBoardCallback = {addBoardsData}/> : ""}
        <input type="button" value={isBoardFormVisible? "Hide New Board Form" : "Show New Board Form" } onClick={onClickCallback}/>
        <h2>Create a new card</h2>
        <NewCardForm addCardCallback={addCardsData}></NewCardForm>
      </div>
      <div> <CardList cards={selectedBoard}></CardList></div>
        
      </main>
    </div>

  );
}

export default App;
