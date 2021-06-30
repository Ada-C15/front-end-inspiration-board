const Card = ({card_id, like_count, message, deleteCardCallback}) => {

    
    const onMessageDelete = (event) => {
        deleteCardCallback(card_id)};
    
    return (
        <div className="card-item">
        <div className="card-item__message">
            <p>{message}</p>
            <ul className="card-item__controls">
                <li><p>{like_count}💖</p></li>
                <li><p>+1</p></li>
                {<li><button onClick={onMessageDelete}>Delete</button></li>}
            </ul>
        </div>
        </div>
    )
}

export default Card;
