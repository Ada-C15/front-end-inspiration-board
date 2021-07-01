import React from 'react';
import './BoardList.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import axios from 'axios';

//BoardList component is a container component that wraps up all of our Board 

const BoardList = (props) => {

  const selectBoardHandler = () => {
      console.log(`board ${props.board.board_id}`)
      props.onSelectBoardCallback(props.board)
  }

  return (
          <section className="titleContainer" onClick={selectBoardHandler}>
              {props.board.title}
          </section>
  )
  }
  
  export default BoardList;

// const BoardList = (props) => {
// const [boardsData, setBoardsData] = useState([])

// useEffect(() => {
//     console.log('I\'m in useEffect!');
    
//     console.log('or whenever pieceOfState is updated');
//   }, [props.selectBoardMenu]);




// return (
//         <div>
        
//         </div>
    


// )};

// export default BoardList;