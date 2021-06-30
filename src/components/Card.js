const Card = (card_id, like_count, message, deleteCardCallback) => {
    return (
        <div className="card-item">
        <div className="card-item__message">
            <p>{message}</p>
            <ul className="card-item__controls">
                <li><p>{like_count}💖</p></li>
                <li><p>+1</p></li>
                <li><p onClick={deleteCardCallback(card_id)}>Delete</p></li>
            </ul>
        </div>
        </div>
    )
}

export default Card;
