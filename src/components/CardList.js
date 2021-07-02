import PropTypes from 'prop-types';
import Card from './Card';
import './Board.css';
import axios from 'axios';

const CardList = (props) => {

    //sends request to axios with board id, gets response
    //uses a for loop to display each card

    const onSelectChanged = (event) => {
        //render on page
        const index = event.target.value
        props.onCardSelected(props.boards[index]);

        console.log(event.target);
        console.log(event.target.value);
    };

    const getAllCards = () => {
        const cardComponents = props.cards.map((card, index) =>
            <Card key={card.card_id} card_id={card.card_id} message={card.message} likes_count={props.likes_count} plusOneStar={props.plusOneStar} deleteCard={props.deleteCard}/>
        );
    return cardComponents;
    };

    console.log(`${props.selectedBoard?.board_id} CardList`);

    console.log(`${props.message} Message on CardList`);

    return (
    <section>
        <div className="cards-list flex">
            {getAllCards()}
        </div>
    </section>
    )
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
          PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
            board_id: PropTypes.number.isRequired 
          }))
};

export default CardList;


