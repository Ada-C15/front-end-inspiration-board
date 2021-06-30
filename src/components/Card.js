import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
    <section>
        <ul>
            <li> Sticky Note: { props.id }</li>
            <li>Board ID: { props.boardId }</li>
            <li>Message: { props.message }</li>
            <li>Likes: { props.likesCount }</li>
        </ul>
    </section>
    )
}
export default Card;