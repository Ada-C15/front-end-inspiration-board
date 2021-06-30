import React from "react";
import { useState } from "react";

const Board = (props) => {

    return (
        <button onClick={() => props.onBoardSelect({id:props.id,title:props.title,owner:props.owner})}>
            {props.id}: {props.title}
        </button>
    );
    
};

export default Board;