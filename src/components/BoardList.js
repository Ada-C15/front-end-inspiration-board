import React from 'react';
import Board from './Board';

const BoardList = (props) => { 
    
    const listofBoards = props.boardsData.map((board) => {
        return (
            <Board 
            title= {board.title}
            id= {board.id}
            owner= {board.owner}
            onBoardSelect= {props.selectedBoard}
            />
        )
    })  
    return <div>{ listofBoards }</div>
}

export default BoardList;
