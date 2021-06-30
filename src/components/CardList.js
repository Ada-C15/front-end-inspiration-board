import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { useState, useEffect } from 'react';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`)
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

    const createCard = (newCard) => {
      console.log(`props is ${props}, new card is ${newCard}`)
  
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`, newCard)
        .then((response) => {
          console.log(response.data);
          const cardThing = response.data
          const newData = [...cardsData]
  
          newData.push(cardThing)
  
          setCardsData(newData)
  
            })
          };

    return (
    <section className='cards__container'>
      <section>
        <h2>Cards for {props.board.title}</h2>
        <div className='card-items__container'>
          {cardElements}
        </div>
        <h2>Create a New Card</h2>
          <NewCardForm addCardCallback={createCard}/>
      </section>
    </section>)
}

export default CardList;
