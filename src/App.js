import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

function App() {

  const [boardsData, setBoardsData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({
    'id': null,
    'title': '',
    'owner': ''
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards`).then((response) => {
      setBoardsData(response.data);
    })
  }, []);

  const createNewBoard = (newBoard) => { 
    axios.post(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards`, newBoard).then((response) => {
      console.log("Response:", response.data)
      const newBoards = [...boardsData]
      newBoards.push(response.data.board);
      setBoardsData(newBoards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    })}
  
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    if (selectedBoard?.id) {
      axios.get(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards/${selectedBoard.id}/cards`).then((response) => {
        setCardsData(response.data);
        console.log('Response is:',response.data)
      })
    }
  }, [selectedBoard]);

  const createNewCard = (newCard) => { 
    axios.post(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards/${selectedBoard.id}/cards`, newCard).then((response) => {
      const newCards = [...cardsData]
      newCards.push(response.data.card)
      setCardsData(newCards);
    }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new card.');
    })
  }

  const upvoteCard = (selectedCardId) => {
    axios
    .put(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/cards/${selectedCardId}/upvote`)
    .then((response) => {
        console.log(response.data.card)
        updateCardsList(response.data.card)
    })
    .catch((error) => {
      console.log(error.data.details)
    })
  };

  const deleteCard = (selectedCardId) => {
    axios
    .delete(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/cards/${selectedCardId}`)
    .then((response) => {
      axios
      .get(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards/${selectedBoard.id}/cards`)
      .then((response) => {
        setCardsData(response.data)
      })
      .catch((error) => {
        console.log(error.data.details)
      })
    })
    .catch((error) => {
      console.log(error.data.details)
    })
  };

  const updateCardsList = (selectedCard) => {
    const cards = cardsData.map(card => {
      if (selectedCard.id === card.id) {
        return selectedCard;
      } else {
        return card;
      }
    });
    setCardsData(cards)
  };


  const updateSingleCard = (selectedCardId, newMessage) => {
    axios.put(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/cards/${selectedCardId}`, newMessage) 
      .then((response) => {
        const cards = cardsData.map(card => {
          if (selectedCardId === card.id) {
            card.message = response.data.card.message
          }
          return card
      })
        setCardsData(cards)
    }).catch((error) => {
      console.log(error.data.details)
    })
  };


  const deleteBoard = (selectedBoardId) => {
    axios
    .delete(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards/${selectedBoardId}`)
    .then((response) => {
      axios
      .get(`${process.env.REACT_APP_DEPLOYED_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardsData(response.data)
      })
      .catch((error) => {
        console.log(error.data.details)
      })
    })
    .catch((error) => {
      console.log(error.data.details)
    })
  };

  const [showBoardForm, setShowBoardForm] = useState(true)

  const boardFormClick = () => {
    setShowBoardForm(!showBoardForm)
  }

  return (
    <div>
      <h1 className='homepage-title'> Inspiration Board </h1>

      <main>
      <section className='flex-container wrap'>
        <h2>Create a New Board</h2>
        {showBoardForm ? <NewBoardForm createNewBoard={ createNewBoard }/> : '' }
        <section>
          <button class='flex-item border-box' onClick={boardFormClick}>{showBoardForm ? 'Hide Me!' : 'Show Me!'}</button>
        </section>
      </section>

      <section className='choose-board-prompt'>
        <h2>Choose A Board</h2> 
        < BoardList 
        boardsData={ boardsData }
        selectedBoard={ setSelectedBoard }
        deleteBoard={ deleteBoard }
        />
      </section>

      <section className='cards_container'> 

        <div className='currentboard'>{selectedBoard.title}</div>
        < CardList 
          cardsData={ cardsData }
          upvoteCard={ upvoteCard }
          deleteCard={ deleteCard }
          editCard={ updateSingleCard }
          createNewCard={ createNewCard }

        />
      </section>

      <section className='create-card-prompt'> 
          <div>
            {selectedBoard.id !== null ? 
            <>
              <h3>Create A New Card</h3> 
              < NewCardForm createNewCard={ createNewCard }/>
            </>
            : ''
            }
          </div>
        </section>

      </main>
    </div>
    
  );
};

export default App;
