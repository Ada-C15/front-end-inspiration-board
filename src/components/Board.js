import React from 'react';

import PropTypes from 'prop-types';

const Board = (props) => {

    const onBoardClick = () => {
        props.onBoardSelect(props.board)
    }
    

    return(
        <span onClick={onBoardClick}>{props.board.titleData}</span>
    )
}
// Add Proptypes
export default Board;

// in apps.js
