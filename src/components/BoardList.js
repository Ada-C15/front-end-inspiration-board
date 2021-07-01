import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';

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




BoardList.propTypes = {
    boardsData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        onBoardSelect: PropTypes.func.isRequired
    })),
    selectedBoard: PropTypes.func.isRequired
}


