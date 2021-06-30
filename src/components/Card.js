import './Card.css';
import PropTypes from 'prop-types';
import { useState } from 'react';


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
        <section>
            <p>{props.message}</p>
            <p>likes: {cardLikes}</p>
            <p onClick={likeButton}></p>
            <p onClick={deleteButton}></p>
        </section>
    );
}

export default Card;