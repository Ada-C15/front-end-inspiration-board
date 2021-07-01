import axios from 'axios';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { useState, useEffect } from 'react';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`)
        .then((response) => {
            setCardsData(response.data);
            console.log(props)
        }).catch((error) => {
            console.log('Error:', error);
        })
    }, [props]);

    const updateLikes = (card_id) => {
      axios.patch(`${ process.env.REACT_APP_BACKEND_URL }/cards/${ card_id }`)
      .then ((response) => {
        const newData = response.data
        const newCardsData = cardsData.map(card =>{
          if (card_id === card.card_id) {
            return newData;
          }
          return card;

      });

        setCardsData(newCardsData)
      }
      )
    }

    const deleteCardItem = (card_id) => {
        axios.delete(`${ process.env.REACT_APP_BACKEND_URL }/cards/${ card_id }`)
            .then((response) => {
                const newCardsData = cardsData.filter((existingCard) => {
                    return existingCard.card_id !== card_id;
                });
                setCardsData(newCardsData);
            })
            .catch((error) => {
                console.log("Error:", error);
                alert("Couldn't delete the card.");
            });
    };

    const cardElements = cardsData.map((card) => {
        return (<Card card_id={card.card_id} message={card.message} likes_count={card.likes_count} deleteCardCallback={deleteCardItem} updateLikesCallback= {updateLikes}/>)
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
      </section>
        <NewCardForm addCardCallback={createCard}/>
      </section>)
};

export default CardList;
