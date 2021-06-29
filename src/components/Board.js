import './Board.css';


const Board = (props) => {
    return (
        <div className="board"
        onClick={() => props.onBoardSelect(props.board)}
        >
            {props.board.title}
        </div>
    );
};

export default Board;