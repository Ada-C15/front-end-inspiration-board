import './Card.css';
import { useState } from 'react';

// const Card = (props) => {

// }

const Card = (props) => {
    // state to count likes
    const [cardLikes, setCardLikes] = useState(props.likesCount);

    // function callback for likes
    const likeButton = () => {
        props.likeCallBack(props.id)
        setCardLikes(cardLikes + 1)
    };

    // function callback for delete
    const deleteButton = () => {
        props.deleteCallBack(props.id)
    };


    return (
    <div className='card-item'>
        <p className='card-item__message'>{props.card.message}</p>
        <ul className='card-item__controls'>
            <li><p>{props.card.likes_count} 💕</p></li>
            <li><p onClick={() => props.plusOneCardItem(props.card)}>+1</p></li>
            <li><p className='card-item__delete' onClick={() => props.deleteCardItem(props.card)}>Delete</p></li>
        </ul>
        </div>);
    };

export default Card;