import React from 'react';

import PropTypes from 'prop-types';

const Board = (props) => {

    const onBoardClick = () => {
        props.onBoardSelect(props.id)
    }
    

    return(
        <span onClick={onBoardClick}>{props.title}</span>
    )
}
// Add Proptypes
export default Board;

// in apps.js
