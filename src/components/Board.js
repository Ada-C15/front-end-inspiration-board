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


const Student = (props) => {

    const onAttendanceButtonClick = () => {
        const updatedStudent = {
            id: props.id,
            nameData: props.name,
            emailData: props.email,
            isPresentData: !props.isPresent
        }

        // Invoke the function passed in through the prop named "onUpdate"
        // This function is referenced by the name "updateStudentData" in App
        props.onUpdate(updatedStudent);
    };

    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            <button onClick={onAttendanceButtonClick}>Toggle if {props.name} is present</button>
        </div>
    );
};

Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
    onUpdate: PropTypes.func.isRequired
};

export default Student;