const Card = (props) => {
    return (
        <div className="card-item">
        <div className="card-item__message">
            <p>{props.message}</p>
            <ul>
                <li><p>{props.like_count}</p></li>
            </ul>
        </div>
        </div>
    )
}

export default Card;
