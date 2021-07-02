const Board = (props) => {
    return (
        <span className="board-list__item" onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</span>
    )
}

export default Board;
