import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <li key={card.id}>
                <Card
                    id={card.id}  
                    message={card.message}
                    onUpdate={props.addCard}
                    likeCount={card.likes_count}
                ></Card>
            </li>
        );
    });

    return (
        <section>
            <h2>CARDS FOR {props.boardTitle}</h2>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

CardList.propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
    })),
    addCard: PropTypes.func.isRequired
};

export default CardList;