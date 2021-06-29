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


  return (
    <div className="App">
      <header className="App-header">
      <h1>Inspiration Board</h1>
      </header>
      <main>
        <section>
          <ol>
            {boardComponent}
          </ol>
        </section>
        <NewBoardForm addBoardCallback = {addBoardsData}></NewBoardForm>
      </main>
    </div>
  );
}

export default App;
