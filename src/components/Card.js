
import { useState } from 'react';

const Card = (props) => {
    // state to count likes
    const [cardLikes, setCardLikes] = useState(props.likesCount);

    // function callback for likes
    const likeButton = () => {
        props.likeCallBack(props.id)
        console.log(cardLikes)
        setCardLikes(cardLikes + 1)
        
    };

    // function callback for delete
    const deleteButton = () => {
        props.deleteCallBack(props.id)
    };

    return (
        <div className='card-item'>
            <p className='card-item__message'>{props.message}</p>
            <ul className='card-item__controls'>
                <li><p>{cardLikes}💕</p></li>
                <li><p onClick={likeButton}>+1</p></li>
                <li><p className='card-item__delete' onClick={deleteButton}>🗑️</p></li>
            </ul>
        </div>);
    };

export default Card;