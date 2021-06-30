import './App.css';
import React, { useState } from 'react';
import NewBoardForm from './components/NewBoardForm';

function App() {

  const [boardsData, setBoardsData] = useState([{
    id: 1,
    titleData:"Shopping List",
    ownerData:"Priscille"
  }]
  )

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

  const boardComponent = boardsData.map( board => {
    return <li key={board.id}>{board.titleData}</li>
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
        <section className="displayBoard">
          <ol>
            {boardComponent}
          </ol>
        </section>
          {isBoardFormVisible ? <NewBoardForm addBoardCallback = {addBoardsData}/> : ""}
        <input type="button" value={isBoardFormVisible? "Hide New Board Form" : "Show New Board Form" } onClick={onClickCallback}/>
      </main>
    </div>
  );
}

export default App;
