import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/CardList.js';
import Card from './components/Card.js';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList'
import axios from 'axios';


//BLUEPRINTS: 
//"/cards", "/<int:id>/cards", "/<int:id>", "/<int:id>/like"
//"/boards"

// process.env.REACT_APP_BACKEND_URL
// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
  // ...
/*In the container component that holds data about boards

State:
boardsData
selectedBoard
isBoardFormVisible */

//Creates helper data array to test with
// const createCards = () => {
//   const cards = [];

//   let current_id = 0

//   for(let row = 0; row < 9; row +=1) {
//     cards.push({
//       card_id: current_id,
//       likes_count: 0,
//       message: 'This works!'});
//       current_id += 1
//   }  
//   console.log('cards', cards)
//   return cards;
// }


function App() {
  const BASE_URL = 'http://localhost:5000';

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

          cardsData.push(response.data.card)
          setCards(cardsData)
        })
        .catch((error)=>console.log('error post', error));
    console.log('ALL IN ', cards)  
  } 

    const testDeleteCardCallback = (card_id) => {
      console.log('Im in delete')
      // axios.delete(`${BASE_URL}/cards/card_id`)
      // .then(() =>);
    }

    const testLikeCallback = (card_id) => {
      console.log('Im in Like', card_id)

      //still needs logic

      // axios.patch(`${BASE_URL}/cards/card_id`)
      //.then(setCards(response.data.card))
      //.catch((error) => console.log(error))


      // update state/iterate through cards and find the one I want and change the likes count
      //then display the updated card
      //check out update student
    }

    const testfunction = () => {
      console.log('This is a test function')
    }

  // return(
  //   <div className="Cards">
  //     <h2>Cards</h2>
  //     <main>
  //       <CardList cards={cards} onClickCallback={testfunction} deleteCallback={testDeleteCardCallback} likeCallback={testLikeCallback}/>
  //       <NewCardForm createNewCard={createNewCard} />
  //     </main>
  //   </div>
  // )

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

      //   axios.get('http://localhost:5000/boards/board_id/cards', 
      //   {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}})
      //   .then((response) => {
      //     console.log(response.data)
      //     setCardsData(response.data)
      //   })
      //   .catch((error) => console.log(error));
      // };
  }

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  // const changeBoardForm = () => {
  //   if (isBoardFormVisible) {
  //     return "Hide Board Form"
  //   }else {
  //     return "Show Board Form"
  //   }
  // };
  const changeBoardForm = isBoardFormVisible ? 'Hide Board Form' : 'Show Board Form';

  //tenery is board form visible, render newboard form, if not ''
  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Create a New Board</h2>
      {isBoardFormVisible ? <NewBoardForm createNewBoard={CreateNewBoard}/> : ''}
      <input type="button" value={changeBoardForm} onClick = {() => setIsBoardFormVisible(!isBoardFormVisible)}/>
      {/* <NewBoardForm createNewBoard={CreateNewBoard}/> */}
      {/* <input type="button" value="Hide Board Form" onClick = {() => setIsBoardFormVisible(false)}/> */}

      <section>
        <h3>Boards</h3>
        <BoardList boards={boardsData} onBoardSelect={onBoardSelect}/>
      </section>
      <section>
        <h3>Selected Board</h3>
        <div> {selectedBoard.title} - {selectedBoard.owner}</div>
      </section>

      <h2>Cards</h2>
      <main>
        <CardList cards={cards} onClickCallback={testfunction} deleteCallback={testDeleteCardCallback} likeCallback={testLikeCallback}/>
        <NewCardForm createNewCard={createNewCard} />
      </main>
    </div>
  );

}

export default App;
