import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <ul key={card.card_id}>
                <Card
                    id={card.card_id}  
                    message={card.message}
                    likeCount={card.likes_count} Likes
                    likeIncreaseCallback={props.likeIncreaseCallback}
                    deleteCard={props.deleteCard}
                ></Card>
            </ul>
        );
    });

    return (
        <section className="each-card">
            {cardComponents}
        </section>
    );
};

CardList.propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
        card_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
    })),
        deleteCard: PropTypes.func.isRequired,
        likeIncreaseCallback: PropTypes.func.isRequired
};

export default CardList;