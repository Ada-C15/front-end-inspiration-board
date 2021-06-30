import React from 'react';
import Board from './Board';

const BoardList = (props) => { 
    
    const boardList = props.boardsData.map((board) => {
        return (
            <Board 
            title= {board.title}
            id= {board.id}
            owner= {board.owner}
            onBoardSelect= {props.selectedBoard}
            />
        )
    })  


    return <div>{ boardList }</div>

}

export default BoardList;
