/*Board

Props:
board
onBoardSelect

****** onClick = {() => props.onBoardsSelect(props.title, props.owner)} ******
*/

const Board = (props) => {
    return (
        <div onClick = {() => props.onBoardSelect(props.board)}>
            {props.board.id}. {props.board.title}
        </div>
    )
}

export default Board;