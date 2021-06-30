import './CardList.css';
import PropTypes from 'prop-types';
import Card from './Card';
import NewCardForm from './NewCardForm';
import { useEffect, useState } from 'react';
import axios from 'axios';


const CardList = (props) => {

    // state to set cards
    const [cards, setCards] = useState([])

    // get request - get cards from back end & set the data in setCards state

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`)
            .then((response) => {
                setCards(response.data.cards)
            })
    }, [props.board.id])

    // map out values for each individual card
    const cardsDisplayed = cards.map((card) => {
        return (
            <div>
                <Card 
                key={card.id} 
                id={card.id} 
                message={card.message} 
                likeCount={card.likes_count}
                likeCallBack={props.likeCallBack}
                deleteCallBack={props.deleteCallBack}
                />
            </div>
        )
    });

    // return jsx 
    return (
        <section>
            <h2>Cards for {props.board.title}</h2>
            {cardsDisplayed}
            <NewCardForm addCardCallback={props.addCardCallback}></NewCardForm>
        </section>
    );
}

export default CardList;