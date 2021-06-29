import React from "react";
import { useState } from "react";

const Board = (props) => { 
    return (
        <button>
            {props.id}: {props.title}
        </button>
    );
};

export default Board;