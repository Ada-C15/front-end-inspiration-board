import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Board from './components/Board';
import NewBoardForm from './components/NewBoardForm';

// getBoardData
function App() {
  //STATES:
  const [boardData, setBoardData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});
  const [boardCount, setBoardCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [showNewBoardForm, toggleNewBoardForm] = useState(true);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`,
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

  // this is used (1) to generate cards on the board whenever there's a change to the current board (currentBoard state),
  // or, (2) to re-render the cards when a card's like count increases, or (3) to re-render the cards when a card is deleted
  const renderCards = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.board_id}/cards`,
      {
        params: {
          format: 'json'
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
    renderCards();
  }, [currentBoard])


  //this increases a card's like count and re-renders all displayed cards
  const increaseLikeCount = (card_id) => {
    axios.patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}/like`,
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
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}`,
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
      alert("Could not delete card")
    });
  }

  const handleChange = (event) => { 
    selectBoard(event);
  }


  const generateBoardTitles = (boardData) => {
    const boardTitles = [];
    for (let board of boardData) {
        boardTitles.push(<option key={board.id} value={board.title}>{board.title}</option>);
    }
    return boardTitles;
  }

  const postNewBoard = (newBoardData) => {
    console.log(newBoardData);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardData)
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
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.board_id}/cards`, newCardData, {headers: {
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

  const handleBoardSubmit = (newBoardData) => {
    console.log(newBoardData);
    postNewBoard(newBoardData);
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
            <h3>Boards List:</h3>
            {/* Created this as a drop-down list, not sure if I like it */}
            <select id="boards" onChange={handleChange} value={currentBoard.title}>
              <option value=""></option>
              {generateBoardTitles(boardData)}
            </select>
          </div>

          <div className="SelectedBoard">
            <h3>Selected Board: </h3>
            <h4>{currentBoard.title}</h4>
          </div>

          <div className="NewBoardForm">
            <h3>Create a New Board:</h3>  
            { showNewBoardForm ? <NewBoardForm onSubmitCallback={handleBoardSubmit}></NewBoardForm> : '' }
            <button onClick={() => toggleNewBoardForm(!showNewBoardForm)}>Show New Board Form</button>
          </div>
        </div>

        <Board className="board" data={currentBoard} cards={cards} onLikeClickCallback={increaseLikeCount} onDeleteClickCallback={deleteCard} onSubmitCallback={handleCardSubmit}></Board>
      </main>
    </div>
  );
}

export default App;
