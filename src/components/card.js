import './card.css';

const Card = ({ card, deleteCard, likeCard }) => {
    const cardClassName = 'card ' + card.color;
    return (
    <div className={cardClassName}>
        <h4>{card.message}</h4>
        <div>
            <span className='card-bottom'>{card.likes_count}</span>
            <span onClick={() => {likeCard(card)}} className='card-bottom'>❤️</span>
            <span onClick={() => {deleteCard(card)}} className='card-bottom'>🗑</span>
        </div>
    </div>);
    
};

export default Card;