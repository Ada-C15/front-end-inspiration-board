/*Board

Props:
board
onBoardSelect

****** onClick = {() => props.onBoardsSelect(props.title, props.owner)} ******
*/
import './Board.css'

const Board = (props) => {
    return (
        <div className='board_item' onClick = {() => props.onBoardSelect(props.board)}>
            {props.board.id}. {props.board.title}
        </div>
    )
}

export default Board;