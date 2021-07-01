import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <li key={card.card_id}>
                <Card
                    id={card.card_id}  
                    message={card.message}
                    // onUpdate={props.addCard}
                    likeCount={card.likes_count}
                    likeIncreaseCallback={props.likeIncreaseCallback}
                    deleteCard={props.deleteCard}
                ></Card>
            </li>
        );
    });
    // sdofjd

    return (
        <section>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

CardList.propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
        card_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
    })),
    // addCard: PropTypes.func.isRequired,
    // likeIncreaseCallback: PropTypes.func.isRequired
};

export default CardList;