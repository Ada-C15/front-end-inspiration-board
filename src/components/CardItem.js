import React, { useEffect, useState } from 'react';
import axios from "axios";

import './CardItem.css';

const CardItem = (props) => {

    const [likesCountCurrentState, setLikeCounts] = useState(props.likeCount);

    const BASE_URL = 'http://localhost:5000';

    const onClickCardItemLikeCallback = () => {
        console.log(`Card item ${props.cardId} like button click`);

        axios.put(`${BASE_URL}/board/${props.selectedBoardId}/cards/${props.cardId}`,
        {}).then((response) => {
            console.log(`card ${props.cardId} likesCount = ${response.data.likes_count}`);

            setLikeCounts(response.data.likes_count);

        }).catch((error)=>{
            console.log("error updating likesCount:", error.response.data)
        });
    };

    return (
        <div class="card-item">
        <p class="card-item__message">{props.message}</p>
        <ul class="card-item__controls">
        <li>
            <p>{likesCountCurrentState} 💕</p>
        </li>
        <li>
            <button onClick={onClickCardItemLikeCallback}>+1</button>
        </li>
        <li>
            <button class="card-item__delete" onClick={(e) => props.onCardDeleteCallback(props.cardId, e)}>Delete</button>
        </li>
        </ul>
    </div>
);
}

export default CardItem;