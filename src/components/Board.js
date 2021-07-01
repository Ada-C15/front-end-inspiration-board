import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const Board = (props) => {

    return (
        <button onClick={() => props.onBoardSelect({id:props.id,title:props.title,owner:props.owner})}>
            {props.id}: {props.title}
        </button>
    );
    
};

export default Board;



// proptypes -BP
Board.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    owner: PropTypes.string.isRequired,
    onBoardSelect: PropTypes.func.isRequired

}