import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
    // move this to parent file 
    const [boardTitle, setboardTitle] = useState("");

    const displayBoardButtonClick = () => {
        const displayBoard = {
            title: props.title,
        }
    }
    
    return (
        <div>
        <div className="selectedBoard_div"></div>
        <h2>SELECTED BOARD</h2>
        <div>
            <p onClick={displayBoardButtonClick}>{props.title}</p>
        </div>
        <div className="allBoards_div">
            <h2>BOARDS</h2>
            {/* How to increase index? */}
            <div>{indexIncrease}{boardTitle}</div>
        </div>
        </div>
    );
};


export default Board;

Board.propTypes = {
    title: PropTypes.string.isRequired,
};