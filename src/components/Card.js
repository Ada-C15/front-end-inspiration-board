import PropTypes from 'prop-types';
import './Board.css';

const Card = (props) => {

    return (
 
        <article className="post-it">
            <div>
                <div>{props.message}</div>
                <div classname="star-button" onClick={() => props.plusOneStar(props.card_id)}>{props.likes_count}⭐</div>
                <button className="delete-button" onClick={() => props.deleteCard(props.card_id)}>Delete</button>
            </div>
        </article>
    )
};  

Card.propTypes = {
    plusOneStar: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired
};

export default Card;