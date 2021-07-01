import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/CardList.js';
import Card from './components/Card.js';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
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
const createCards = () => {
  const cards = [];

  let current_id = 0

  for(let row = 0; row < 9; row +=1) {
    cards.push({
      card_id: current_id,
      likes_count: 0,
      message: 'This works!'});
      current_id += 1
  }  
  console.log('cards', cards)
  return cards;
}


function App() {
  const BASE_URL = 'http://localhost:5000';

  const [boardsData, setBoardsData] = useState([])
  const [cards, setCards] = useState(createCards()); //for test data
  // const [cards, setCards] = useState([]);  //for API calls

  //when a user clicks a card list then:

  // useEffect(()=>{
    //   axios
    //   .get(`${BASE_URL}/cards`)
    //   .then((response) => console.log(response))
    //   //.then((response)=>setCards(response))//setCards will have an empty obj or list as default([])
    //   .catch((error)=>console.log(error));
    // }, []);
    //use state to
    //then it will trigger render so that it gets added to cardList with -setCards
    //the way we trigger a re-render is by calling a set function

  const createNewCard = (newCardObj) => {

    console.log('hi im in createNewCard')
    console.log(newCardObj.message)

    // axios
    //     .post(`${BASE_URL}/boards/{board_id}/cards/`, newCardObj)
    //     //   .then((response) => console.log(response))
    //     .then((response)=>{
    //       // const newCardsList = [...cards]
    //       // newCardsList.push(response.data)
    //       //setCards(newCardsList)
    //       setCards([...cards, response.data]) //do I need to specify here?
    //     })
    //     .catch((error)=>console.log(error));
  
    

    //recieves an object from NewCardForm constructed from the data from the form fields : 
    //{
  //   card_id: Id,
  //   likes_count: 0,
  //   message: ''
  //  }

    //put card data into database with POST request
    // useEffect(()=>{
    //   axios
    //   .post(`${BASE_URL}/cards`, {newCardObject.newMessage})
    //   .then((response) => console.log(response))
    //   //.then((response)=>setCards(response))//setCards will have an empty obj or list as default([])
          //or .then((response)=>())
    //   .catch((error)=>console.log(error));
    // }, []);

    // //then do API GET request to get all the cards and then put that data in setCards to update state
    
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

  return(
    <div className="Cards">
      <h2>Cards</h2>
      <main>
        <CardList cards={cards} onClickCallback={testfunction} deleteCallback={testDeleteCardCallback} likeCallback={testLikeCallback}/>
        <NewCardForm createNewCard={createNewCard} />
      </main>
    </div>
  )

  const CreateNewBoard = (newBoard) => {
    console.log('newBoard ', newBoard)
    const board = [...boardsData];
    board.push({
      title: newBoard.title,
      owner: newBoard.ownerName
    })
    setBoardsData(board);
    console.log('boardData ', boardsData);
  }


  return (
    <div>
      <h2>Create a New Board</h2>
      <NewBoardForm createNewBoard={CreateNewBoard}/>
    </div>
  );

}

export default App;
