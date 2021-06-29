import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
    const cardComponents = props.cards.map((card, index) => {
        return (
            <li key={index}>
                <Card
                    id={card.id}  
                    message={card.message}
                    onUpdate={props.addCard}
                ></Card>
            </li>
        );
    });

    return (
        <section>
            <h2>CARDS FOR {card.name}</h2>
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
    // onUpdateStudent: PropTypes.func.isRequired
};

export default CardList;