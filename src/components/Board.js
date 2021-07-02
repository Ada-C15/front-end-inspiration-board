import React from "react";
import PropTypes from 'prop-types';
import './Board.css';


const Board = (props) => {

    const deleteBoardClick = () => {
        const selectedBoardId = props.id
        props.deleteBoard(selectedBoardId)
    };

    return (
        
            <div>
                <button className="boardbutton" onClick={() => props.onBoardSelect({id:props.id,title:props.title,owner:props.owner})}>
                    {props.title}
                </button>
                <button className="deletebutton" onClick={deleteBoardClick} >Delete Board</button>
            </div>
    
    );
    
};

export default Board;




Board.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    owner: PropTypes.string.isRequired,
    onBoardSelect: PropTypes.func.isRequired

}