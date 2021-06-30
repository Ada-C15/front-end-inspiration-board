import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {
    // move this to parent file 
    // const [likeCount, setLikeCount] = useState(1);
    const{message, likesCount, id, onUpdate} = props;

    const likeIncrease = () => {
        props.setLikeCount(likesCount + 1);
    };

    return (
        <div className="card_div">
            <p>{message}</p>
            <div>{likesCount}</div>
            <div className='btn_div'>
                <button onClick={likeIncrease}>UP ❤️</button>
                <button className="delete-btn">DELETE</button>
                {/* Make a delete function */}
            </div>
        </div>
    );
};

export default Card;



