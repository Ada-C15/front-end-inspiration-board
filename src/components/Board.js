import './Board.css';

const Board = (props) => {
    const { board} = props;
    console.log("data passed: ", board);
    return (
        <div onClick = {() => props.onSelectBoardCallBack(board)}>
            <h3>
                {board.board_id}. {board.title} 
            </h3>
        </div>
        // <section className="board">
        //     <h3>
        //     {board.board_id}. {board.title} 
        //     </h3>
        //     {/*<p>{board.owner}</p>*/}
        // </section>
    ); 
};
export default Board;