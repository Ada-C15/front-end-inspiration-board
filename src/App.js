import './App.css';    
import styled from 'styled-components'                                         // we need to update the styling
import React from 'react';
import { useState } from 'react';
import axios from 'axios';                                      // we need to use axios to connect to the backend

//BOARD-RELATED IMPORTS//
import Board from './components/Board'
import BoardList from './components/BoardList'
import NewBoardForm from './components/NewBoardForm'


function App() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// HIDE/SHOW STATE NewBoardForm ///////////////////////////////////////////////////////////////////
  const [show, setShow] = useState(false)

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// SELECTED BOARD STATE ///////////////////////////////////////////////////////////////////////////
  const defaultBoardItem = {
    title: '',
    owner: ''
  }

  const [selectedBoardItem, setSelectedBoardItem] =  useState(defaultBoardItem)         // set state for actively displayed/selected board   // store selectedBoard state by id

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////// SELECTED BOARD CALLBACK FUNCTION ///////////////////////////////////////////////////////////////
  const onBoardSelectCallback = (item) => {
    console.log(item)
    console.log(item.title)
    console.log(item.cards)
    console.log(item.id)
    console.log(item.owner)
    setSelectedBoardItem(item)
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLED COMPONENTS  ///////////////////////////////////////////////////////////
const AppContainer = styled.section`
    margin: 20px auto;
    font-family: 'Annie Use Your Telescope';
    background:#666;
    color:#fff;
    `

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: darkblue;
`;
const Wrapper = styled.section`
  padding: 2em;
  background: lightblue;
`;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (

    <AppContainer>
    <Wrapper>
      <Title>
          <h1>
            Inspiration Board
          </h1>
        </Title>
    </Wrapper>


          <div>
            <h2>Boards</h2>
            <BoardList onBoardSelectCallback={onBoardSelectCallback} />
          </div>  

          <div>
            <h2>Selected Boards</h2>
            <Board title={selectedBoardItem.title} owner={selectedBoardItem.owner}/>
          </div>

          <div>
            <h2>Create A New Board</h2>
            {show?<NewBoardForm/>:null}
            <button onClick={()=>setShow(!show)}> Hide/Show Form </button>
          </div>
          
          <div>
            <h2>New Card Form</h2>
          </div>

          <div>
            <h2>Cards List</h2>
            {/* <CardList cards={selectedBoardItem.cards}/> */}
          </div>

  </AppContainer>
  );
}

export default App;
