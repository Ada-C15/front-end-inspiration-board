import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = (boardId) => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`,
            {
            params: {
            format: 'json'
            }
            })
        .then( (response) => {
            setCards(response.data);
            console.log(cards);
            console.log('success in finding card list')
        })
        .catch( (error) => {
            console.log('error in getting card list');
            console.log(error.response)
        });
    }, []);
    return ("");

};

export default CardList;