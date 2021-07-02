import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BoardList from './components/BoardList';
import Card from './components/Card';
import CardList from './components/CardList';
// import Board from './components/Board';
import NewCardForm from './NewCardForm';
import NewBoardForm from './components/NewBoardForm'
// when we click submit on create new board, it renders a new board list 
// App--> NewBoardForm(props)<--
// App --> NewBoardForm(props.eventHandler)   App then re- renders BoardList to display current boardlist
// BoardList is passing prop.name to SelectedBoard       
//App--> NewBoardForm(props)<--takes in formData and passes it back to app to be re-rendered in list when we click submit new board

// TESTING MAIN BRANCH

function App() {

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });

  //GET for Boards
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`).then((response)=> {
      console.log(response.data)
      setBoardsData(response.data);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t get boards for this');
    });
  }, []);

  const onSelectBoardCallback = (board) => {
    setSelectedBoard(board)
  }

  const boardsElements = boardsData.map((board) => {
    return (
      <li>
        <BoardList board={board} onBoardSelect={selectedBoard} onSelectBoardCallback={onSelectBoardCallback}/>
      </li>)
    });

  //POST for Board
  const createNewBoard = (event,newBoard) => {
    event.preventDefault()
    console.log(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard).then((response) => {
      console.log("Response:", response.data.board);
      const boards = [...boardsData];
      boards.push(response.data.board);
      setBoardsData(boards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }


  const [cardsData, setCardsData] = useState([]);
    //GET for Card
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.board_id}/cards`).then((response)=> {
        setCardsData(response.data);
      }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get cards for this board.');
      }); 
    }, []);

    const updateCardList = (board_id) => {
      const newCards = [...cardsData]
      setCardsData(newCards)
      console.log(cardsData)
    }
  
    // POST for Card
  const postNewCard = (message) => {
    axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.board_id}/cards`,
        {message}
    ).then((response) => {
      const cards = [...cardsData];
      cards.push(response.data.card);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error:', error);
      console.log(selectedBoard);
      alert('Couldn\'t create a new card.');
    });
  };
  
  //PUT for Cards
  const addOneLike = (card) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`).then((response) => {
      const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t +1 the card.');
    });
  };

  //DELETE for Cards
  const deleteCardItem = (card) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`).then((response) => {
      const newCardsData = cardsData.filter((existingCard) => {
        return existingCard.card_id !== card.card_id;
      })
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the card.');
    });
  }

  return (
    <div className="page__container">
      <div className="content__container"/>
        <h1>Inspiration Board</h1>
        <section className="boards__container"/>
          <section>
            <NewBoardForm createNewBoard={createNewBoard}/>
            <h2>Boards</h2>
            <ol className="boards__list">
              {boardsElements}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>
          </section>
          <section className="new-board-form__container"/>
          <section className="cards_container">
              < CardList deleteCard={deleteCardItem} cardsData={cardsData} postNewCard={postNewCard} onClickCallback={updateCardList} />
          </section>
          <section>
            <NewCardForm createNewCard={postNewCard}/>
          </section>
    </div>
  );
};

export default App;

// 