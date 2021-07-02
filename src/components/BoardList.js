import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = (props) => { 
    
    const listofBoards = props.boardsData.map((board) => {
        return (
            <Board 
            key= {board.id}
            title= {board.title}
            id= {board.id}
            owner= {board.owner}
            onBoardSelect= {props.selectedBoard}
            deleteBoard= {props.deleteBoard}
            />
        )
    })  
    return <div className='listofBoards'>{ listofBoards }</div>
}

export default BoardList;




BoardList.propTypes = {
    boardsData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        
    })),
    deleteBoard: PropTypes.func.isRequired,
    selectedBoard: PropTypes.func.isRequired
}


