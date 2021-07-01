import Board from './Board';

/*Props:
onBoardSelect */

const BoardList = (props) => {

    const boardComponents = props.boards.map((board) => {
        return (
            <div key={board.id}>
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