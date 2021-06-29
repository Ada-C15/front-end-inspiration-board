import Board from "./Board";

const BoardList = (props) => {
    const boardComponents = props.boardData.map(board => {
        return (
            <li key={ board.board_id }>
                <Board title = { board.title } />
            </li>
        )
    })
    return (
        <ol>
            {boardComponents}
        </ol>
    )
}

export default BoardList;
