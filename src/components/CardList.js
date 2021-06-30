import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { useState, useEffect } from 'react';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}`)
        .then((response) => {
            setCardsData(response.data.cards);
            console.log(props)
        }).catch((error) => {
            console.log('Error:', error);
        })
    }, [props]);

    const cardElements = cardsData.map((card) => {
        return (<Card card_id={card.card_id} message={card.message}/>)
    });

    return (
    <section className='cards__container'>
      <section>
        <h2>Cards for {props.board.title}</h2>
        <div className='card-items__container'>
          {cardElements}
        </div>
      </section>
    </section>)
}

export default CardList;
