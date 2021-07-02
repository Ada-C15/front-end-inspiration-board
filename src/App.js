import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';

function App() {
  //STATES:
  const [boardData, setBoardData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  const [boardCount, setBoardCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [showNewBoardForm, toggleNewBoardForm] = useState(false);
  const [sortMethod, setSortMethod] = useState('asc')
  

  // FUNCTIONS THAT MAKE API CALLS
  useEffect(() => {
    axios.get(`https://hip-hip-array-backend.herokuapp.com/boards`,
    {
      params: {
      format: 'json'
      }
    })
    .then( (response) => {
      setBoardData(response.data);
      console.log('success in finding boardList')
    })
    .catch( (error) => {
      console.log('error in getting board list');
      console.log(error.response)
      alert("Could not connect to boards")
    });
  }, [boardCount]);

  // this is used (1) to generate cards on the board whenever there's a change to the current board (currentBoard state),
  // or, (2) to re-render the cards when a card's like count increases, or (3) to re-render the cards when a card is deleted
  const renderCards = (sort='asc') => {
    axios.get(`https://hip-hip-array-backend.herokuapp.com/boards/${currentBoard.board_id}/cards`,
      {
        params: {
          format: 'json',
          sort: sort
        }
      })
    .then( (response) => {
        setCards(response.data);
        console.log('success in finding card list')
    })
    .catch( (error) => {
        console.log('error in getting card list');
        console.log(error.response)
    });
  }

  //this updates the cards whenever the current board is changed. This is necessary for CardList to work.
  useEffect(() => {
    if(Object.keys(currentBoard).length === 0) {
      console.log("no board selected so we won't try to render cards")
      setCards([]);
    } else {
      renderCards(sortMethod);
    }
  }, [currentBoard, sortMethod])

  //this increases a card's like count and re-renders all displayed cards
  const increaseLikeCount = (card_id) => {
    axios.patch(`https://hip-hip-array-backend.herokuapp.com/cards/${card_id}/like`,
    {
        params: {
            format: 'json'
        }
    })
    .then( (response) => {
        renderCards();
    })
    .catch( (error) => {
        console.log(error.response);
        alert("Could not like card")
    });
  }

  //this deletes a card and re-renders all displayed cards to reflect the change
  const deleteCard = (card_id) => {
    axios.delete(`https://hip-hip-array-backend.herokuapp.com/cards/${card_id}`,
    {
      params: {
        format: 'json'
      }
    })
    .then( (response) => {
      console.log(response.data);
      renderCards();
    })
    .catch( (error) => {
      console.log(error.response);
      alert("Could not delete card")
    });
  }

  const postNewBoard = (newBoardData) => {
    console.log(newBoardData);
    axios.post(`https://hip-hip-array-backend.herokuapp.com/boards`, newBoardData)
      .then((response) => {
        console.log('success! New board Created');
        console.log(response.data);
        setBoardCount(boardCount + 1);
      })
      .catch((error) => {
        console.log('Yeah that did not work quite right...');
        console.log(error.response.data);
      });
  };

  const postNewCard = (newCardData) => {
    axios.post(`https://hip-hip-array-backend.herokuapp.com/boards/${currentBoard.board_id}/cards`, newCardData, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
    }})
      .then((response) => {
        console.log('success! New card Created');
        console.log(response.data)
        renderCards()
      })
      .catch((error) => {
        console.log("Error. That didn't work.")
        console.log(error.response.status);
      });
  };

  // OTHER HELPER FUNCTIONS
  const selectBoard = (event) => {
    if (event.target.value) {
      for (let board of boardData) {
        if (event.target.value === board.title) {
          setCurrentBoard(board);
        }
      }
    } else {
      setCurrentBoard({});
    }
  }

  const generateBoardTitles = (boardData) => {
    const boardTitles = [];
    for (let board of boardData) {
        boardTitles.push(<option key={board.board_id} value={board.title}>{board.title}</option>);
    }
    return boardTitles;
  }

  const handleCardSubmit = (newCardData) => {
    console.log(newCardData);
    console.log(currentBoard);
    if (Object.keys(currentBoard).length === 0) {
      alert('You must first select a board!');
    } else {
      postNewCard(newCardData);
    }
  }


  return (
    <div className="App">

      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>

      <main>
        <div className='BoardStuff'>
          <div className="BoardList">
            <select id="boards" onChange={(event) => {selectBoard(event)}} value={currentBoard.title}>
              <option value="">Select Board:</option>
              {generateBoardTitles(boardData)}
            </select>
          </div>

          <div className="NewBoardForm">
            { showNewBoardForm ? <NewBoardForm onSubmitCallback={(newBoardData) => {postNewBoard(newBoardData)}}></NewBoardForm> : '' }
            <button onClick={() => toggleNewBoardForm(!showNewBoardForm)}>Show/Hide New Board Form</button>
          </div>
        </div>

        <Board className="board" data={currentBoard} cards={cards} onLikeClickCallback={increaseLikeCount} onDeleteClickCallback={deleteCard} onSubmitCallback={handleCardSubmit} onSortCallback={(event) => {setSortMethod(event.target.value)}} sortMethod={sortMethod}></Board>
      </main>
    </div>
  );
}

export default App;
