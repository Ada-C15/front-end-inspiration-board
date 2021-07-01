import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


                    // likeCallback={props.likeCallback}
                    // deleteCallback={props.deleteCallback}

const CardList = (props) => {

    console.log('cardsList props', props.cards[0])
    const cardComponents = props.cards.map((card) => {
        return(
            <li>
                <Card
                    id={card.id}
                    message={card.message}
                    onClick={props.onClickCallback}>

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


