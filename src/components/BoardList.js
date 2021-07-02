import PropTypes from 'prop-types';
import Board from './Board';
import './Board.css';

const BoardList = (props) => {

    const onSelectChanged = (event) => {
        //render on page
        const index = event.target.value
        props.onBoardSelected(props.boards[index]);

        console.log(event.target);
        console.log(event.target.value);
    };

    const getAllOptions = () => {
        const options = props.boards.map((board, index) =>
            <option key={board.board_id} value={index}>{board.title}</option>
        );
    return options;
    };

    console.log(`${props.selectedBoard?.board_id} BoardList`);


    return (
    <section>
        <h2>Pick a board</h2>
        
        <select onChange={onSelectChanged}> 
            {getAllOptions()}
        </select>
        <section className="board-list-container">
            <main>
                <Board selectedBoard={props.selectedBoard}/>
            </main>
        </section>
    </section>
    )
};

BoardList.propTypes = {
    selectedBoard: PropTypes.string.isRequired,
    onBoardSelected: PropTypes.func.isRequired,
    boards: PropTypes.arrayOf(
        PropTypes.shape({
          board_id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          owner: PropTypes.string.isRequired
        }))
};

export default BoardList;