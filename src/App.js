import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/CardList.js';
import Card from './components/Card.js';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList'
import axios from 'axios';


function App() {
  const BASE_URL = 'http://localhost:3000';

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    // board_id: null
  });
  const [cards, setCards] = useState([]);


    //Testing API call works
  // useEffect(() => {
  //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/1/cards`)
  //     // axios.get('http://localhost:5000/boards', 
  //     // {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
  //     .then((response) => {
  //       console.log('card request ', response.data)
  //       console.log('card request.cards', response.data.cards)
  //     })
  //     .catch((error) => console.log(error));
  //   }, []);

  const createNewCard = (message) => {

    console.log('hi im in createNewCard')
    console.log('board id ', selectedBoard.id)

    const cardsData = [...cards];

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`, {
        message: message
      })
        .then((response)=>{
          console.log('post response ', response.data)
          console.log('post response.card ', response.data.card)

          // cardsData.push(response.data.card)
          setCards(cardsData)
        })
        .catch((error)=>console.log('error post', error));
    console.log('ALL IN ', cards)  
  } 

    const testDeleteCardCallback = (card_id) => {
      console.log('Im in delete')

    //   axios.delete(`${BASE_URL}/cards/card_id`)
    //   .then((response) => {console.log(response.data.status)
            //get all cards to get a list of al cards
        //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
        //     .then((response) => {
        //     console.log('select board response ', response.data)
        //     console.log('select board card ', response.data.cards)
                //update state with setCards
        //     setCards(response.data.cards)
        //     })
        //     .catch((error) => console.log(error));
    // )
    // .catch((error)=>console.log('error post', error.message));  
    } 

    const testLikeCallback = (card_id) => {
      console.log('Im in Like', card_id)

      // Request: “card_id” passed in the route. Card not found will give an error
      //   {
      //     "error_message": "Card 7 not found"
      //   }

      //   Response will be  
      //   {
      //     "card": {
      //         "board_id": 1,
      //         "id": 5,
      //         "like_count": 2,
      //         "message": "TESTING"
      //     }
     //}


    //   axios.patch(`${BASE_URL}/cards/card_id/like)
    //   .then(
          // axios.get(`${process.env.BASE_URL}/boards/${board.id}/cards`)
          // .then((response)=>{
          //   console.log(response.data)
          //   setCards(response.data.cards)
          // })
    //)
    //   .catch((error) => console.log(error))


    //   // update state/iterate through cards and find the one I want and change the likes count
    //   // then display the updated card
    //   // check out update student
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
    // axios.get('http://localhost:5000/boards', 
    // {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
    .then((response) => {
      console.log(response.data)
      setBoardsData(response.data)
    })
    .catch((error) => console.log(error));
  }, []);


  const CreateNewBoard = (newBoard) => {
    // const BASE_URL = "http://localhost:5000";
    console.log('newBoard ', newBoard)
    const board = [...boardsData];
    // board.push({
    //   title: newBoard.title,
    //   owner: newBoard.owner
    // })
    // setBoardsData(board);
    // axios.post(`${BASE_URL}/boards`, newBoard)
    // axios.post("http://localhost:5000/boards", newBoard)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
        .then((response) => {
          console.log('response ', response.data.board)
          board.push(response.data.board);
          setBoardsData(board);
        }).catch((error) => {
          console.log('error ', error)
        });
    
  }
  console.log('boardData ', boardsData);

  const onBoardSelect = (board) => {
    // const test = () => {
      setSelectedBoard(board)
      console.log('boardSelect ', board)

      axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
        .then((response) => {
          console.log('select board response ', response.data)
          console.log('select board card ', response.data.cards)
          setCards(response.data.cards)
        })
        .catch((error) => console.log(error));
  }

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const changeBoardForm = isBoardFormVisible ? 'Hide Board Form' : 'Show Board Form';

  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Create a New Board</h2>
      {isBoardFormVisible ? <NewBoardForm createNewBoard={CreateNewBoard}/> : ''}
      <input type="button" value={changeBoardForm} onClick = {() => setIsBoardFormVisible(!isBoardFormVisible)}/>

      <section>
        <h3>Boards</h3>
        <BoardList boards={boardsData} onBoardSelect={onBoardSelect}/>
      </section>

      { selectedBoard.title ? 
      <section className='cardsDisplay'>
      <section>
        <h3>{selectedBoard.owner}'s Selected Board</h3>
        <div> {selectedBoard.title} - {selectedBoard.owner}</div>
      </section>

        <h2>{selectedBoard.owner}'s Cards</h2>
        <main>
          <CardList cards={cards} deleteCallback={testDeleteCardCallback} likeCallback={testLikeCallback}/>
          <NewCardForm createNewCard={createNewCard} />
        </main>
      </section>
      : null 
    }
    </div>
  );
}
export default App;
