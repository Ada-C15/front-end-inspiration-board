import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css'

const Card = (props) => {
    // move this to parent file 
    const [likeCount, setLikeCount] = useState(1);

    const likeIncrease = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <div className="card_div">
            <h2>{props.value}</h2>
            <div>{likeCount}</div>
            <div className='btn_div'>
                <button onClick={likeIncrease}>UP</button>
                <button className="delete-btn">DELETE</button>
                {/* Make a delete function */}
            </div>
        </div>
    );
};



