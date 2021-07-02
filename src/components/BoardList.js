import Board from './Board';
import './BoardList.css'

/*Props:
onBoardSelect */

const BoardList = (props) => {

    const boardComponents = props.boards.map((board) => {
        return (
            <div className='board_list' key={board.id}>
                <Board 
                    // title = {board.title}
                    // owner = {board.ownerName}\
                    board = {board}
                    onBoardSelect = {props.onBoardSelect}
                />
            </div>
        );
    });

    return (
        <div>
            {boardComponents}
        </div>
    );

}

export default BoardList;