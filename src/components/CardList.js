import React from 'react';
import Card from './Card';
import './CardList.css'
// import PropTypes from 'prop-types';




const CardList = (props) => {

    console.log('cardsList props', props.cards)
    const cardComponents = props.cards.map((card) => {
        return(
            <li className='card_list' key={card.id}>
                <Card
                    id={card.id}
                    board_id={card.board_id}
                    message={card.message}
                    like_count={card.like_count}
                    likeCallback={props.likeCallback}
                    deleteCallback={props.deleteCallback}
                    >

                </Card>
            </li>  
        ); 
    });
    return (
        <section>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};


// CardList.propTypes = {
//     cards: PropTypes.arrayOf(
//         PropTypes.arrayOf(PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             messsage: PropTypes.string.isRequired
//         }))
//     ),
//     onClickCallback: PropTypes.func
// };

export default CardList;


