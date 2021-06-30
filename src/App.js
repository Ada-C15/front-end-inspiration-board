import React, { useState } from 'react';
import './App.css';
import BoardList from './components/BoardList';

function App() {
  const testData = [
    {
      id: 1,
      title: 'Break Week Fun'
    }, 
    {
      id: 2,
      title: 'Ada Is Awesome'
    },
    {
      id: 3,
      title: 'Shout Outs '
    },
  ]

  const [boardsData, setBoardsData] = useState(testData)

  return (
    <div>
      <h1> Inspiration Board </h1>
      <main>
      <section className='new-board-form__container'>
        <h2>Create a New Board</h2>
        {/* < NewBoardForm 
          addBoardCallBack={ newBoardData }
        /> */}
      </section>
      <section className='boards__container'>
        <h2>Choose A Board</h2>
        <div>
          < BoardList 
          boardsData= { boardsData }
          />
        </div>
      </section>
      <section> 
        < CardList />
      </section>
      </main>
    </div>
    
  );
}

export default App;
