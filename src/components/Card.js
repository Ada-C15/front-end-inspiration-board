const Card = ({card_id, likes_count, message, deleteCardCallback, updateLikesCallback}) => {

    const onPlusOne = (event) => {
        updateLikesCallback(card_id)
    }

    const onMessageDelete = (event) => {
        deleteCardCallback(card_id)};

    return (
        <div className="card-item">
        <div className="card-item__message">
            <p>{message}</p>
            <ul className="card-item__controls">
                <li><button className="card-item__button" onClick={ onPlusOne }>💖 ⬆️</button></li>
                <li><p>Like count: {likes_count}</p></li>
                {<li><button className="card-item__button" onClick={ onMessageDelete }>Delete</button></li>}
            </ul>
        </div>
        </div>
    )
}

export default Card;
