import React from "react";
import Board from "./Board";
import './BoardList.css';

const BoardList = (props) => { 
    const {board} = props;
    const mapAll = () => {
        return board.map((board) => (
            <Board 
            board={board} 
            key={board.board_id}
            onSelectBoardCallBack={props.onSelectBoardCallBack}
            />
        ))
    }
    return (
        <section>
            {/* <h3 className="forBoards change">Boards</h3> */}
            {mapAll()}
        </section>
    );};

export default BoardList;