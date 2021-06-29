import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import './App.css';
import NewBoardForm from './components/NewBoardForm';
import './App.css';

// Data Structure Model:
//
// BoardList = [
//     {title: 'title',
//       owner: 'owner',
//       cards: [{message: 'something', likes: 0}, {message: 'something else', likes: 2}]
//     },
//     {title: 'title',
//       owner: 'owner',
//       cards: [card1, card2, card3]
//     },
//     {title: 'title',
//       owner: 'owner',
//       cards: [card1, card2, card3]
//     }
//       ]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <h3>Boards List:</h3>
        <BoardList></BoardList>
        <h3>Selected Board: </h3>
        <h3>Create a New Board:</h3>
        <NewBoardForm></NewBoardForm>
      </main>
    </div>
  );
}

export default App;
